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
}
</script>

<style lang='scss' scoped>
#app {
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
  // padding: 10px;
  box-sizing: border-box;
  background-clip:content-box
}
</style>
