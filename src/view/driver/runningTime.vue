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
      selected: '',
      buttonList: [
        { type: 1, name: "每周" },
        { type: 2, name: "每月" },
        { type: 3, name: "每年" }
      ],
    };
  },
  mounted() {
    this.handleChange('')
  },
  computed: {
    config() {
      let cfg = Object.assign({}, baseConfig);
      cfg.xAxis[0].data = this.chartData.map(v => v.dayDate) // this.runningTimeData.xAxisArr;
      cfg.series[0].data = this.chartData.map(v => v.hour) // this.runningTimeData.data
      return cfg;
    },
    // 选中的是周，月，年
    // selected(){
      // return this.op.onlineDateType
    // },
    // x轴数据
    // runningTimeData(){
    //   let xAxisArr = []
    //   let data = []
    //   this.op.dateList.forEach(element => {
    //     xAxisArr.push(element.dayDate)
    //     data.push(element.hour)
    //   });
    //   return {xAxisArr:xAxisArr,data:data}
    // },
  },
  watch: {
    cloudCode: function() {
      this.handleChange('')
    },
  },
  methods: {
    handleChange(type) {
      console.log(type)
      if (!this.cloudCode) return
      this.$axios
        .post("/term/terminalDuration", {dateType: type, clientCloudCode: this.cloudCode}, { responseType: "json" })
        .then(res => {
          if (res.data.code != '0000') {
            return console.log("get data error: ", res.message);
          }
          this.chartData = res.data.data.dateList
          // console.log('chart data: ', this.chartData)
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
