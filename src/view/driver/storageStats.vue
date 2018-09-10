<template>
<div class="section">
    <div class="section-title"> 
        <h3>容量</h3> 
    </div>
    <div class="section-content" style="height:140px">
        <el-col :span='8' style="text-align:center">
            <el-progress type="circle" :percentage="this.data[0]" :width='70'></el-progress>
            <p>集群1</p>
        </el-col>
        <el-col :span='8'>
            <el-progress type="circle" :percentage="this.data[1]" :width='70'></el-progress>
            <p>集群2</p>
        </el-col>
        <el-col :span='8'>
            <el-progress type="circle" :percentage="this.data[2]" :width='70'></el-progress>
            <p>集群3</p>
        </el-col>              
    </div>
</div>
</template>

<script>
import barChart from "../../components/chart/barChart";

export default {
  components: {
      barChart,
  },
  props: ["data"],
  data: function() {
    return {};
  },
  computed: {
      config() {

      },
  },
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
