<template>
    <bar-chart :data="config"/>
</template>

<script>
import echarts from "echarts";
import barChart from '../../components/chart/barChart'
let baseConfig = {
    grid: [
        {
            x: '5%',
            y: '10%',
            width: '90%',
            height: '35%',
            containLabel: true,
        },
        {
            x: '5%',
            y: '60%',
            width: '90%',
            height: '35%',
            containLabel: true,
        },
    ],
    xAxis: [
        {
            type: 'category',
            data: [],
            
        },
        {
            gridIndex: 1,
            type: 'category',
            data: [],
        },
    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            axisTick:{
                show:false
            },
            splitLine: {
                show: false,
            },
            boundaryGap: ['20%', '20%']
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
            boundaryGap: ['20%', '20%']
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
          cfg.series[0].data = this.data.account.map(v => v.typeOnline)
          cfg.series[1].data = this.data.device.map(v => v.typeOnline)
          cfg.xAxis[0].data = this.data.account.map(v => v.accountType)
          cfg.xAxis[1].data = this.data.device.map(v => v.terminalType)
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
</style>
