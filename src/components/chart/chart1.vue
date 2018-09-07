<template>
    <div class="chart-wrapper">
        <slot></slot>
        <el-radio-group v-model="chartPeriod"  size="small" >
            <el-radio-button label="week">本周</el-radio-button>
            <el-radio-button label="month">本月</el-radio-button>
            <el-radio-button label="year">本年</el-radio-button>
        </el-radio-group>
    </div>
</template>
<script>
export default {
    props:['period'],
    computed:{
        chartPeriod:function(){
            return this.period
        }
    }
};
</script>
<style lang='scss'>
.chart-wrapper{
    text-align: center;
    .el-radio-group{
        margin-top: 20px;
    }
}
</style>