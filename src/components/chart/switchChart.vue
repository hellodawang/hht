<template>
<div style="background-color:#fff">
    <div>
      <bar-chart :data="config" style="height:220px"/> 
      <div class="period" style="height:50px;text-align:center;margin-top:15px">
        <el-radio-group v-model="period" size="small" @change='handleChange'>
                <el-radio-button v-for="v in buttons" :key="v.type"  :label="v.type">{{v.name}}</el-radio-button>
        </el-radio-group>
      </div>  
    </div> 
    <!-- <div class="period" style="height:50px;text-align:center;margin-top:15px">
      <el-radio-group v-model="period" size="small" @change='handleChange'>
              <el-radio-button v-for="v in buttons" :key="v.type"  :label="v.type">{{v.name}}</el-radio-button>
      </el-radio-group>
    </div>	 -->
</div>
</template>

<script>
import barChart from "./barChart";

export default {
  components: {
    barChart
  },
  props: ["data", "buttonList", "action"],
  data: function() {
    return {
      period: "" // 为空时表示用户上次选择
    };
  },
  computed: {
    buttons() {
      return this.buttonList || [
        { type: "week", name: "每周" },
        { type: "month", name: "每月" },
        { type: "year", name: "每年" }
      ];
    },
    config() {
        return  this.data
    }
  },
  methods: {
    handleChange(period) {
      this.action(period);
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  background-color: #fff;
}
</style>
