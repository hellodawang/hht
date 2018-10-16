/* 
此组件用于echart表格和三个按钮组切换的
period 代表的是父组件传递过来的默认当前显示哪个时间段
periodchange 是自定义事件 可监听到当前选中的是哪个时间段
 */
<template>
    <div class="chart-wrapper">
        <slot></slot>
        <el-radio-group v-model="chartPeriod"  size="small" @change="handleChange">
            <el-radio-button label="week">本周</el-radio-button>
            <el-radio-button label="month">本月</el-radio-button>
            <el-radio-button label="year">本年</el-radio-button>
        </el-radio-group>
    </div>
</template>
<script>
export default {
    props:['period'],
    data(){
        return {
            chartPeriod:null
        }
    },
    created(){
        this.chartPeriod = this.period
    },
    methods:{
        handleChange(){
            this.$emit('periodchange',this.chartPeriod)
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