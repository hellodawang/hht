<template>
<div class="section">
    <div class="section-title"> 
        <h3>存储容量</h3> 
    </div>
    <div class="section-content">
        <bar-chart :data="config" style="height:140px"/>
        <!-- <div ref="chart" style="height:140px"></div> -->
    </div>
</div>
</template>

<script>
import barChart from '../../components/chart/barChart'

export default {
    components: {
        barChart,
    },
  props: ["data"],
  data: function() {
    return {};
  },
  mounted(){
    // let chart = this.$echarts.init(this.$refs.chart)
    // chart.setOption(tempOption)
},
  computed: {
      config() {
        var tempOption = {
            legend: {
                x : 'center',
                y : 'bottom',
                data:[ this.data[0].name,this.data[1].name,this.data[2].name,],
                itemWidth:10,
                itemHeight:10,
                borderRadius:10 
            },
            series: [
                {
                    name: 'Pie1',
                    type: 'pie',
                    clockWise: false,
                    radius: ['60%', "65%"],
                    itemStyle:{
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                        }
                    },
                    hoverAnimation: false,
                    center: ['16%', '40%'],
                    data: [{
                        name:this.data[0].name,
                        value: this.data[0].available,
                        label: {
                            normal: {
                                formatter:()=>{                        
                                    return [
                                    '{percent|'+parseInt(this.data[0].available/this.data[0].all*100)+'}{unit|%}',
                                    '{subtext|运行中'+this.data[0].running+'个}'
                                    ].join('\n')
                                },
                                rich:{
                                    percent:{
                                        fontSize:24,
                                        color:'#FF4245',
                                    },
                                    unit:{
                                        fontSize:12,
                                        verticalAlign:'bottom',
                                        color:'#FF4245',
                                        padding:2
                                    },
                                    subtext:{
                                        fontSize:12,
                                        color:'#666',
                                        lineHeight:18
                                    }
                                },
                                position: 'center',
                                show: true,
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#FF4245',
                            }
                        }
                    }, {
                        value: this.data[0].all - this.data[0].available,
                        name: 'invisible',
                        itemStyle: {
                            normal: {
                                color: '#cfcfcf', 
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            },
                            emphasis: {
                                color: '#6f6f6f' 
                            }
                        },
                    }]
                },
                {
                    name: 'Pie1',
                    type: 'pie',
                    clockWise: false,
                    radius: ['60%', "65%"],
                    itemStyle:{
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                        }
                    },
                    hoverAnimation: false,
                    center: ['49%', '40%'],
                    data: [{
                        name:this.data[1].name,
                        value: this.data[1].available,
                        label: {
                            normal: {
                                formatter:()=>{                          
                                    return [
                                    '{percent|'+parseInt(this.data[1].available/this.data[1].all*100)+'}{unit|%}',
                                    '{subtext|运行中'+this.data[1].running+'个}'
                                    ].join('\n')
                                },
                                rich:{
                                    percent:{
                                        fontSize:24,
                                        color:'#50C43B',
                                    },
                                    unit:{
                                        fontSize:12,
                                        verticalAlign:'bottom',
                                        color:'#50C43B',
                                        padding:2
                                    },
                                    subtext:{
                                        fontSize:12,
                                        color:'#666',
                                        lineHeight:18
                                    }
                                },
                                position: 'center',
                                show: true,
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#50C43B',
                            }
                        }
                    }, {
                        value: this.data[1].all - this.data[1].available,
                        name: 'invisible',
                        itemStyle: {
                            normal: {
                                color: '#cfcfcf', 
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            },
                            emphasis: {
                                color: '#6f6f6f' 
                            }
                        },
                    }]
                },
                {
                    name: 'Pie1',
                    type: 'pie',
                    clockWise: false,
                    radius: ['60%', "65%"],
                    itemStyle:{
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                        }
                    },
                    hoverAnimation: false,
                    center: ['82%', '40%'],
                    data: [{
                        name:this.data[2].name,
                        value: this.data[2].available,
                        label: {
                            normal: {
                                formatter:()=>{                          
                                    return [
                                    '{percent|'+parseInt(this.data[2].available/this.data[2].all*100)+'}{unit|%}',
                                    '{subtext|运行中'+this.data[2].running+'个}'
                                    ].join('\n')
                                },
                                rich:{
                                    percent:{
                                        fontSize:24,
                                        color:'#A471ED',
                                    },
                                    unit:{
                                        fontSize:12,
                                        verticalAlign:'bottom',
                                        color:'#A471ED',
                                        padding:2
                                    },
                                    subtext:{
                                        fontSize:12,
                                        color:'#666',
                                        lineHeight:18
                                    }
                                },
                                position: 'center',
                                show: true,
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#A471ED',
                            }
                        }
                    }, {
                        value: this.data[2].all - this.data[2].available,
                        name: 'invisible',
                        itemStyle: {
                            normal: {
                                color: '#cfcfcf', 
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            },
                            emphasis: {
                                color: '#6f6f6f' 
                            }
                        },
                    }]
                },
            ]
        }
        return tempOption
     },
  },
};
</script>

<style lang="scss" scoped>
.section {
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 10px;
  display: inline-block;
  width: 100%;
  font-size: 12px;
  position: relative;
  vertical-align: middle;
  .section-title {
    border-bottom: 1px solid #e0e0e0;
    height: 38px;
    h3 {
      font-size: 12px;
      font-weight: 500;
      text-indent: 1em;
      line-height: 38px;
      color: #0b0b0b;
      float: left;
    }
  }
  .section-content {
    padding: 10px;
  }
}
</style>
