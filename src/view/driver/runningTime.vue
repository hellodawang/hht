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
    left: "5%",
    right: "5%",
    bottom: "3%",
    top: "20%",
    containLabel: true
  },
  xAxis: [
    {
      type: "category",
      axisLabel:{
        fontSize:10
      }
    }
  ],
  yAxis: [
    {
      name: "小时",
      type: "value",
      min: 0
    }
  ],
  series: [
    {
      barGap: '10%',
      barWidth: '30%',
      type: "bar",
      data: []
    }
  ],
  dataZoom: [
      {
          id: 'dataZoomX',
          type: 'slider',
          xAxisIndex: [0],
          filterMode: 'filter',
          bottom:0
      },
  ]
};

export default {
  components: {
    switchChart
  },
  props: ['cloudCode'],
  data: function() {
    return {
      chartData: [],
      selected: 1,
      buttonList: [
        { type: 1, name: "每周" },
        { type: 2, name: "每月" },
        { type: 3, name: "每年" }
      ],
    };
  },
  mounted() {
    this.handleChange(this.selected)
  },
  computed: {
    config() {
      let cfg = Object.assign({}, baseConfig);
      cfg.xAxis[0].data = this.chartData.map(v => v.dayDate) // this.runningTimeData.xAxisArr;
      cfg.series[0].data = this.chartData.map(v => v.hour) // this.runningTimeData.data
      return cfg;
    },
  },
   watch: {
    cloudCode: function() {
      this.handleChange(this.selected)
    }
  },
  methods: {
    handleChange(type) {
      this.selected = type
      if (!this.cloudCode) return
      this.$axios
        .post("/terminalweb/terminalReport/terminalDuration", {dateType: this.selected, clientCloudCode: this.cloudCode}, { responseType: "json" })
        .then(res => {
          if (res.data.code != '0000') {
            return console.log("get data error: ", res.message);
          }
          this.chartData = res.data.data.dateList.map(v => ({dayDate:v.dayDate.substring(5).replace('-', '/'),hour:v.hour}))
          this.selected = res.data.data.onlineDateType
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
};
</script>

<style lang="scss" scoped>
.section {
  background-color: #fff;
}
</style>
