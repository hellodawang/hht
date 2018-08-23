import china from 'echarts/map/json/china.json';
import hainan from 'echarts/map/json/province/hainan.json'
import xizang from 'echarts/map/json/province/xizang.json'
import zhejiang from 'echarts/map/json/province/zhejiang.json'
import yunnan from 'echarts/map/json/province/yunnan.json'
import xinjiang from 'echarts/map/json/province/xinjiang.json'
import tianjin from 'echarts/map/json/province/tianjin.json'
import sichuan from 'echarts/map/json/province/sichuan.json'
import shanxi from 'echarts/map/json/province/shanxi1.json'
import shangxi from 'echarts/map/json/province/shanxi.json'
import shanghai from 'echarts/map/json/province/shanghai.json'
import shangdong from 'echarts/map/json/province/shandong.json'
import qinghai from 'echarts/map/json/province/qinghai.json'
import ningxia from 'echarts/map/json/province/ningxia.json'
import neimenggu from 'echarts/map/json/province/neimenggu.json'
import liaoning from 'echarts/map/json/province/liaoning.json'
import jilin from 'echarts/map/json/province/jilin.json'
import jiangxi from 'echarts/map/json/province/jiangxi.json'
import jiangsu from 'echarts/map/json/province/jiangsu.json'
import hunan from 'echarts/map/json/province/hunan.json'
import hubei from 'echarts/map/json/province/hubei.json'
import henan from 'echarts/map/json/province/henan.json'
import heilongjiang from 'echarts/map/json/province/heilongjiang.json'
import hebei from 'echarts/map/json/province/hebei.json'
import guizhou from 'echarts/map/json/province/guizhou.json'
import guangxi from 'echarts/map/json/province/guangxi.json'
import guangdong from 'echarts/map/json/province/guangdong.json'
import gansu from 'echarts/map/json/province/gansu.json'
import chongqing from 'echarts/map/json/province/chongqing.json'
import aomen from 'echarts/map/json/province/aomen.json'
import anhui from 'echarts/map/json/province/anhui.json'
import beijing from 'echarts/map/json/province/beijing.json'
import fujian from 'echarts/map/json/province/fujian.json'
import xianggang from 'echarts/map/json/province/xianggang.json'

import echarts from 'echarts'
echarts.extendsMap = function(dom, opt) {
    echarts.registerMap('china', china);
    // 实例
    var chart = this.init(dom);
    var curGeoJson = {};
    var cityMap = {
        '中国': china,
        '上海': shanghai,
        '河北': hebei,
        '山西': shangxi,
        '内蒙古': neimenggu,
        '辽宁': liaoning,
        '吉林': jilin,
        '黑龙江': heilongjiang,
        '江苏': jiangsu,
        '浙江': zhejiang,
        '安徽': anhui,
        '福建': fujian,
        '江西': jiangxi,
        '山东': shangdong,
        '河南': henan,
        '湖北': hubei,
        '湖南': hunan,
        '广东': guangdong,
        '广西': guangxi,
        '海南': hainan,
        '四川': sichuan,
        '贵州': guizhou,
        '云南': yunnan,
        '西藏': xizang,
        '陕西': shanxi,
        '甘肃': gansu,
        '青海': qinghai,
        '宁夏': ningxia,
        '新疆': xinjiang,
        '北京': beijing,
        '天津': tianjin,
        '重庆': chongqing,
        '香港': xianggang,
        '澳门': aomen
    };
    var levelColorMap = {
        '1': 'rgba(241, 109, 115, .8)',
        '2': 'rgba(255, 235, 59, .7)',
        '3': 'rgba(147, 235, 248, 1)'
    };

    var defaultOpt = {
        mapName: 'china', // 地图展示
        goDown: false, // 是否下钻
        bgColor: '#404a59', // 画布背景色
        activeArea: [], // 区域高亮,同echarts配置项
        data: [],
        // 下钻回调(点击的地图名、实例对象option、实例对象)
        callback: function(name, option, instance) {}
    };
    if (opt) opt = this.util.extend(defaultOpt, opt);

    // 层级索引
    var name = [opt.mapName];
    var idx = 0;
    var pos = {
        leftPlus: 60,
        leftCur: 50,
        left: 50,
        top: 30
    };

    var line = [
        [0, 0],
        [8, 11],
        [0, 22]
    ];
    // style
    var style = {
        font: '18px "Microsoft YaHei", sans-serif',
        textColor: '#eee',
        lineColor: 'rgba(147, 235, 248, .8)'
    };

    var handleEvents = {
        /**
         * i 实例对象
         * o option
         * n 地图名
         **/
        resetOption: function(i, o, n) {
            var breadcrumb = this.createBreadcrumb(n);
            var j = name.indexOf(n);
            var l = o.graphic.length;
            if (j < 0) {
                o.graphic.push(breadcrumb);
                o.graphic[0].children[0].shape.x2 = 145;
                o.graphic[0].children[1].shape.x2 = 145;
                if (o.graphic.length > 2) {
                    var cityData = [];
                    var cityJson;
                    for (var x = 0; x < opt.data.length; x++) {
                        if (n === opt.data[x].city) {
                            [opt.data[x]].each(function(index, data) {
                                cityJson = { city: data.city, name: data.name, value: data.value, crew: data.crew, company: data.company, position: data.position, region: data.region };
                                cityData.push(cityJson)
                            })
                        }
                    }
                }
                name.push(n);
                idx++;
            } else {
                o.graphic.splice(j + 2, l);
                if (o.graphic.length <= 2) {
                    o.graphic[0].children[0].shape.x2 = 60;
                    o.graphic[0].children[1].shape.x2 = 60;
                };
                name.splice(j + 1, l);
                idx = j;
                pos.leftCur -= pos.leftPlus * (l - j - 1);
            };

            o.geo.map = n;
            o.geo.zoom = 0.4;

            // o.series[0].data = [
            //     { name: '武汉市', value: 200 }
            // ]
            i.clear();
            i.setOption(o);
            this.zoomAnimation();
            opt.callback(n, o, i);
        },

        /**
         * name 地图名
         **/
        createBreadcrumb: function(name) {
            var cityToPinyin = {
                '中国': 'china',
                '上海': 'shanghai',
                '河北': 'hebei',
                '山西': 'shangxi',
                '内蒙古': 'neimenggu',
                '辽宁': 'liaoning',
                '吉林': 'jilin',
                '黑龙江': 'heilongjiang',
                '江苏': 'jiangsu',
                '浙江': 'zhejiang',
                '安徽': 'anhui',
                '福建': 'fujian',
                '江西': 'jiangxi',
                '山东': 'shangdong',
                '河南': 'henan',
                '湖北': 'hubei',
                '湖南': 'hunan',
                '广东': 'guangdong',
                '广西': 'guangxi',
                '海南': 'hainan',
                '四川': 'sichuan',
                '贵州': 'guizhou',
                '云南': 'yunnan',
                '西藏': 'xizang',
                '陕西': 'shanxi',
                '甘肃': 'gansu',
                '青海': 'qinghai',
                '宁夏': 'ningxia',
                '新疆': 'xinjiang',
                '北京': 'beijing',
                '天津': 'tianjin',
                '重庆': 'chongqing',
                '香港': 'xianggang',
                '澳门': 'aomen'
            };
            var breadcrumb = {
                type: 'group',
                id: name,
                left: pos.leftCur + pos.leftPlus,
                top: pos.top + 3,
                children: [{
                    type: 'polyline',
                    left: -90,
                    top: -5,
                    shape: {
                        points: line
                    },
                    style: {
                        stroke: '#fff',
                        key: name
                            // lineWidth: 2,
                    },
                    onclick: function() {
                        var name = this.style.key;
                        handleEvents.resetOption(chart, option, name);
                    }
                }, {
                    type: 'text',
                    left: -68,
                    top: 'middle',
                    style: {
                        text: name,
                        textAlign: 'center',
                        fill: style.textColor,
                        font: style.font
                    },
                    onclick: function() {
                        var name = this.style.text;
                        handleEvents.resetOption(chart, option, name);
                    }
                }, {
                    type: 'text',
                    left: -68,
                    top: 10,
                    style: {

                        name: name,
                        text: cityToPinyin[name] ? cityToPinyin[name] : '',
                        textAlign: 'center',
                        fill: style.textColor,
                        font: '12px "Microsoft YaHei", sans-serif',
                    },
                    onclick: function() {
                        // console.log(this.style);
                        var name = this.style.name;
                        handleEvents.resetOption(chart, option, name);
                    }
                }]
            }

            pos.leftCur += pos.leftPlus;

            return breadcrumb;
        },
        zoomAnimation: function() {
            var count = null;
            var zoom = function(per) {
                if (!count) count = per;
                count = count + per;
                chart.setOption({
                    geo: {
                        zoom: count
                    }
                });
                if (count < 1) window.requestAnimationFrame(function() {
                    zoom(0.5);
                });
            };
            window.requestAnimationFrame(function() {
                zoom(0.5);
            });
        }
    };

    var option = {
        backgroundColor: opt.bgColor,
        tooltip: {
            show: true,
            trigger: 'item',
            alwaysShowContent: false,
            backgroundColor: 'rgba(50,50,50,0.7)',
            hideDelay: 100,
            triggerOn: 'mousemove',
            enterable: true,
            // position:['60%','70%'],
            // formatter:function(params, ticket, callback){
            //     return '简称：'+params.data.value+'<br/>'
            // }
        },
        graphic: [{
                type: 'group',
                left: pos.left,
                top: pos.top - 4,
                children: [{
                    type: 'line',
                    left: 0,
                    top: -20,
                    shape: {
                        x1: 0,
                        y1: 0,
                        x2: 60,
                        y2: 0
                    },
                    style: {
                        stroke: style.lineColor,
                    }
                }, {
                    type: 'line',
                    left: 0,
                    top: 20,
                    shape: {
                        x1: 0,
                        y1: 0,
                        x2: 60,
                        y2: 0
                    },
                    style: {
                        stroke: style.lineColor,
                    }
                }]
            },
            {
                id: name[idx],
                type: 'group',
                left: pos.left + 2,
                top: pos.top,
                children: [{
                    type: 'polyline',
                    left: 90,
                    top: -12,
                    shape: {
                        points: line
                    },
                    style: {
                        stroke: 'transparent',
                        key: name[0]
                    },
                    onclick: function() {
                        var name = this.style.key;
                        handleEvents.resetOption(chart, option, name);
                    }
                }, {
                    type: 'text',
                    left: 0,
                    top: 'middle',
                    style: {
                        text: '中国',
                        textAlign: 'center',
                        fill: style.textColor,
                        font: style.font
                    },
                    onclick: function() {
                        handleEvents.resetOption(chart, option, 'china');
                    }
                }, {
                    type: 'text',
                    left: 0,
                    top: 10,
                    style: {
                        text: 'China',
                        textAlign: 'center',
                        fill: style.textColor,
                        font: '12px "Microsoft YaHei", sans-serif',
                    },
                    onclick: function() {
                        handleEvents.resetOption(chart, option, 'china');
                    }
                }]
            }
        ],
        geo: {
            map: opt.mapName,
            roam: false,
            zoom: 1,
            label: {
                normal: {
                    show: false,
                    textStyle: {
                        color: '#fff'
                    }
                },
                emphasis: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderColor: 'rgba(147, 235, 248, 1)',
                    borderWidth: 1,
                    areaColor: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.8,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(128, 217, 248, 1)',
                    // shadowColor: 'rgba(255, 255, 255, 1)',
                    shadowOffsetX: -2,
                    shadowOffsetY: 2,
                    shadowBlur: 10
                },
                emphasis: {
                    areaColor: '#389BB7',
                    borderWidth: 0
                }
            },
            regions: opt.activeArea.map(function(item) {
                if (typeof item !== 'string') {
                    return {
                        name: item.name,
                        itemStyle: {
                            normal: {
                                areaColor: item.areaColor || '#389BB7'
                            }
                        },
                        label: {
                            normal: {
                                show: item.showLabel,
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        }
                    }
                } else {
                    return {
                        name: item,
                        itemStyle: {
                            normal: {
                                borderColor: '#91e6ff',
                                areaColor: '#389BB7'
                            }
                        }
                    }
                }
            }),
        },
        visualMap: {
            min: 0,
            max: 1500,
            left: 'right',
            top: 'bottom',
            text: ['High', 'Low'],
            seriesIndex: [0],
            inRange: {
                color: ['#e0ffff', '#006edd']
            },
            calculable: true
        },
        series: [{
            name: '设备',
            type: 'map',
            geoIndex: 0,
            // tooltip: {show: false},
            data: [
                { name: '北京', value: 1000 },
                { name: '天津', value: 1000 },
                { name: '上海', value: 1000 },
                { name: '重庆', value: 250 },
                { name: '河北', value: 100 },
                { name: '河南', value: 300 },
                { name: '云南', value: 1000 },
                { name: '辽宁', value: 1000 },
                { name: '黑龙江', value: 1000 },
                { name: '湖南', value: 1000 },
                { name: '安徽', value: 500 },
                { name: '山东', value: 1000 },
                { name: '新疆', value: 800 },
                { name: '江苏', value: 1000 },
                { name: '浙江', value: 0 },
                { name: '江西', value: 1000 },
                { name: '湖北', value: 1000 },
                { name: '广西', value: 1000 },
                { name: '甘肃', value: 1000 },
                { name: '山西', value: 1000 },
                { name: '内蒙古', value: 1000 },
                { name: '陕西', value: 1000 },
                { name: '吉林', value: 1000 },
                { name: '福建', value: 1000 },
                { name: '贵州', value: 1000 },
                { name: '广东', value: 1000 },
                { name: '青海', value: 1000 },
                { name: '西藏', value: 1000 },
                { name: '四川', value: 1000 },
                { name: '宁夏', value: 1000 },
                { name: '海南', value: 1000 },
                { name: '台湾', value: 1000 },
                { name: '香港', value: 1000 },
                { name: '澳门', value: 1000 }
            ]
        }]
    };

    chart.setOption(option);
    // 添加事件
    chart.on('click', function(params) {
        var _self = this;
        if (opt.goDown && params.name !== name[idx]) {
            // 判断当处于省级地图时 点击显示弹出框
            if (idx == 1) {
                alert(params.name)
            }
            if (cityMap[params.name]) {
                var data = cityMap[params.name];
                echarts.registerMap(params.name, data);
                handleEvents.resetOption(_self, option, params.name);
            }
        }

    });

    chart.setMap = function(mapName) {
        var _self = this;
        if (mapName.indexOf('市') < 0) mapName = mapName + '市';
        var citySource = cityMap[mapName];
        if (citySource) {
            var url = './map/' + citySource + '.json';
            console.log(citySource)
                // $.get(url, function(response) {
                // console.log(response);
                // curGeoJson = response;
                // echarts.registerMap(mapName, response);
                // handleEvents.resetOption(_self, option, mapName);
                // });
        }

    };

    return chart;
};

export default echarts