<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
	name: 'App',
	mounted() {
	},
};
</script>

<style lang='scss' scoped>
#app {
	width: 100%;
	height: 100%;
	background-color: #f0f0f0;
	box-sizing: border-box;
	background-clip: content-box;
}
</style>
