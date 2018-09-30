<template>
    <div ref="echart" class="map"></div>
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
  this.map.setOption({
    backgroundColor: "#404a59",
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
      textStyle:{
          color:'#fff'
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
        nameMap: countryList,
        itemStyle:{
          emphasis: {
              areaColor:'rgb(5,52,88)',
              borderWidth: 0,
              label:{
                color:'#fff'
              }
          }
        },
        emphasis:{
          color:'#e0ffff'
        }
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
    },
    showSideBar(){
      return this.$store.state.showSideBar
    }
  },
  mounted() {
    // echarts.registerMap("china", china);
    echarts.registerMap("world", world);
    display.bind(this)()
  },
  watch: {
    stats: function(newQuestion, oldQuestion) {
      display.bind(this)();
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
.map{
  height: 500px;
  @media screen and (max-width: 1400px){
			height: 435px;
		}
}
</style>
