import echarts from 'echarts'
import jingwei from './city'
// 后台返回的数据是这个样子的
var res = {
    major:{name:'武汉',value:200},
    down:[
        {name:'长沙',value:150},
        {name:'成都',value:100},
        {name:'郑州',value:80},
    ]
}

var citys = []

res.down.forEach(function(item,index){
    var cityItem = {
        name:item.name,
        // value:jingwei[''],
        symbolSize: 2,
        itemStyle: {
            normal: {
                color: "#F58158"
            }
        }
    }
})

var allData = {
    "citys": [ {
        "name": "杭州",
        "value": [120.15507, 30.274085, 10],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    },  {
        "name": "贵阳",
        "value": [106.630154, 26.647661, 2],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }, {
        "name": "深圳",
        "value": [114.057868, 22.543099, 14],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    },   {
        "name": "甘肃",
        "value": [103.826308, 36.059421, -2],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#58B3CC"
            }
        }
    },  {
        "name": "浙江",
        "value": [120.152792, 30.267447, -2],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#58B3CC"
            }
        }
    }, {
        "name": "海城",
        "value": [122.685217, 40.882377, 2],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }, {
        "name": "北京",
        "value": [116.407526, 39.90403, -14],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#58B3CC"
            }
        }
    }, {
        "name": "齐齐哈尔",
        "value": [126.661669, 45.742347, 1],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }, {
        "name": "咸阳",
        "value": [108.708991, 34.329605, 1],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }, {
        "name": "四川",
        "value": [104.075931, 30.651652, -5],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#58B3CC"
            }
        }
    }, {
        "name": "福田",
        "value": [114.055036, 22.52153, 2],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }, {
        "name": "福建",
        "value": [119.295144, 26.10078, -1],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#58B3CC"
            }
        }
    }, {
        "name": "海淀",
        "value": [116.298056, 39.959912, 32],
        "symbolSize": 3,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }, {
        "name": "惠州",
        "value": [114.416196, 23.111847, 1],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }, {
        "name": "青岛",
        "value": [120.38264, 36.067082, 52],
        "symbolSize": 3,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }, {
        "name": "朝阳",
        "value": [116.443108, 39.92147, 17],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }, {
        "name": "沈阳",
        "value": [123.431475, 41.805698, 41],
        "symbolSize": 3,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    },  {
        "name": "南京",
        "value": [118.796877, 32.060255, 17],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }, {
        "name": "新疆",
        "value": [87.627704, 43.793026, -2],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#58B3CC"
            }
        }
    }, {
        "name": "成都",
        "value": [104.066541, 30.572269, 1],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }, {
        "name": "陕西",
        "value": [108.954239, 34.265472, -2],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#58B3CC"
            }
        }
    }, {
        "name": "温州",
        "value": [120.699367, 27.994267, 1],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }, {
        "name": "石家庄",
        "value": [114.51486, 38.042307, 4],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }, {
        "name": "南昌",
        "value": [115.858198, 28.682892, 2],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }, {
        "name": "闵行",
        "value": [121.381709, 31.112813, 18],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }, {
        "name": "广州",
        "value": [113.264435, 23.129163, 13],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }, {
        "name": "西城",
        "value": [116.365868, 39.912289, 4],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    },{
        "name": "上海",
        "value": [121.473701, 31.230416, 44],
        "symbolSize": 3,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }, {
        "name": "内蒙古",
        "value": [111.765618, 40.817498, -23],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#58B3CC"
            }
        }
    }, {
        "name": "台州",
        "value": [121.420757, 28.656386, 1],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }, {
        "name": "苏州",
        "value": [120.585316, 31.298886, 14],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }, {
        "name": "房山",
        "value": [116.143267, 39.749144, 1],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    },{
        "name": "大连",
        "value": [121.614682, 38.914003, 40],
        "symbolSize": 3,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }, {
        "name": "广西",
        "value": [108.327546, 22.815478, -1],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#58B3CC"
            }
        }
    },  {
        "name": "郑州",
        "value": [113.625368, 34.7466, 1],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }, {
        "name": "东城",
        "value": [116.416357, 39.928353, 10],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }, {
        "name": "湖北",
        "value": [114.341862, 30.546498, -4],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#58B3CC"
            }
        }
    }, {
        "name": "克拉玛依",
        "value": [84.889207, 45.579889, 1],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }, {
        "name": "厦门",
        "value": [118.089425, 24.479834, 3],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }, {
        "name": "哈尔滨",
        "value": [126.534967, 45.803775, 8],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }, {
        "name": "江苏",
        "value": [118.763232, 32.061707, -1],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#58B3CC"
            }
        }
    },{
        "name": "延安",
        "value": [109.489727, 36.585455, 1],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }, {
        "name": "天津",
        "value": [117.200983, 39.084158, 28],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }, {
        "name": "长沙",
        "value": [112.938814, 28.228209, 5],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }, {
        "name": "安徽",
        "value": [117.284923, 31.861184, -1],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#58B3CC"
            }
        }
    }, {
        "name": "黑龙江",
        "value": [126.661669, 45.742347, -198],
        "symbolSize": 8,
        "itemStyle": {
            "normal": {
                "color": "#58B3CC"
            }
        }
    }, {
        "name": "西藏",
        "value": [91.117212, 29.646923, -1],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#58B3CC"
            }
        }
    }, {
        "name": "河南",
        "value": [113.274379, 34.445122, 0],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#58B3CC"
            }
        }
    }, {
        "name": "湖南",
        "value": [112.98381, 28.112444, -1],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#58B3CC"
            }
        }
    },{
        "name": "武汉",
        "value": [114.305393, 30.593099, 2],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }, {
        "name": "合肥",
        "value": [117.227239, 31.820587, 1],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }, {
        "name": "山东",
        "value": [117.020359, 36.66853, -6],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#58B3CC"
            }
        }
    }, {
        "name": "舟山",
        "value": [122.207216, 29.985295, 1],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }, {
        "name": "连云港",
        "value": [119.221611, 34.596653, 1],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }, {
        "name": "西安",
        "value": [108.940175, 34.341568, 3],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }, {
        "name": "济南",
        "value": [117.12, 36.651216, 4],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }, {
        "name": "绵阳",
        "value": [104.679114, 31.46745, 1],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }, {
        "name": "辽宁",
        "value": [123.42944, 41.835441, -58],
        "symbolSize": 3,
        "itemStyle": {
            "normal": {
                "color": "#58B3CC"
            }
        }
    }, {
        "name": "山西",
        "value": [112.562398, 37.873532, -3],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#58B3CC"
            }
        }
    }, {
        "name": "呼和浩特",
        "value": [111.749181, 40.842585, 2],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }, {
        "name": "河西",
        "value": [117.223372, 39.109563, 1],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }, {
        "name": "兴和",
        "value": [113.834173, 40.872301, 1],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }, {
        "name": "重庆",
        "value": [106.551557, 29.56301, 2],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }, {
        "name": "胶州",
        "value": [120.033382, 36.26468, 5],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }, {
        "name": "宁波",
        "value": [121.550357, 29.874557, 10],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }, {
        "name": "滨海",
        "value": [119.820831, 33.990334, 1],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }, {
        "name": "太原",
        "value": [112.548879, 37.87059, 2],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }, {
        "name": "鸡西",
        "value": [130.969333, 45.295075, 1],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }, {
        "name": "长春",
        "value": [125.323544, 43.817072, 8],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#F58158"
            }
        }
    }],
    "moveLines": [{
        "fromName": "黑龙江",
        "toName": "珠海",
        "coords": [
            [126.661669, 45.742347],//from地名的经纬度
            [113.576726, 22.270715]//to地名的经纬度
        ]
    }, {
        "fromName": "黑龙江",
        "toName": "大连",
        "coords": [
            [126.661669, 45.742347],
            [121.614682, 38.914003]
        ]
    }, {
        "fromName": "辽宁",
        "toName": "集安",
        "coords": [
            [123.42944, 41.835441],
            [126.194031, 41.125307]
        ]
    }, {
        "fromName": "吉林",
        "toName": "抚顺",
        "coords": [
            [126.549572, 43.837883],
            [123.957208, 41.880872]
        ]
    }, {
        "fromName": "山东",
        "toName": "南京",
        "coords": [
            [117.020359, 36.66853],
            [118.796877, 32.060255]
        ]
    }, {
        "fromName": "北京",
        "toName": "沈阳",
        "coords": [
            [116.407526, 39.90403],
            [123.431475, 41.805698]
        ]
    }, {
        "fromName": "黑龙江",
        "toName": "环翠",
        "coords": [
            [126.661669, 45.742347],
            [122.123444, 37.501991]
        ]
    }, {
        "fromName": "天津",
        "toName": "大连",
        "coords": [
            [117.200983, 39.084158],
            [121.614682, 38.914003]
        ]
    }, {
        "fromName": "吉林",
        "toName": "兴和",
        "coords": [
            [126.549572, 43.837883],
            [113.834173, 40.872301]
        ]
    }, {
        "fromName": "河北",
        "toName": "勃利",
        "coords": [
            [114.475704, 38.584854],
            [130.592171, 45.755063]
        ]
    }, {
        "fromName": "吉林",
        "toName": "大连",
        "coords": [
            [126.549572, 43.837883],
            [121.614682, 38.914003]
        ]
    }, {
        "fromName": "吉林",
        "toName": "沈阳",
        "coords": [
            [126.549572, 43.837883],
            [123.431475, 41.805698]
        ]
    }, {
        "fromName": "黑龙江",
        "toName": "闵行",
        "coords": [
            [126.661669, 45.742347],
            [121.381709, 31.112813]
        ]
    }, {
        "fromName": "天津",
        "toName": "朝阳",
        "coords": [
            [117.200983, 39.084158],
            [116.443108, 39.92147]
        ]
    }, {
        "fromName": "吉林",
        "toName": "黄岛",
        "coords": [
            [126.549572, 43.837883],
            [120.04619, 35.872664]
        ]
    }, {
        "fromName": "内蒙古",
        "toName": "上海",
        "coords": [
            [111.765618, 40.817498],
            [121.473701, 31.230416]
        ]
    }, {
        "fromName": "内蒙古",
        "toName": "南京",
        "coords": [
            [111.765618, 40.817498],
            [118.796877, 32.060255]
        ]
    }, {
        "fromName": "辽宁",
        "toName": "杭州",
        "coords": [
            [123.42944, 41.835441],
            [120.15507, 30.274085]
        ]
    }, {
        "fromName": "黑龙江",
        "toName": "海城",
        "coords": [
            [126.661669, 45.742347],
            [122.685217, 40.882377]
        ]
    }, {
        "fromName": "吉林",
        "toName": "西城",
        "coords": [
            [126.549572, 43.837883],
            [116.365868, 39.912289]
        ]
    }, {
        "fromName": "四川",
        "toName": "上海",
        "coords": [
            [104.075931, 30.651652],
            [121.473701, 31.230416]
        ]
    }, {
        "fromName": "黑龙江",
        "toName": "西城",
        "coords": [
            [126.661669, 45.742347],
            [116.365868, 39.912289]
        ]
    }, {
        "fromName": "吉林",
        "toName": "丹东",
        "coords": [
            [126.549572, 43.837883],
            [124.354707, 40.0005]
        ]
    }, {
        "fromName": "吉林",
        "toName": "宁波",
        "coords": [
            [126.549572, 43.837883],
            [121.550357, 29.874557]
        ]
    }, {
        "fromName": "辽宁",
        "toName": "海淀",
        "coords": [
            [123.42944, 41.835441],
            [116.298056, 39.959912]
        ]
    }, {
        "fromName": "辽宁",
        "toName": "青岛",
        "coords": [
            [123.42944, 41.835441],
            [120.38264, 36.067082]
        ]
    }]
};

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
                show: false
            }
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
        zlevel: 2,
        rippleEffect: {
            brushType: 'stroke'
        },
        label: {
            emphasis: {
                show: true,
                position: 'right',
                formatter: '{b}'
            }
        },
        symbolSize: 2,
        showEffectOn: 'render',
        itemStyle: {
            normal: {
                color: '#46bee9'
            }
        },
        data: allData.citys
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
                width: 1,
                opacity: 0.2,
                curveness: 0.1
            }
        },
        data: allData.moveLines
    }]
};
function Map(chart,o){
    chart.setOption(option)
}
export default Map