<template>
    <el-table :data="op" style="width: 100%">
        <el-table-column prop="importEvent" label="关键事件" width="180"> </el-table-column>
        <el-table-column prop="eventDetail" label="事件详情" ></el-table-column>
        <el-table-column  prop="deadLine"  label="截止时间" width="180"></el-table-column>
    </el-table>
</template>
<script>
export default{
    props:['op']
}
</script>
<style lang='scss'>

</style>