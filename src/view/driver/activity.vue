<template>
    <switch-chart :data="config" :buttonList="buttonList" :action="handleChange"/>
</template>

<script>
import echarts from "echarts";
import switchChart from "../../components/chart/switchChart";
let baseConfig = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        backgroundColor: "#6a7985"
      }
    }
  },
  grid: {
    left: "2%",
    right: "5%",
    bottom: "3%",
    top: "20%",
    containLabel: true
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      data: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00"]
    },
  ],
  yAxis: [
    {
      name: "活跃度",
      type: "value",
      min: 0
      // max: 100,
      // interval: 20,
    }
  ],
  series: [
    {
      // name: '平均值',
      type: "line",
      smooth: true,
      // showSymbol: false,
      label: {
        normal: {
          show: true,
          position: "top"
        }
      },
      data: [79, 68, 56, 74, 89, 95, 89]
    }
  ]
};

export default {
  components: {
    switchChart
  },
  props: ["data"],
  data: function() {
    return {
      buttonList: [
        { type: "week", name: "每周" },
        { type: "month", name: "每月" },
        { type: "year", name: "每年" }
      ]
    };
  },
  computed: {
    config() {
      let cfg = Object.assign({}, baseConfig);
    //   cfg.xAxis[0].data = this.data.xAxis;
    //   cfg.series[0].data = this.data.account;
    //   console.log("series: ", cfg.series[0]);

    //   cfg.series[1].data = this.data.device;
      return cfg;
    }
  },
  methods: {
    handleChange(type) {
        console.log(type)
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  background-color: #fff;
}
</style>
