<template>
    <switch-chart :data="config" :buttonList="buttonList" @periodChange='handleChange' :selected='selected'/>
</template>

<script>
import echarts from "echarts";
import switchChart from "../../components/chart/switchChart";
let baseConfig = {
  tooltip: {
        trigger: 'item',
        formatter: "{b}: {c} ({d}%)"
    },
    series: [
        {
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'center',
                    formatter:null
                },
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            emphasis:{
              label:{
                show:true,
                formatter:function(){
                  return '无异常'
                }
              }
            },
            data:[
              {name:'无异常',value:100,itemStyle:{color:'#67C23A'}}
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
      selected: 1,
      buttonList: [
        { type: 1, name: "每周" },
        { type: 2, name: "每月" },
        { type: 3, name: "每年" }
      ]
    };
  },
  mounted() {
    this.handleChange(this.selected)
  },
  computed: {
    config() {
      let cfg = Object.assign({}, baseConfig);
      if(this.chartData.length>0){
        cfg.series[0].data = this.chartData.map(v => ({name: v.exceptionName, value: v.exceptionNum})) // this.exceptionData.data;
        cfg.series[0].emphasis.label.formatter = (param)=>{
          return param.name
        } 
        cfg.series[0].label.normal.position='outside'
      }
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
        .post("/logweb/logserver/exceptionstatis", {dateType: this.selected, clientCloudCode: this.cloudCode}, { responseType: "json" })
        .then(res => {
          if (res.data.code != '0000') {
            return console.log("get data error: ", res.message);
          }
          this.chartData = res.data.data.exceptionList
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
