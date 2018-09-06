import echarts from 'echarts'
// 全国地级市的经纬度数据
import jingwei from './cityCoords'
// 后台返回的数据是这个样子的
var res = {
    major: {
        name: '武汉',
        value: 800
    },
    down: [{
            name: '长沙',
            value: 150
        },
        {
            name: '成都',
            value: 500
        },
        {
            name: '郑州',
            value: 100
        },
        {
            name: '昆明',
            value: 200
        },
        {
            name: '深圳',
            value: 300
        },
        {
            name: '北京',
            value: 180
        },
        {
            name: '乌鲁木齐',
            value: 120
        },
        {
            name: '杭州',
            value: 365
        },
    ]
}

var citys = []
var moveLines = []
citys.push({
    name: res.major.name,
    value: jingwei[res.major.name].concat(res.major.value),
    itemStyle: {
        normal: {
            color: "#ff0"
        }
    }
})
res.down.forEach(function(item, index) {
    var cityItem = {
        name: item.name,
        value: jingwei[item.name].concat(item.value),
        itemStyle: {
            normal: {
                color: "#F58158"
            }
        }
    }
    citys.push(cityItem)
    var moveLinesItem = {
        fromName: res.major.name,
        toName: item.name,
        coords: [jingwei[res.major.name], jingwei[item.name]]
    }
    moveLines.push(moveLinesItem)
})

var option = {
    backgroundColor: '#404a59',
    title: {
        // text: '设备拓扑图',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    legend: {
        show: false,
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data: ['地点', '线路'],
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false,
                textStyle: {
                    color: '#666'
                }
            },
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#404a59'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: [{
        name: '地点',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 3,
        label: {
            emphasis: {
                show: true,
                position: 'right',
                formatter: '{b}'
            }
        },
        symbolSize: function(val) {
            return val[2] / 50
        },
        showEffectOn: 'render',
        itemStyle: {
            normal: {
                color: '#46bee9'
            }
        },
        data: citys
    }, {
        name: '线路',
        type: 'lines',
        coordinateSystem: 'geo',
        zlevel: 2,
        large: true,
        effect: {
            show: true,
            constantSpeed: 30,
            symbol: 'pin',
            symbolSize: 3,
            trailLength: 0,
        },
        lineStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#58B3CC'
                }, {
                    offset: 1,
                    color: '#F58158'
                }], false),
                width: 2,
                opacity: 0.4,
                curveness: -0.2
            }
        },
        data: moveLines
    }]
};

function Map(chart, o) {
    chart.setOption(option)
}
export default Map