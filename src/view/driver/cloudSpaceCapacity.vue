<template>
    <bar-chart :data="config" style="height:180px" ref="chart"/>
</template>
<script>
import barChart from '../../components/chart/barChart'

export default{
    components: {
        barChart,
    },
    props:['op'],
    computed: {
        config() {
          return {
            title:{
                text:['{a|'+this.op.available+'}{unit|G}'],
                textStyle:{
                    rich:{
                        a:{
                            color:'#3dd4de',
                            fontSize:30,
                            fontWeight:'bold'
                        },
                        unit:{
                            color:'#ddd',
                            padding:2,
                            fontSize:12,
                            verticalAlign:'bottom',
                        }
                    }
                },
                subtext:"可用空间容量",
                subtextStyle:{
                    align:'center'
                },
                right:'10%',
                top:'35%'
            },
            series: [
                {
                    name: 'Pie1',
                    type: 'pie',
                    clockWise: false,
                    radius: ['50%', "75%"],
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
                    center: ['40%', '50%'],
                    data: [{
                        name:this.op.name,
                        value: this.op.available,
                        label: {
                            normal: {
                                formatter:()=>{                          
                                    return [
                                    '{percent|'+parseInt(this.op.available)+'}',
                                    '{line|————}',
                                    '{subtext|'+(this.op.all-this.op.available)+'}'
                                    ].join('\n')
                                },
                                rich:{
                                    percent:{
                                        fontSize:18,
                                        color:'#3dd4de',
                                    },
                                    line:{
                                        lineHeight:5,
                                        color:'#e0e0e0'
                                    },
                                    subtext:{
                                        fontSize:12,
                                        color:'#ddd',
                                        lineHeight:18
                                    }
                                },
                                position: 'center',
                                show: true,
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#67C23A',
                            }
                        }
                    }, {
                        value: this.op.all - this.op.available,
                        name: 'invisible',
                        itemStyle: {
                            normal: {
                                color: '#3dd4de', 
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            },
                            // emphasis: {
                            //     color: '#6f6f6f' 
                            // }
                        },
                    }]
                },
            ]
            }
        }
    },
}
</script>
<style lang='scss' >

</style>