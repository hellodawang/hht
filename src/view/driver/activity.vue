<template>
    <switch-chart :data="config" :buttonList="buttonList" :action="handleChange" :selected='selected'/>
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
      name: "人",
      type: "value",
      min: 0
      // max: 100,
      // interval: 20,
    },
    {
      name: "台",
      type: "value",
      min: 0
    }
  ],
  series: [
    {
      // name: '平均值',
      yAxisIndex:0,
      type: "line",
      smooth: true,
      // showSymbol: false,
      label: {
        normal: {
          show: false,
          position: "top"
        }
      },
      data: [79, 68, 56, 74, 89, 95, 89]
    },
    {
      // name: '平均值',
      yAxisIndex:1,
      type: "line",
      smooth: true,
      // showSymbol: false,
      label: {
        normal: {
          show: true,
          position: "top"
        }
      },
      data: [200, 100, 350, 540, 600, 270, 900]
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
      ],
      selected:null,
      xAxis:[],
      deviceData:[],
      accountData:[]
    };
  },
  mounted(){
    this.op.distributionList.forEach(element => {
      this.xAxis.push(element.onlineDateInfo)
      this.deviceData.push(element.distributionUserInfo)
      this.accountData.push(element.distributionTerminalInfo)
    });
    this.selected  = this.op.dateType
  },
  computed: {
    config() {
      let cfg = Object.assign({}, baseConfig);
      cfg.xAxis[0].data = this.xAxis
      cfg.series[0].data = this.accountData
      cfg.series[1].data = this.deviceData
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
