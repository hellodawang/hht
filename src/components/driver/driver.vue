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
                    <div ref="myEchart2" style="height:320px;margin-top:10px"></div>
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
                    <div ref="myEchart3" style="height:320px;margin-top:10px"></div>
                </div>
            </div>
        </el-col>
        <el-col :span="6"></el-col>
    </el-row>
</template>
<script>
import china from 'echarts/map/js/china.js';

export default {

    mounted(){
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
        this.chart2 = this.$echarts.init(this.$refs.myEchart2)
        var option3={

        }
        this.chart3.setOption(option3)
    }
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
                        margin-top: 10px;
                        .icon{
                            display: inline-block;
                            width: 20px;
                            height: 20px;
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