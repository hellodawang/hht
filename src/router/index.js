import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login'
import info from '@/components/info/info'
import index from '@/components/index/index'
import driver from '@/components/driver/driver'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/info',
      name: 'info',
      component: info
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      children:[
        {
          path: '/index',
          name: 'driver',
          component: driver
        },
      ]
    },
    
  ]
})
