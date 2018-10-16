<template>
    <div class="echart-with-vue" ref="echarts">
    </div>
</template>

<script>
export default {
  props: ["data"],
  data: function() {
    return {
      // greeting: "Hello"
      chart:null
    };
  },
  computed:{
    showSideBar(){
      return this.$store.state.showSideBar
    }
  },
  mounted() {
    let dom = this.$refs.echarts;
    this.chart = this.$echarts.init(dom);
    this.chart.setOption(this.data);
    window.addEventListener("resize",this.resizeHandle)
  },
  methods:{
    resizeHandle(){
      this.chart.resize()
    }
  },
  watch: {
    data: function(n, o) {
      let dom = this.$refs.echarts;
      this.$echarts.dispose(dom);
      this.chart = this.$echarts.init(dom);
      this.chart.setOption(this.data);
    },
    showSideBar:function(){
        let dom = this.$refs.echarts;
        this.$echarts.dispose(dom);
        this.chart = this.$echarts.init(dom);
        this.chart.setOption(this.data);
        // this.chart.setOption(this.data)      
    }
  },
  destroyed(){
    window.removeEventListener("resize",this.resizeHandle)
  },
  beforeDestroy() {
    this.$echarts.dispose(this.$refs.echarts);
  }
};
</script>

<style lang="scss" scoped>
.echart-with-vue{
  height: 100%;
}
.section {
  background-color: #fff;
}
</style>
