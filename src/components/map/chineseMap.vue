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
        bgColor: "#404a59", // 画布背景色
        mapName: "china", // 地图名
        text: '业务全景图',
        goDown: true, // 是否下钻
        // 下钻回调
        callback: function(name, option, instance) {

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
  computed:{
    showSideBar(){
      return this.$store.state.showSideBar
    }
  },
  mounted() {
    echarts.registerMap("china", china);
    display.bind(this)()
  },
  watch: {
    stats: function(newQuestion, oldQuestion) {
        // this.$echarts.dispose(this.$refs.echart);
        display.bind(this)()
    },
    showSideBar:function(){
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
