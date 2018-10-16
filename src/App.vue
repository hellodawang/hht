<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
	name: 'App',
	created(){
		let lang = localStorage.getItem('PLAY_LANG')
    if (lang) {
      this.$store.commit('setLang',lang)
    } else {
      let defaultLang = 'zh' 
      localStorage.setItem('PLAY_LANG', defaultLang)
      this.$store.commit('setLang',defaultLang)
    }
	},
	computed:{
		lang(){
			return this.$store.state.lang	
		}		
	},
	watch:{
		lang(){
			this.$i18n.locale = this.lang
      localStorage.setItem('PLAY_LANG', this.lang)
		}
	},
	// mounted(){
	// 	this.$axios.post('/api/seller1')
	// }
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
