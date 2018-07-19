import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login'
import Welcome from '@/components/welcome/welcome'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Router)

export default new Router({
  routes: [
    {
       path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome
    }
  ]
})
