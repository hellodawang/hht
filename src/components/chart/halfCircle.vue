<template>
<div class="half-circle">
   <bar-chart :data="config"  /> 
</div>
    
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
            colors = colors.reverse()
            let endData=[]
            this.op = this.op.reverse()
            this.op.map((item,index)=>{
                if(item.value != 0){
                    this.allData.push(item)
                }
            })
            this.allData.map((item,index)=>{
                endData.push({value: item.value,name:item.name})
            })
            this.allData = this.allData.concat(endData)
            this.allData.forEach((item,index)=>{
                if (index < this.allData.length/2) {
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
                        startAngle: -180,
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
}
</script>
<style lang='scss'>
    .half-circle{
        height: 180px;
        @media screen and (max-width: 1400px){
			height: 160px;
		}
    }
</style>