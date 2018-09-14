<template>
    <switch-chart :data="config" :buttonList="buttonList" @periodChange="handleChange" :selected='dateType'/>
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
      showSymbol: false,
      label: {
        normal: {
          // show: false,
          // position: "top"
        }
      },
      data: [79, 68, 56, 74, 89, 95, 89]
    },
    {
      // name: '平均值',
      yAxisIndex:1,
      type: "line",
      smooth: true,
      showSymbol: false,
      label: {
        normal: {
          // show: true,
          // position: "top"
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
  data: function() {
    return {
      buttonList: [
        { type: 1, name: "每周" },
        { type: 2, name: "每月" },
        { type: 3, name: "每年" }
      ],
      // selected:null,
      // xAxis:[],
      // deviceData:[],
      // accountData:[],
    
      dateType:2,
			distributionList:[
					// {"onlineDateInfo": "07/26","distributionUserInfo": "3500","distributionTerminalInfo": "350" },
					// {"onlineDateInfo": "07/27","distributionUserInfo": "4500","distributionTerminalInfo": "600" },
					// {"onlineDateInfo": "07/28","distributionUserInfo": "4300","distributionTerminalInfo": "500" },
					// {"onlineDateInfo": "07/29","distributionUserInfo": "5300","distributionTerminalInfo": "200" },
					// {"onlineDateInfo": "07/30","distributionUserInfo": "4900","distributionTerminalInfo": "180" },
					// {"onlineDateInfo": "07/31","distributionUserInfo": "5100","distributionTerminalInfo": "480" },
			]
    
    }
  },
  mounted(){
    // this.op.distributionList.forEach(element => {
    //   this.xAxis.push(element.onlineDateInfo)
    //   this.deviceData.push(element.distributionUserInfo)
    //   this.accountData.push(element.distributionTerminalInfo)
    // });
    // this.selected  = this.op.dateType
    this.handleChange('')
  },
  computed: {
    config() {
      let cfg = Object.assign({}, baseConfig);
      cfg.xAxis[0].data = this.distributionList.map(v => v.onlineDateInfo) // this.xAxis
      cfg.series[0].data = this.distributionList.map(v => v.distributionUserInfo) // this.accountData
      cfg.series[1].data = this.distributionList.map(v => v.distributionTerminalInfo) // this.deviceData
      return cfg;
    },
  },
  methods: {
    handleChange(type) {
        console.log(type)
        this.$axios
          .post("/user/findActiveDistribution", {dateType: type}, { responseType: "json" })
          .then((res) => {
            if (res.data.code != '0000') {
              return console.log("get data error: ", res.message);
            }
            this.distributionList = res.data.data.distributionList;
            this.dateType = parseInt(res.data.data.onlineDateType)
            console.log('date type: ', this.dateType)
            console.log('online distribution: ', this.distributionList)
          })
          .catch(function(error) {
            console.log(error);
          });
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  background-color: #fff;
}
</style>
