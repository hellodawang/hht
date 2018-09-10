<template>
    <bar-chart :data="config"/>
</template>

<script>
import echarts from "echarts";
import barChart from '../../components/chart/barChart'
let baseConfig = {
    title: {
        text: 'top应用排行',
        // subtext: '35560',
        x: 'center',
    },
    grid: {
        top: '20',
        width: '90%',
        bottom: '3%',
        left: 10,
        containLabel: true,
    },
    yAxis: [
        {
            type: 'category',
            data: ['OA办公', 'UC业务', '魔兽世界', 'i学', '电子书包'],
            axisLine: {
                //y轴
                show: false,
            },
            axisTick: {
                //y轴刻度线
                show: false,
            },
            splitLine: {
                //网格线
                show: false,
            },
        },
    ],
    xAxis: [
        {
            type: 'value',
            axisLine: {
                //y轴
                show: false,
            },
            axisTick: {
                //y轴刻度线
                show: false,
            },
            splitLine: {
                //网格线
                show: false,
            },
            show: false,
            // axisLabel: {
            //     formatter: '{value}'
            // }
        },
    ],
    series: [
        {
            // name:'电子书包',
            type: 'bar',
            data: [578, 633, 708, 921, 1126],
            barCategoryGap: '10%',
            barWidth: 12,
            label: {
                normal: {
                    show: true,
                    // formatter: '{b}'
                },
            },
            itemStyle: {
                normal: {
                    color: '#f5aba3',
                },
            },
        },
    ],
}

export default {
  components: {
      barChart,
  },
  props: ["data"],
  data: function() {
    return {};
  },
  computed: {
      config() {
          let cfg = Object.assign({}, baseConfig)
          cfg.yAxis[0].data = this.data.yAxis
          cfg.series[0].data = this.data.count
        //   console.log('series: ', cfg.series[0])
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
