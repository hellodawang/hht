<template>
    <switch-chart :data="config" :buttonList="buttonList" @periodChange="handleChange" :selected='dateType'/>
</template>

<script>
import echarts from "echarts";
import switchChart from "../../components/chart/switchChart";
import lodash from 'lodash'
let baseConfig = {
  legend:{
    data:['人','设备'],
    top:10
  },
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
      data: [],
      axisLabel:{
        fontSize:10
      }
    },
  ],
  yAxis: [
    {
      name: "活跃度",
      type: "value",
      boundaryGap: ['0%', '20%'],
      axisLabel:{
        fontSize:10
      }
    },
    {
      type: "value",
      boundaryGap: ['0%', '20%'],
      axisLabel:{
        fontSize:10
      }
    }
  ],
  series: [
    {
      name: '人',
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
      itemStyle:{
        color:'#33C8C8'
      },
      data: [79, 68, 56, 74, 89, 95, 89]
    },
    {
      name: '设备',
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
      itemStyle:{
        color:'#F4D177'
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
      dateType:1,
			distributionList:[
		  ]  
    }
  },
  mounted(){
    this.handleChange(this.dateType)
  },
  computed: {
    config() {
      let cfg = Object.assign({}, baseConfig);
      cfg.xAxis[0].data = this.distributionList.map((v) => {
        let time = v.onlineDateInfo.slice(4)
        return time.slice(0, 2) + '/' + time.slice(2)
      }) // this.xAxis
      cfg.series[0].data = this.distributionList.map(v => v.distributionUserInfo) // this.accountData
      cfg.series[1].data = this.distributionList.map(v => v.distributionTerminalInfo) // this.deviceData
      return cfg;
    },
  },
  methods: {
    handleChange(type) {
        this.$axios
          .post("/userapi/userReport/findActiveDistribution", {dateType: type}, { responseType: "json" })
          .then((res) => {
            if (res.data.code != '0000') {
              return console.log("get data error: ", res.message);
            }
            this.distributionList = res.data.data.distributionList.reverse();
            this.dateType = parseInt(res.data.data.onlineDateType)
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
