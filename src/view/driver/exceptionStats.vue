<template>
    <switch-chart :data="config" :buttonList="buttonList" @periodChange='handleChange' :selected='selected'/>
</template>

<script>
import echarts from "echarts";
import switchChart from "../../components/chart/switchChart";
let baseConfig = {
  tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        right: '10%',
        data:[]
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center',
                    formatter:null
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
            ]
        }
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
      ]
    };
  },
  computed: {
    config() {
      let cfg = Object.assign({}, baseConfig);
      cfg.legend.data = this.chartData.map(v => v.exceptionDecs)  // this.exceptionData.xAxisArr;
      cfg.series[0].data = this.chartData.map(v => ({name: v.exceptionDecs, value: v.exceptionNum})) // this.exceptionData.data;
      cfg.series[0].label.normal.formatter = ()=>{
        // return ['{|异常总数}','{'+this.exceptionData.all+'}'].join('\n')
        return '{|异常总数}\n{' + this.chartData.reduce((a, v) => a + v.exceptionNum, 0) + '}'
      }
      return cfg;
    },
    // 选中的是周，月，年
    // selected(){
      // return this.op.onlineDateType
    // },
    // x轴数据
    // exceptionData(){
    //   let legend = []
    //   let data = []
    //   let all
    //   this.chartData.forEach(element => {
    //     legend.push(element.exceptionDecs)
    //     data.push({name:element.exceptionDecs,value:element.exceptionNum})
    //     all+=element.exceptionNum
    //   });
    //   return {legend:legend,data:data,all:all}
    // },
  },

  watch: {
    cloudCode: function() {
      this.handleChange('')
    }
  },
  methods: {
    handleChange(type) {
      console.log(type)
      if (!this.cloudCode) return
      this.$axios
        .post("/web/logs/exceptionStatis", {dateType: type, clientCloudCode: this.cloudCode}, { responseType: "json" })
        .then(res => {
          if (res.data.code != '0000') {
            return console.log("get data error: ", res.message);
          }
          this.chartData = res.data.data.exceptionList
          // console.log('chart data: ', this.chartData)
          this.selected = res.data.data.onlineDateType
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
