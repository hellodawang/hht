<template>
<div class="distBarChart">
    <bar-chart :data="config"/>
</div>
    
</template>

<script>
import echarts from "echarts";
import barChart from '../../components/chart/barChart'
let baseConfig = {
    grid: [
        {
            x: '8%',
            y: '10%',
            width: '88%',
            height: '35%',
            containLabel: true,
        },
        {
            x: '8%',
            y: '60%',
            width: '88%',
            height: '35%',
            containLabel: true,
        },
    ],
    xAxis: [
        {
            type: 'category',
            data: [],
            axisLabel:{
                fontSize:10
            }
        },
        {
            gridIndex: 1,
            type: 'category',
            data: [],
            axisLabel:{
                fontSize:10
            }
        },
    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            minInterval :1,
            axisTick:{
                show:false
            },
            splitLine: {
                show: false,
            },
            axisLabel:{
                fontSize:10
            },
            boundaryGap: ['0', '20%']
        },
        {
            type: 'value',
            gridIndex: 1,
            name: '',
            axisTick:{
                show:false
            },
            splitLine: {
                show: false,
            },
            boundaryGap: ['0', '20%'],
            axisLabel:{
                fontSize:10
            }
        },
    ],
    series: [
        {
            name: '教育',
            type: 'bar',
            data: [],  // 示例数据
            barGap: '10%',
            barWidth: '30%',
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
                normal: {
                    color: function(params) {
                         var colorList = [
                            '#AD9CD6',
                            '#6BADEF',
                            '#29C5C5',
                            '#FFBD84',
                        ]
                        return colorList[params.dataIndex]
                    },
                },
            },
        },
        {
            name: '教育',
            type: 'bar',
            data: [],  // 示例数据
            barGap: '10%',
            barWidth: '30%',
            xAxisIndex: 1,
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: function(params) {
                         var colorList = [
                            '#AD9CD6',
                            '#6BADEF',
                            '#29C5C5',
                            '#FFBD84',
                        ]
                        return colorList[params.dataIndex]
                    },
                },
            },
        },
    ],
};

export default {
  components: {
      barChart,
  },
  props: ["data"],
  data: function() {
      return {}
  },
  computed: {
      config() {
          let cfg = Object.assign({}, baseConfig)
          cfg.series[0].data = this.data.data1.map(v => v.value)
          cfg.series[1].data = this.data.data2.map(v => v.value)
          cfg.xAxis[0].data = this.data.data1.map(v => v.xAxis)
          cfg.xAxis[1].data = this.data.data2.map(v => v.xAxis)
          cfg.yAxis[0].name = this.data.title1
          cfg.yAxis[1].name = this.data.title2
          return cfg
      },
  },
};
</script>

<style lang="scss" scoped>
.section {
  background-color: #fff;
}
.distBarChart{
    height: 325px;
    @media screen and (max-width: 1400px){
			height: 300px;
		}
}
</style>
