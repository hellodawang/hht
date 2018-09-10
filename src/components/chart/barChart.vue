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
    };
  },
  mounted() {
    let dom = this.$refs.echarts;
    this.chart = this.$echarts.init(dom);
    this.chart.setOption(this.data);
  },
  watch: {
    data: function(n, o) {
      let dom = this.$refs.echarts;
      this.$echarts.dispose(dom);
      this.chart = this.$echarts.init(dom);
      this.chart.setOption(this.data);
    }
  },
  beforeDestroy() {
    this.$echarts.dispose(this.$refs.echarts);
  }
};
</script>

<style lang="scss" scoped>
.section {
  background-color: #fff;
}
</style>
