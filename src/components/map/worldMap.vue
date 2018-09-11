<template>
    <div ref="echart"></div>
</template>

<script>
import echarts from "echarts";
// import china from "echarts/map/json/china.json";
import world from "echarts/map/json/world.json";
import countryList from "../../utils/countryList.js";

// init and display map
function display() {
  this.$echarts.dispose(this.$refs.echart);
  this.map = this.$echarts.init(this.$refs.echart);
  // console.log('world map data: ', this.stats)
  this.map.setOption({
    backgroundColor: "#154e90",
    visualMap: {
      min: 0,
      max: 10000,
      left: "right",
      top: "bottom",
      text: ["High", "Low"],
      seriesIndex: [0],
      inRange: {
        color: ["#e0ffff", "#006edd"]
      },
      calculable: true
    },
    tooltip: {
        show: true,
        trigger: 'item',
        alwaysShowContent: false,
        backgroundColor: 'rgba(50,50,50,0.7)',
        hideDelay: 100,
        triggerOn: 'mousemove',
        enterable: true,
        // position:['60%','70%'],
        formatter:function(params, ticket, callback){
            let d = params.data
            if (!d) return '未获取到数据'
            return d.name + '设备统计' + '<br/>' + '在线: ' +
              d.online + '，总计：' + d.value
            // return '简称：'+ JSON.stringify(params.data) +'<br/>'
        }
    },
    series: [
      {
        roam: true,
        type: "map",
        map: "world",
        data: this.stats,
        nameMap: countryList
      }
    ]
  });
}
export default {
  props: ["stats"],
  data: function() {
    return {
      map: {},
      greeting: "Hello"
    };
  },
  computed: {
    worldMapData: function() {
      return worldMapData;
    }
  },
  mounted() {
    // echarts.registerMap("china", china);
    echarts.registerMap("world", world);
    display.bind(this)()
    // this.$nextTick(() => {
    // this.$echarts.dispose(this.$refs.echart);
    // this.map = this.$echarts.init(this.$refs.echart);
    // this.map.setOption({
    //   backgroundColor: "#154e90",
    //   visualMap: {
    //     min: 0,
    //     max: 10000,
    //     left: "right",
    //     top: "bottom",
    //     text: ["High", "Low"],
    //     seriesIndex: [0],
    //     inRange: {
    //       color: ["#e0ffff", "#006edd"]
    //     },
    //     calculable: true
    //   },
    //   series: [
    //     {
    //       type: "map",
    //       map: "world",
    //       data: this.stats,
    //       nameMap: countryList
    //     }
    //   ]
    // });
    // });
  },
  watch: {
    stats: function(newQuestion, oldQuestion) {
      display.bind(this)();
    }
  },
  beforeDestroy() {
    this.$echarts.dispose(this.$refs.echart);
  }
};
</script>

<style lang="scss" scoped>
</style>
