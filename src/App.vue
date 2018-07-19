<template>
  <div id="app">
    <!-- <router-link to="/login">Go to Bar</router-link> -->
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  name: 'App',
  //   created(){
  //     axios.get('/api/testData');
  // }
}
</script>

<style lang='scss' scoped>
#app {
  width: 100%;
  height: 100%;
}
</style>
