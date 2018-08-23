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
		//  this.$axios.get('/api/user')
		//   .then(function (response) {
		//     console.log(response);
		//   })
		//   .catch(function (error) {
		//     console.log(error);
		//   });
		// this.$axios
		// 	.post('/api/test')
		// 	.then(function(response) {
		// 		console.log('post');
		// 		console.log(response);
		// 	})
		// 	.catch(function(error) {
		// 		console.log(error);
		// 	});
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
