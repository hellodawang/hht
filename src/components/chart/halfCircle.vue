<template>
    <bar-chart :data="config" style="height:180px" />
</template>
<script>
import barChart from './barChart'

export default {
    components: {
        barChart,
    },
    props:['op'],
    data(){
        return{
            allData : []     
        }       
    },
    computed: {
        config() {

            let colors = ["#67c23a",'#409eff',"#e6a23c","#f66","#f00"]
            let endData=[]
            this.op.map((item,index)=>{
                endData.push({value: item.value,name:item.name})
            })
            this.allData = this.op.concat(endData)
            this.allData.forEach((item,index)=>{
                if (index<this.op.length) {
                    item.itemStyle = {
                        normal: {
                            color:colors[index]
                        }
                    }; 
                } else {
                    item.itemStyle= {
                        normal: {
                            color: 'pink',
                            opacity:0,
                        }
                    };
                    item.label={
                        normal:{
                            show:false
                        }
                    }
                    item.labelLine={
                        show:false
                    }
                }
            })
            return {
                backgroundColor:'#fff',
                tooltip: {
                    trigger: 'item',
                    formatter: "{b}"
                },
                title: {
                    text: "各省市网络质量分布",
                    left: '49.5%',
                    bottom:'5%',
                    textAlign: 'center',
                    textBaseline: 'middle',
                    textStyle: {
                        fontSize: 12,
                        color:"#333"
                    }
                },
                series: [
                    {
                        // name: "性质",
                        type: 'pie',
                        radius: ['0', '95%'],
                        center: ['50%', '70%'],
                        hoverAnimation: false,
                        startAngle: 180,
                        label: {
                                show: true,
                                textStyle: {
                                    fontSize: '10',
                                    color:'#666',
                                },
                                formatter:function(param){
                                    return param.data.level+"("+param.data.name.split("，").length+")"
                                }
                        },
                        labelLine:{
                            show:true,
                            length:5,
                            length2:10
                        },
                        data: this.allData
                    },
                ]
            }
        }
    },
    mounted(){
    }
}
</script>
<style lang='scss'>

</style>