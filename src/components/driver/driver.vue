<template>
    <el-row class="driver-wrapper" :gutter="10">
        <el-col :span="6" class="col-one">
            <div class="section">
                <div class="section-title"> 
                    <h3>用户登录统计</h3> 
                    <div class="toolbar">
                        <i class="icon icon-refresh"></i>
                    </div>
                </div>
                <div class="section-content">
                    <a href="" class="detail">查看详情>></a>
                    <div ref="myEchart" style="height:320px;margin-top:10px"></div>
                    <div ref="myEchart1" style="height:150px"></div>
                </div>
            </div>
            <div class="section">
                <div class="section-title"> 
                    <h3>用户活跃度统计</h3>
                    <div class="toolbar">
                        <i class="icon icon-refresh"></i>
                    </div>
                </div>
                <div class="section-content">
                    <a href="" class="detail">查看详情>></a>
                    <div ref="myEchart2" style="height:250px"></div>
                </div>
            </div>
        </el-col>
        <el-col :span="12" class="col-two">
            <div class="section">
                <div class="section-title"> 
                    <h3>设备概览</h3> 
                    <div class="toolbar">
                        <i class="icon icon-refresh"></i>
                    </div>
                </div>
                <div class="section-content">
                    <a href="" class="detail">查看详情>></a>
                    <div ref="myEchart3" id='chart-panel' style="height:470px"></div>
                    <div style="height:100px"></div>
                </div>
            </div>
            <div class="section">
                <div class="section-title"> 
                    <h3>top应用/客户汇总</h3> 
                    <div class="toolbar">
                        <i class="icon icon-refresh"></i>
                    </div>
                </div>
                <div class="section-content" style="height:180px">
                    <el-col :span='12'>
                        <a href="" class="detail">查看详情>></a>
                        <div ref="myEchart4" style="height:180px"></div>   
                    </el-col>
                    <el-col :span='12'>
                        <a href="" class="detail">查看详情>></a>
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
                    </div>
                </div>
                <div class="section-content" style="height:130px">
                    <a href="" class="detail">查看详情>></a>                   
                    <el-col :span='16'>
                        <div ref="myEchart6" style="height:110px"></div>   
                    </el-col>
                    <el-col :span='8'>   
                        <div style="width:54px;height:54px;border-radius:50%;border:4px solid green;text-align:center;line-height:46px;color:green;margin-top:20px">优</div>
                    </el-col>              
                </div>
            </div>
            <div class="section">
                <div class="section-title"> 
                    <h3>容量</h3> 
                    <div class="toolbar">
                        <i class="icon icon-refresh"></i>
                    </div>
                </div>
                <div class="section-content" style="height:140px">
                    <a href="" class="detail">查看详情>></a>
                    <el-col :span='12' style="text-align:center">
                        <el-progress type="circle" :percentage="20" :width='80'></el-progress>
                        <p>硬盘容量</p>
                    </el-col>
                    <el-col :span='12'>
                        <el-progress type="circle" :percentage="20" :width='80'></el-progress>
                        <p>数据库容量</p>
                    </el-col>              
                </div>
            </div>
            <div class="section">
                <div class="section-title"> 
                    <h3>带宽性能</h3> 
                    <div class="toolbar">
                        <i class="icon icon-refresh"></i>                      
                    </div>
                </div>
                <div class="section-content" >
                    <a href="" class="detail">查看详情>></a>
                    <div ref="myEchart7" style="height:180px"></div>                
                </div>
            </div>
            <div class="section">
                <div class="section-title"> 
                    <h3>cpu/内存</h3> 
                    <div class="toolbar">
                        <i class="icon icon-refresh"></i>
                    </div>
                </div>
                <div class="section-content">
                    <a href="" class="detail">查看详情>></a>
                    <div ref="myEchart8" style="height:180px"></div>   
                </div>
            </div>
        </el-col>
    </el-row>
</template>
<script>
import china from 'echarts/map/json/china.json';
import guangdong from 'echarts/map/json/province/guangdong.json'
import mapchart from '../../utils/map.js'    
import echarts from 'echarts'    
export default {
    mounted(){
        echarts.registerMap('china', china);
        var s = echarts.extendsMap(this.$refs.myEchart3, {
            bgColor: '#154e90', // 画布背景色
            mapName: 'china', // 地图名
            // text:'火电业务',
            goDown: true, // 是否下钻
            // 下钻回调
            callback: function(name, option, instance) {
                
            },
        });
        window.addEventListener("resize", function() {
            s.resize();
        })
        this.$nextTick(()=>{
            let dom = this.$refs.myEchart
            this.chart = this.$echarts.init(dom)
            let dom1 = this.$refs.myEchart1
            this.chart1 = this.$echarts.init(dom1)
            var option= {
                title : {
                    text: '当前在线人数',
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
                // legend: {
                //     data:['教育','商用','互联网'],
                //     right: 10,
                //     top: 85,
                //     bottom: 20,
                // },
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
                        data : ['教育','商用','互联网','其他',]
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        name:'人数'
                    }
                ],
                series : [
                    {
                        name:'教育',
                        type:'bar',
                        data:[320, 332, 301, 334,],
                        barGap:'10%',
                        barWidth:'50%',
                        itemStyle: {
                            normal: {
                                color: '#f5aba3'
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
                    },
                    formatter:function(params){
                        let data = params[0].data
                        return  data.active +'/'+data.all
                    }
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
                        type : 'value',
                        name:'活跃度',
                    },
                ],
                yAxis : [
                    {
                        type : 'category',                    
                        data : ['教育','商用','互联网','海外','华南','华东']
                    },                  
                ],
                series : [                
                    {
                        type:'bar',
                        data:[{value:0.5,all:1000,active:400},
                        {value:0.72,all:500,active:400},
                        {value:0.56,all:788,active:400},
                        {value:0.43,all:698,active:400},
                        {value:0.62,all:698,active:400},
                        {value:0.21,all:1010,active:400},],
                        // barCategoryGap:'10%',
                        barWidth:'50%',
                        itemStyle: {
                            normal: {
                                color: '#f5aba3'
                            }
                        },
                        label: {
                            normal: {
                                show: true,
                                // formatter: '{@active}'
                            }
                        }
                    },
                ]
            };
            this.chart2.setOption(option2)
            this.chart4 = this.$echarts.init(this.$refs.myEchart4)
            var option4= {
                title : {
                    text: 'top5应用下载数',
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
                        },
                        show:false,
                        // axisLabel: {
                        //     formatter: '{value}'
                        // }
                    }
                ],
                series : [
                    {
                        // name:'电子书包',
                        type:'bar',
                        data:[5.78, 6.33, 7.08, 9.21, 11.26],
                        barCategoryGap:'10%',
                        barWidth:12,
                        label: {
                            normal: {
                                show: true,
                                // formatter: '{b}'
                            }
                        },
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
                    text: 'top5客户设备数',
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
                        },
                        show:false
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
                        label: {
                            normal: {
                                show: true,
                                // formatter: '{b}'
                            }
                        },
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
                        center: ['50%', '80%'],    // 默认全局居中
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
                        detail: {formatter:'{value}%',show:false},
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
                    top:'15%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : ['09:00','09:30','10:00','10:30','11:00','11:30','12:00']
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        min: 0,
                        max: 100,
                        interval: 20,
                    }
                ],
                series : [
                    {
                        name:'最高值',
                        type:'line',
                        smooth: true,
                        showSymbol: false,
                        areaStyle: {normal: {}},
                        data:[40, 50, 30, 90, 65, 69, 90]
                    },
                    {
                        name:'最低值',
                        type:'line',
                        smooth: true,
                        showSymbol: false,
                        areaStyle: {normal: {}},
                        data:[10, 5, 30, 45, 23, 39,17]
                    },

                    {
                        name:'平均值',
                        type:'line',
                        smooth: true,
                        showSymbol: false,
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
                        data : ['09:00','09:30','10:00','10:30','11:00','11:30','12:00']
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        min: 0,
                        max: 100,
                        interval: 20,
                    }
                ],
                series : [
                    {
                        name:'cpu',
                        type:'line',
                        stack: '总量',
                        smooth: true,
                        showSymbol: false,
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
                        smooth: true,
                        showSymbol: false,
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
            .section-content{
                .detail{
                    text-decoration: none;
                    color: #333;
                    display: block;
                    text-align: right;
                    margin-right: 20px;
                    line-height: 1.8em;
                    font-size: 12px;
                    &:hover{
                        color: #f66
                    }
                }
            }
        }
    }
</style>