<template>
<div style="background-color:#fff">
    <div>
      <bar-chart :data="config" style="height:230px"/> 
      <div class="period" style="height:50px;text-align:center;margin-top:15px">
        <el-radio-group v-model="period" size="small" @change='handleChange'>
          <el-radio-button v-for="v in buttons" :key="v.type"  :label="v.type">{{v.name}}</el-radio-button>
        </el-radio-group>
      </div>  
    </div> 
</div>
</template>

<script>
import barChart from "./barChart";

export default {
  components: {
    barChart
  },
  props: ["data", "buttonList", "action",'selected'],
  data(){
    return {
      period:this.selected
    }
  },
  computed: {
    buttons() {
      return this.buttonList || [
        { type: 1, name: "每周" },
        { type: 2, name: "每月" },
        { type: 3, name: "每年" }
      ];
    },
    config() {
        return  this.data
    },
  },
  methods: {
    handleChange() {
      this.$emit('periodChange',this.period)
    }
  },
  watch:{
    selected:function(){
      this.period = this.selected
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  background-color: #fff;
}
</style>
