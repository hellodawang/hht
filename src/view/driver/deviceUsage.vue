<template>
    <switch-chart :data="config" :buttonList="buttonList" @periodChange='handleChange'  :selected='selected'/>
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
      data: []
    }
  ],
  yAxis: [
    {
      // name: "活跃度",
      type: "value",
      min: 0
    }
  ],
  series: [
    {
      type: "line",
      label: {
        normal: {
          show: true,
          position: "top"
        }
      },
      data: []
    }
  ]
};

export default {
  components: {
    switchChart
  },
  props: ["op"],
  data: function() {
    return {
      buttonList: [
        { type: 1, name: "每周" },
        { type: 2, name: "每月" },
        { type: 3, name: "每年" }
      ]
    };
  },
  computed: {
    config() {
      let cfg = Object.assign({}, baseConfig);
      cfg.xAxis[0].data = this.runningTimeData.xAxisArr;
      cfg.series[0].data = this.runningTimeData.data
      return cfg;
    },
    // 选中的是周，月，年
    selected(){
      return this.op.onlineDateType
    },
    // x轴数据
    runningTimeData(){
      let xAxisArr = []
      let data = []
      this.op.dateList.forEach(element => {
        xAxisArr.push(element.dayDate)
        data.push(element.employRate)
      });
      return {xAxisArr:xAxisArr,data:data}
    },
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
