<template>
    <div style="height:180px" ref="chart"></div>
</template>
<script>
let baseOpt={
    title:{
        text:'',
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
                name:'',
                value: 0,
                label: {
                    normal: {
                        formatter:null,
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
                        color: '#3dd4de',
                    }
                }
            }, {
                value: 100,
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
                },
            }]
        },
    ]
}
export default{
    props:['op'],
    data(){
        return {
            chart:null
        }
    },
    mounted(){
        this.chart = this.$echarts.init(this.$refs.chart)
        this.op.available = this.op.available || 0
        this.chart.setOption(this.config) 
    },
    computed:{
        config() {
            let cfg = Object.assign({}, baseOpt);
            cfg.title.text = ['{a|'+this.op.available +'}{unit|G}']
            cfg.series[0].data[0].name = this.op.name;
            cfg.series[0].data[0].value =  this.op.available;
            cfg.series[0].data[0].label.normal.formatter = ()=>{                          
                                    return [
                                    '{percent|'+parseInt(this.op.available)+'}',
                                    '{line|————}',
                                    '{subtext|'+(this.op.all-this.op.available)+'}'
                                    ].join('\n')
                                }
            cfg.series[0].data[1].value = this.op.all - this.op.available;
            return cfg
        },
    },
    watch:{
        // 观察到父组件传递过来的值变化  echart重新渲染
        op:{
            handler(){
                this.chart.setOption(this.config) 
            },
            deep:true
        }
        
    }
}
</script>
<style lang='scss' >

</style>