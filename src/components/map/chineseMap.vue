<template>
    <div ref="echart"></div>
</template>

<script>
import echarts from "echarts";
import china from "echarts/map/json/china.json";
// import world from "echarts/map/json/world.json";
import mapchart from '../../utils/map.js';
function display() {
        this.$echarts.dispose(this.$refs.echart);
        this.map = echarts.extendsMap(this.$refs.echart, {
        bgColor: "#154e90", // 画布背景色
        mapName: "china", // 地图名
        text: '业务全景图',
        goDown: true, // 是否下钻

        // 下钻回调
        callback: function(name, option, instance) {
            console.log('name: ', name)
            // console.log(option)
            // option.series.data = this.stats
            // option.serise[0]
        }
      },  this.stats);
}

export default {
  props: ['stats'],
  data: function() {
    return {
      map: {},
      greeting: "Hello"
    };
  },
  mounted() {
    console.log('stats', this.stats)
    echarts.registerMap("china", china);
    display.bind(this)()
    // echarts.registerMap("world", world);
    // this.$nextTick(() => {
      //   this.$echarts.dispose(this.$refs.echart);
      //   this.map = echarts.extendsMap(this.$refs.echart, {
      //   bgColor: "#154e90", // 画布背景色
      //   mapName: "china", // 地图名
      //   text: '业务全景图',
      //   goDown: true, // 是否下钻

      //   // 下钻回调
      //   callback: function(name, option, instance) {
      //       console.log('name: ', name)
      //       console.log(option)
      //       // option.serise[0]
      //   }
      // }, this.stats);
    // });
  },
  watch: {
    stats: function(newQuestion, oldQuestion) {
        // this.$echarts.dispose(this.$refs.echart);
        display.bind(this)()
    }
  },
  beforeDestroy() {
    this.$echarts.dispose(this.$refs.echart);
  }
};
</script>

<style lang="scss" scoped>
</style>
