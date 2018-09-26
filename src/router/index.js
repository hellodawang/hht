import Vue from 'vue'
import Router from 'vue-router'
import Login from '../view/login/login'
import index from '../view/index/index.vue'
import driver from '../view/driver/driver'
import zone from '../components/space/space'
import appStore from '../view/appStore/appStore'
import userManager from '../view/userManager/userManager'
import maintenance from '../view/maintenance/maintenance'
import endUser from '../view/driver/endUser'
import managerSimple from '../view/driver/managerSimple'
import deviceInfo from '../view/deviceInfo/deviceInfo'
import statistics from '../view/statistics/statistics'
import driverCompany from '../view/driver/driverCompany'
import notFound  from '../view/error/notFound.vue'
Vue.use(Router)

const router = new Router({
        mode: 'history',
        routes: [
            {
                path:'/',
                meta: {
                    requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
                },
                redirect:'/gui/index'
            },
            {
                path: '/gui/login',
                name: 'login',
                component: Login,
            },
            {
                path: '/gui/index',
                name: 'index',
                component: index,
                meta: {
                    requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
                },
                children: [{
                    path: '/gui/driver',
                    name: 'driver',
                    component: driver,
                    meta: {
                        requireAuth: true, 
                    }    
                }, {
                    path: '/gui/zone',
                    name: 'zone',
                    component: zone,
                    meta: {
                        requireAuth: true, 
                    } 
                }, {
                    path: '/gui/appStore',
                    name: 'appStore',
                    component: appStore,
                    meta: {
                        requireAuth: true, 
                    } 
                }, {
                    path: '/gui/userManager',
                    name: 'userManager',
                    component: userManager,
                    meta: {
                        requireAuth: true, 
                    } 
                }, {
                    path: '/gui/maintenance',
                    name: 'maintenance',
                    component: maintenance,
                    meta: {
                        requireAuth: true, 
                    } 
                }, {
                    path: '/gui/endUser',
                    name: 'endUser',
                    component: endUser,   
                    meta: {
                        requireAuth: true, 
                    }              
                }, {
                    path: '/gui/managerSimple',
                    name: 'managerSimple',
                    component: managerSimple,
                    meta: {
                        requireAuth: true, 
                    } 
                }, {
                    path: '/gui/deviceInfo',
                    name: 'deviceInfo',
                    component: deviceInfo,
                    meta: {
                        requireAuth: true, 
                    } 
                }, {
                    path: '/gui/statistics',
                    name: 'statistics',
                    component: statistics,
                    meta: {
                        requireAuth: true, 
                    } 
                }, {
                    path: '/gui/driverCompany',
                    name: 'driverCompany',
                    component: driverCompany,
                    meta: {
                        requireAuth: true, 
                    } 
                }, ]
            },
            {
                path: '*', // 此处需特别注意至于最底部
                component: notFound
            }

        ]
    })
    router.beforeEach((to, from, next) => {
        if (to.matched.some(r => r.meta.requireAuth)) { // 判断该路由是否需要登录权限
            if (sessionStorage.username) { // 通过vuex state获取当前的token是否存在
                next();
            } else {
                next({
                    path: '/gui/login',
                    query: {
                        redirect: to.fullPath
                    } // 将跳转的路由path作为参数，登录成功后跳转到该路由
                })
            }
        } else {
            next();
        }
    })
export default router