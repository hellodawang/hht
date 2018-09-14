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
            splitLine: {
                show: false,
            },
        },
        {
            type: 'value',
            gridIndex: 1,
            name: '',
            splitLine: {
                show: false,
            },
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
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: '#00b0ff',
                            },
                            {
                                offset: 0.8,
                                color: '#7052f4',
                            },
                        ],
                        false
                    ),
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
                    color: '#f5aba3',
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
