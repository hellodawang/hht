// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import "./assets/reset.css"
// import "./assets/font/iconfont.css"


import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './api/http'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'
import store from './store/index'
import lodash from 'lodash'
// mock数据
// import "./mock/index"
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.prototype._ = lodash
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})