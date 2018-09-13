<template>
  <div ref="onlineStats" style="height:160px"></div>
</template>
<script>
export default {
  props: ["account", "device"],
  data: function() {
    return {
      // greeting: "Hello"
    };
  },
  mounted(){
    let chart = this.$echarts.init(this.$refs.onlineStats)
    chart.setOption({
        backgroundColor:'#fff',
        series: [
          {
            type: 'gauge',
            radius: '88%',
            center: ['25%', '55%'],
            splitNumber: 0, //刻度数量
            startAngle: 220,
            endAngle: -40,
            axisLine: {
              show: true,
              lineStyle: {
                width: 10,
                color: [ [this.account.online/this.account.all, '#409eff'], [1, '#e0e0e0']]
              }
            },
            //分隔线样式。
            splitLine: {
              show: false,
            },
            axisLabel: {
              show: false
            },
            axisTick: {
              show: false
            },
            pointer: {
              show: false
            },
            detail: {
              show: true,
              offsetCenter: [0, 5],
              color: '#666',
              formatter:()=>{
                return [
                  '{title|'+this.account.online+'}{unit|/人}',
                  '{subtext|'+parseInt(this.account.online/this.account.all*100)+'%}'
                ].join('\n')
              },
              rich:{
                title:{
                  fontSize:24,
                  color:'#409eff'
                },
                unit:{
                  fontSize:12,
                  verticalAlign:'bottom',
                  padding:2,
                  color:'#409eff'
                },
                subtext:{
                  fontSize:14,
                  color:'#666',
                  padding:10
                }
              }
            },
            data: [{
              value: this.account.online
            }],         
          },
          {
            name: '刻度',
            type: 'gauge',
            radius: '90%',
            center: ['25%', '55%'],
            min:0,
            max:this.account.all,
            splitNumber: 1, //刻度数量
            startAngle: 220,
            endAngle: -40,
            axisLine: {
              show: true,
              lineStyle: {
                width: 1,
                color: [[1,'rgba(255,0,0,0)']]
              }
            },//仪表盘轴线
            axisLabel: {
              show: true,
              color:'#666',
              distance:-50
            },//刻度标签。
            axisTick: {
              show: false,
            },//刻度样式
            splitLine: {
              show: false,
            },//分隔线样式
            detail: {
              show: false
            },
            pointer: {
              show: false
            }
          },
          {
            type: 'gauge',
            radius: '88%',
            center: ['75%', '55%'],
            splitNumber: 0, //刻度数量
            startAngle: 220,
            endAngle: -40,
            axisLine: {
              show: true,
              lineStyle: {
                width: 10,
                color: [ [this.device.online/this.device.all, '#409eff'], [1, '#e0e0e0']]
              }
            },
            //分隔线样式。
            splitLine: {
              show: false,
            },
            axisLabel: {
              show: false
            },
            axisTick: {
              show: false
            },
            pointer: {
              show: false
            },
            detail: {
              show: true,
              offsetCenter: [0, 5],
              color: '#666',
              formatter:()=>{
                return [
                  '{title|'+this.device.online+'}{unit|/台}',
                  '{subtext|'+parseInt(this.device.online/this.device.all*100)+'%}'
                ].join('\n')
              },
              rich:{
                title:{
                  fontSize:24,
                  color:'#409eff'
                },
                unit:{
                  fontSize:12,
                  verticalAlign:'bottom',
                  padding:2,
                  color:'#409eff'
                },
                subtext:{
                  fontSize:14,
                  color:'#666',
                  padding:10
                }
              }
            },
            data: [{
              value: this.device.online
            }],         
          },
          {
            name: '刻度',
            type: 'gauge',
            radius: '90%',
            center: ['75%', '55%'],
            min:0,
            max:this.device.all,
            splitNumber: 1, //刻度数量
            startAngle: 220,
            endAngle: -40,
            axisLine: {
              show: true,
              lineStyle: {
                width: 1,
                color: [[1,'rgba(255,0,0,0)']]
              }
            },//仪表盘轴线
            axisLabel: {
              show: true,
              color:'#666',
              distance:-50
            },//刻度标签。
            axisTick: {
              show: false,
            },//刻度样式
            splitLine: {
              show: false,
            },//分隔线样式
            detail: {
              show: false
            },
            pointer: {
              show: false
            }
          },        
        ]
    })
  }
};
</script>

<style lang="scss" scoped>
</style>
