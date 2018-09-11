<template>
    <div ref="six" style="height:100%">

    </div>
</template>
<script>
export default{
    data(){
        return{
            chartData:[{
                "name": "广东，广西，福建，湖南，贵州",
                level:'优秀',
                "value": 900
            }, {
                "name": "西藏，青海，四川",
                level:'良好',
                "value": 500
            }, {
                "name": "浙江，江苏，安徽",
                level:'好',
                "value": 300
            },{
                "name": "河南，陕西，山东",
                level:'一般',
                "value": 900
            },
            {
                "name": "黑龙江，沈阳",
                level:'差',
                "value": 500
            }],
            allData : []     
        }       
    },
    mounted(){
       let colors = ["#67c23a",'#409eff',"#e6a23c","#f66","#f00"]
        let endData=[]
        this.chartData.map((item,index)=>{
            endData.push({value: item.value})
        })
        this.allData = this.chartData.concat(endData)
        this.allData.forEach((item,index)=>{
            if(index<this.chartData.length){
                item.itemStyle = {
                    normal: {
                        color:colors[index]
                    }
                }; 
            }else{
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
            }
        })
        this.chart =   this.$echarts.init(this.$refs.six);
        this.chart.setOption({
            backgroundColor:'#fff',
            tooltip: {
                trigger: 'item',
                formatter: "{b}: {c}"
            },
            title: {
                text: "各省市网络质量分布",
                left: '49.5%',
                bottom:'2%',
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
                    radius: ['0', '120%'],
                    center: ['50%', '80%'],
                    hoverAnimation: false,
                    startAngle: 180,
                    label: {
                        normal: {
                            show: true,
                            position: 'inside',
                            textStyle: {
                                fontSize: '10',
                                color:'#fff',
                            },
                            formatter:function(param){
                                return param.data.level
                            }
                        },
                        emphasis: {
                            show: true,
                        }
                    },
                    data: this.allData
                },
            ]
        })        
    }
}
</script>
<style lang='scss'>

</style>