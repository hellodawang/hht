<template>
    <div class="section">
              <div class="section-title"> 
                  <h3>带宽性能</h3> 
              </div>
              <div class="section-content" >
                  <bar-chart :data="config" style="height:180px"/>                
              </div>
          </div>
</template>

<script>
import echarts from "echarts";
import barChart from "../../components/chart/barChart";
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
  legend: {
    data: []
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    top: "15%",
    containLabel: true
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      data: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00"]
    }
  ],
  yAxis: [
    {
      type: "value",
      min: 0,
      max: 100,
      interval: 20
    }
  ],
  series: [
    {
      name: "最高值",
      type: "line",
      smooth: true,
      showSymbol: false,
      areaStyle: { normal: {} },
    },
    {
      name: "平均值",
      type: "line",
      smooth: true,
      showSymbol: false,
      label: {
        normal: {
          show: true,
          position: "top"
        }
      },
      areaStyle: { normal: {} },
    },
    {
      name: "最高值",
      type: "line",
      smooth: true,
      showSymbol: false,
      areaStyle: { normal: {} },
    },
    {
      name: "最高值",
      type: "line",
      smooth: true,
      showSymbol: false,
      areaStyle: { normal: {} },
    },
    {
      name: "最高值",
      type: "line",
      smooth: true,
      showSymbol: false,
      areaStyle: { normal: {} },
    },
    {
      name: "最高值",
      type: "line",
      smooth: true,
      showSymbol: false,
      areaStyle: { normal: {} },
    },
  ]
};

export default {
  components: {
    barChart
  },
  props: ["data"],
  data: function() {
    return {};
  },
  computed: {
    config() {
      let cfg = Object.assign({}, baseConfig);
      cfg.legend.data = this.data.data.map(v => v.name);

      cfg.xAxis[0].data = this.data.xAxis;
      //   cfg.series[0].data = this.data.count
      cfg.series.forEach((v, i) => {
        return Object.assign(v, this.data.data[i]);
      });
      //  console.log('bendwidth series: ', cfg.series)
      return cfg;
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 10px;
  display: inline-block;
  width: 100%;
  font-size: 12px;
  position: relative;
  vertical-align: middle;
  .section-title {
    border-bottom: 1px solid #e0e0e0;
    height: 38px;
    h3 {
      font-size: 12px;
      font-weight: 500;
      text-indent: 1em;
      line-height: 38px;
      color: #0b0b0b;
      float: left;
    }
  }
  .section-content {
    padding: 10px;
  }
}
</style>
