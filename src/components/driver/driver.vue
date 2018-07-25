<template>
    <el-row class="driver-wrapper" :gutter="10">
        <el-col :span="6" class="col-one">
            <div class="section">
                <div class="section-title"> 
                    <h3>用户登录统计</h3> 
                    <div class="toolbar">
                        <i class="icon icon-refresh"></i>
                        <i class="icon icon-fullScreen"></i>
                        <i class="icon icon-close"></i>
                    </div>
                </div>
                <div class="section-content">
                    <div ref="myEchart" style="height:320px;margin-top:10px"></div>
                    <div ref="myEchart1" style="height:150px"></div>
                </div>
            </div>
            <div class="section">
                <div class="section-title"> 
                    <h3>用户活跃度统计</h3> 
                    <div class="toolbar">
                        <i class="icon icon-refresh"></i>
                        <i class="icon icon-fullScreen"></i>
                        <i class="icon icon-close"></i>
                    </div>
                </div>
                <div class="section-content">
                    <div ref="myEchart2" style="height:280px;margin-top:10px"></div>
                </div>
            </div>
        </el-col>
        <el-col :span="12" class="col-two">
            <div class="section">
                <div class="section-title"> 
                    <h3>设备概览</h3> 
                    <div class="toolbar">
                        <i class="icon icon-refresh"></i>
                        <i class="icon icon-fullScreen"></i>
                        <i class="icon icon-close"></i>
                    </div>
                </div>
                <div class="section-content">
                    <div ref="myEchart3" id='chart-panel' style="height:500px"></div>
                    <div style="height:100px"></div>
                </div>
            </div>
            <div class="section">
                <div class="section-title"> 
                    <h3>top应用/客户汇总</h3> 
                    <div class="toolbar">
                        <i class="icon icon-refresh"></i>
                        <i class="icon icon-fullScreen"></i>
                        <i class="icon icon-close"></i>
                    </div>
                </div>
                <div class="section-content" style="height:180px">
                    <el-col :span='12'>
                        <div ref="myEchart4" style="height:180px"></div>   
                    </el-col>
                    <el-col :span='12'>
                        <div ref="myEchart5" style="height:180px"></div>   
                    </el-col>
                </div>
            </div>
        </el-col>
        <el-col :span="6">
            <div class="section">
                <div class="section-title"> 
                    <h3>云设备整体状态</h3> 
                    <div class="toolbar">
                        <i class="icon icon-refresh"></i>
                        <i class="icon icon-fullScreen"></i>
                        <i class="icon icon-close"></i>
                    </div>
                </div>
                <div class="section-content" style="height:130px">
                    <el-col :span='18'>
                        <div ref="myEchart6" style="height:130px"></div>   
                    </el-col>
                    <el-col :span='6'>
                        <div>优</div>
                    </el-col>              
                </div>
            </div>
            <div class="section">
                <div class="section-title"> 
                    <h3>容量</h3> 
                    <div class="toolbar">
                        <i class="icon icon-refresh"></i>
                        <i class="icon icon-fullScreen"></i>
                        <i class="icon icon-close"></i>
                    </div>
                </div>
                <div class="section-content" style="height:130px">
                    <el-col :span='18'>
                        <!-- <div ref="myEchart6" style="height:180px"></div>    -->
                    </el-col>
                    <el-col :span='6'>
                        <!-- <div>优</div> -->
                    </el-col>              
                </div>
            </div>
            <div class="section">
                <div class="section-title"> 
                    <h3>带宽性能</h3> 
                    <div class="toolbar">
                        <i class="icon icon-refresh"></i>
                        <i class="icon icon-fullScreen"></i>
                        <i class="icon icon-close"></i>
                    </div>
                </div>
                <div class="section-content" >
                        <div ref="myEchart7" style="height:200px"></div>                
                </div>
            </div>
            <div class="section">
                <div class="section-title"> 
                    <h3>cpu/内存</h3> 
                    <div class="toolbar">
                        <i class="icon icon-refresh"></i>
                        <i class="icon icon-fullScreen"></i>
                        <i class="icon icon-close"></i>
                    </div>
                </div>
                <div class="section-content">
                    <div ref="myEchart8" style="height:220px"></div>   
                </div>
            </div>
        </el-col>
    </el-row>
</template>
<script>
import china from 'echarts/map/json/china.json';
import guangdong from 'echarts/map/json/province/guangdong.json'
import {GDEcharts} from '../../commonFun/map.js'
import echarts from 'echarts'
export default {
    mounted(){
        this.$nextTick(()=>{
            let dom = this.$refs.myEchart
            this.chart = this.$echarts.init(dom)
            let dom1 = this.$refs.myEchart1
            this.chart1 = this.$echarts.init(dom1)
            var option= {
                title : {
                    text: '今日用户登录数',
                    subtext: '35560',
                    subtextStyle:{
                        color:"#1E87D0",
                        fontSize:50,
                        fontWeight:'bold'
                    },
                    textStyle:{
                        //文字颜色
                        color:'#1E87D0',
                        //字体风格,'normal','italic','oblique'
                        fontStyle:'normal',
                        //字体大小
                　　　　 fontSize:16,
                    },
                    x:'center'
                },
                legend: {
                    data:['教育','商用','互联网'],
                    right: 10,
                    top: 85,
                    bottom: 20,
                },
                grid: {
                    top: '120',
                    width: '90%',
                    bottom: '3%',
                    left: 10,
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        data : ['07/18','07/19','07/20','07/21','07/22','07/23']
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'教育',
                        type:'bar',
                        data:[320, 332, 301, 334, 390, 330],
                        barGap:'10%',
                        itemStyle: {
                            normal: {
                                color: '#f5aba3'
                            }
                        }
                    },
                    {
                        name:'互联网',
                        type:'bar',
                        data:[120, 132, 101, 134, 90, 230],
                        barGap:'10%',
                        itemStyle: {
                            normal: {
                                color: '#93d6ca'
                            }
                        }
                    },
                    {
                        name:'商用',
                        type:'bar',
                        data:[220, 182, 191, 234, 290, 330],
                        barGap:'10%',
                        itemStyle: {
                            normal: {
                                color: '#a5c6fe'
                            }
                        }
                    },
                ]
            }
            var option1=  {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x: '60%',
                    y:'center',
                    data:['华东区域','华南区域','华北区域','东北区域']
                },
                series: [
                    {
                        type:'pie',
                        radius: ['60%', '80%'],
                        center:["30%","50%"],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:335, name:'东北区域'},
                            {value:310, name:'华南区域'},
                            {value:234, name:'华北区域'},
                            {value:1548, name:'华东区域'}
                        ]
                    }
                ],
                color:['#f7716e','#a4e7f2',"#fde17e","#92c79b"]
            };
            this.chart.setOption(option)
            this.chart1.setOption(option1)
            this.chart2 = this.$echarts.init(this.$refs.myEchart2)
            var option2 = {
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    data:['不活跃','轻微','轻度','中度','重度','骨灰']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        data : ['07/21','07/22','07/23','07/24','07/25']
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [                
                    {
                        name:'轻微',
                        type:'bar',
                        stack: '搜索引擎',
                        data:[120, 132, 101, 134, 290, 230, 220]
                    },
                    {
                        name:'轻度',
                        type:'bar',
                        barWidth : 20,
                        stack: '搜索引擎',
                        data:[620, 732, 701, 734, 1090, 1130, 1120]
                    },
                    {
                        name:'不活跃',
                        type:'bar',
                        stack: '搜索引擎',
                        data:[60, 72, 71, 74, 190, 130, 110]
                    },
                    {
                        name:'中度',
                        type:'bar',
                        stack: '搜索引擎',
                        data:[62, 82, 91, 84, 109, 110, 120]
                    },
                    {
                        name:'重度',
                        type:'bar',
                        stack: '搜索引擎',
                        data:[62, 82, 91, 84, 109, 110, 120]
                    },
                    {
                        name:'骨灰',
                        type:'bar',
                        stack: '搜索引擎',
                        data:[62, 82, 91, 84, 109, 110, 120]
                    },
                ]
            };
            this.chart2.setOption(option2)
            // this.chart3 = this.$echarts.init(this.$refs.myEchart3)
            // this.$echarts.registerMap('china', china)
            // var option3={
            //     backgroundColor: '#404a59',
            //     tooltip: {
            //         trigger: 'item',
            //         showDelay: 0,
            //         transitionDuration: 0.2,
            //         // formatter: function (params) {
            //         //     // var value = (params.value + '').split('.');
            //         //     // value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
            //         //     return '用户数：' + params.data.data+'/'+params.data.data2+'<br/>'
            //         //     // console.log(params.data)
            //         //     // return params.value
            //         // }
            //     },
            //     visualMap: {
            //         min: 800,
            //         max: 50000,
            //         text:['High','Low'],
            //         realtime: false,
            //         calculable: true,
            //         inRange: {
            //              color: [ '#fff', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
            //         }
            //     },
            //     series: [
            //         {
            //             // name: '香港18区人口密度',
            //             type: 'map',
            //             mapType: 'china', // 自定义扩展图表类型
            //             selectedMode:'single',
            //             roam: false,//禁止缩放
            //             showLegendSymbol:true,
            //             itemStyle:{
            //                 normal:{
            //                     areaStyle:{color:'red'}
            //                 },
            //             },
            //             data:[
            //                 {name: '湖北', value: 20057.34,data:230,data2:1000},
            //                 {name: '湖南', value: 15477.48},
            //                 {name: '北京', value: 31686.1},
            //                 {name: '上海', value: 6992.6},
            //                 {name: '江苏', value: 44045.49},
            //                 {name: '浙江', value: 40689.64},
            //                 {name: '广东', value: 37659.78},
            //                 {name: '河北', value: 45180.97},
            //                 {name: '四川', value: 55204.26},
            //                 {name: '云南', value: 21900.9},
            //                 {name: '广西', value: 4918.26},
            //                 {name: '海南', value: 5881.84},
            //                 {name: '安徽', value: 4178.01},
            //                 {name: '黑龙江', value: 2227.92},
            //                 {name: '山西', value: 2180.98},
            //                 {name: '内蒙古', value: 9172.94},
            //                 {name: '山东', value: 3368},
            //                 {name: '辽宁', value: 806.98}
            //             ],
            //         }
            //     ]
            // }
            var option3 = {
                tooltip : {
                    trigger: 'item'
                },
                geo: {
                    roam: true,
                    map: '',
                    label: {
                        emphasis: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            areaColor: '#304553',
                            borderColor: '#fff'
                        }
                    },
                    silent: true
                },
                visualMap: {
                    show: false,
                    min: 80,
                    max: 500,
                    inRange: {
                        colorLightness: [0, 1]
                    }
                },
                series: []
            }
            // var GDEcharts = map.GDEcharts
            var chart = new GDEcharts({containerId: 'chart-panel', echartOption: option3})
            // this.chart3.setOption(option3)
            // var that = this.chart3
            // this.chart3.on("click",function(params){
                
            //     let pro = params.name;
            //     option3.series[0]={
            //         // name: '香港18区人口密度',
            //         type: 'map',
            //         mapType: 'guangdong', // 自定义扩展图表类型
            //         selectedMode:'single',
            //         roam: false,//禁止缩放
            //         showLegendSymbol:true,
            //         itemStyle:{
            //             normal:{
            //                 areaStyle:{color:'red'}
            //             },
            //         },
            //     }
            //     console.log(option3)
            //     that.setOption(option3)
            // })
            
            this.chart4 = this.$echarts.init(this.$refs.myEchart4)
            var option4= {
                title : {
                    text: 'top5应用',
                    // subtext: '35560',
                    x:'center'
                },
                grid: {
                    top: '20',
                    width: '90%',
                    bottom: '3%',
                    left: 10,
                    containLabel: true
                },
                yAxis : [
                    {
                        type : 'category',
                        data : ['OA办公','UC业务','魔兽世界','i学','电子书包'],
                        axisLine:{       //y轴
                            show:false
                        },
                        axisTick:{       //y轴刻度线
                            show:false
                        },
                        splitLine: {     //网格线
                            show: false
                        }
                    },
                    
                ],
                xAxis : [
                    {
                        type : 'value',
                        axisLine:{       //y轴
                            show:false
                        },
                        axisTick:{       //y轴刻度线
                            show:false
                        },
                        splitLine: {     //网格线
                            show: false
                        }
                    }
                ],
                series : [
                    {
                        name:'电子书包',
                        type:'bar',
                        data:[5.78, 6.33, 7.08, 9.21, 11.26],
                        barCategoryGap:'10%',
                        barWidth:12,
                        itemStyle: {
                            normal: {
                                color: '#f5aba3'
                            }
                        }
                    }
                ]
            }
            this.chart4.setOption(option4)
            this.chart5 = this.$echarts.init(this.$refs.myEchart5)
            var option5= {
                title : {
                    text: 'top5客户占比',
                    // subtext: '35560',
                    x:'center'
                },
                grid: {
                    top: '20',
                    width: '90%',
                    bottom: '3%',
                    left: 10,
                    containLabel: true
                },
                yAxis : [
                    {
                        type : 'category',
                        data : ['上海精锐教育培训有限公司','深圳市海陵生物科技有限公司','中国铝业','昆明工口科技有限公司','深圳市超网科技有限公司'],
                        axisLine:{       //y轴
                            show:false
                        },
                        axisTick:{       //y轴刻度线
                            show:false
                        },
                        splitLine: {     //网格线
                            show: false
                        }
                    },
                    
                ],
                xAxis : [
                    {
                        type : 'value',
                        axisLine:{       //y轴
                            show:false
                        },
                        axisTick:{       //y轴刻度线
                            show:false
                        },
                        splitLine: {     //网格线
                            show: false
                        }
                    }
                ],
                series : [
                    {
                        name:'教育',
                        type:'bar',
                        data:[320, 332, 301, 334, 390],
                        // barGap:'50%',
                        barCategoryGap:'10%',
                        barWidth:12,
                        itemStyle: {
                            normal: {
                                color: '#f5aba3'
                            }
                        }
                    }
                ]
            }
            this.chart5.setOption(option5)
            this.chart6 = this.$echarts.init(this.$refs.myEchart6)
            var option6= {
                tooltip : {
                    formatter: "{a} <br/>{c} {b}"
                },
                series:[
                    {
                        name: '转速',
                        type: 'gauge',
                        center: ['50%', '90%'],    // 默认全局居中
                        radius: '150%',
                        min:0,
                        max:100,
                        startAngle:180,
                        endAngle:0,
                        splitNumber:4,
                        axisLine: {            // 坐标轴线
                            lineStyle: {       // 属性lineStyle控制线条样式
                                width: 8
                            }
                        },
                        axisTick: {            // 坐标轴小标记
                            length:12,        // 属性length控制线长
                            lineStyle: {       // 属性lineStyle控制线条样式
                                color: 'auto'
                            }
                        },
                        splitLine: {           // 分隔线
                            length:20,         // 属性length控制线长
                            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                                color: 'auto'
                            }
                        },
                        pointer: {
                            width:5
                        },
                        title: {
                            offsetCenter: [0, 0],       // x, y，单位px
                        },
                        detail: {
                            // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            show:false,
                            fontWeight: 'bolder'
                        },
                        data:[{value: 80, name: ''}]
                    }
                ]
            }
            this.chart6.setOption(option6)
            this.chart7 = this.$echarts.init(this.$refs.myEchart7)
            var option7 = {
                tooltip : {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                legend: {
                    data:['最高值','最低值','平均值',]
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : ['周一','周二','周三','周四','周五','周六','周日']
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'最高值',
                        type:'line',
                        stack: '总量',
                        smooth: true,
                        areaStyle: {normal: {}},
                        data:[40, 50, 30, 90, 65, 69, 90]
                    },
                    {
                        name:'最低值',
                        type:'line',
                        stack: '总量',
                        smooth: true,
                        areaStyle: {normal: {}},
                        data:[10, 5, 30, 45, 23, 39,17]
                    },

                    {
                        name:'平均值',
                        type:'line',
                        stack: '总量',
                        smooth: true,
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        areaStyle: {normal: {}},
                        data:[79, 68, 56, 74, 89, 98, 84]
                    }
                ]
            };
            this.chart7.setOption(option7)
            this.chart8 = this.$echarts.init(this.$refs.myEchart8)
            var option8 = {
                tooltip : {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                legend: {
                    data:['cpu','内存',]
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    top:'10%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : ['周一','周二','周三','周四','周五','周六','周日']
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'cpu',
                        type:'line',
                        stack: '总量',
                        smooth: true,
                        lineStyle: {
                            normal: {
                                color: '#c23531'
                            }
                        },
                        showSymbol: false,
                        // areaStyle: {normal: {}},
                        data:[40, 50, 30, 90, 65, 69, 90]
                    },
                    {
                        name:'内存',
                        type:'line',
                        stack: '总量',
                        smooth: true,
                        lineStyle: {
                            normal: {
                                color: '#93d6ca'
                            }
                        },
                        showSymbol: false,
                        // areaStyle: {normal: {}},
                        data:[10, 5, 30, 45, 23, 39,17]
                    },
                ]
            };
            this.chart8.setOption(option8)
        })
    },
}
</script>
<style lang='scss' scoped>
    .driver-wrapper{
        height: 100%;
        padding: 15px;
        overflow-y: scroll;
        >.el-col{
            height: 100%;
            .section{
                background-color: #fff;
                border-radius: 4px;
                margin-bottom: 10px;
                .section-title{
                    border-bottom: 1px solid #e0e0e0;
                    height: 42px;
                    h3{
                        font-size:12px;
                        font-weight: 500;
                        text-indent: 2em;
                        line-height: 42px;
                        color: #0B0B0B;
                        float: left;
                    }
                    .toolbar{
                        float: right;
                        margin-right: 10px;
                        margin-top: 12px;
                        .icon{
                            display: inline-block;
                            width: 16px;
                            height: 16px;
                            background-size: contain;
                            background-position: center center;
                            background-repeat: no-repeat;
                        }
                        .icon-close{
                            background-image: url('../../assets/close.png');
                        }
                        .icon-fullScreen{
                            background-image: url('../../assets/fullScreen.png');
                        }
                        .icon-refresh{
                            background-image: url('../../assets/refresh.png');
                        }

                    }
                }
            }
        }
        .col-two{
            // margin: 0 10px;
        }
    }
</style>