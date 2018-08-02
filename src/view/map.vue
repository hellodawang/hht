<template>
    <div ref="map" style="height:500px"></div>
</template>
<script>
import echarts from 'echarts'
import china from 'echarts/map/json/china.json';
import map from '../utils/map1.js'
import c from "../utils/city.js"
export default {
    mounted(){
        console.log(c)
        echarts.registerMap('china', china);
        let chart = echarts.init(this.$refs.map);
        map(chart,{})

    }
}
</script>
<style lang='scss' scoped>

</style>