import Vue from 'vue'
import Router from 'vue-router'
import Login from '../view/login/login'
import index from '../view/index/index.vue'
import driver from '../view/driver/driver'
import zone from '../components/space/space'
import appStore from '../view/appStore/appStore'
import userManager from '../view/userManager/userManager'
import maintenance from '../view/maintenance/maintenance'
import user1 from '../view/driver/user1'
import managerSimple from '../view/driver/managerSimple'
import deviceInfo from '../view/deviceInfo/deviceInfo'
import statistics from '../view/statistics/statistics'
import driverCompany from '../view/driver/driverCompany'

Vue.use(Router)

const router = new Router({
        mode: 'history',
        routes: [{
                path: '/',
                name: 'login',
                component: Login
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
                    component: driver
                }, {
                    path: '/gui/zone',
                    name: 'zone',
                    component: zone
                }, {
                    path: '/gui/appStore',
                    name: 'appStore',
                    component: appStore
                }, {
                    path: '/gui/userManager',
                    name: 'userManager',
                    component: userManager
                }, {
                    path: '/gui/maintenance',
                    name: 'maintenance',
                    component: maintenance
                }, {
                    path: '/gui/user1',
                    name: 'user1',
                    component: user1
                }, {
                    path: '/gui/managerSimple',
                    name: 'managerSimple',
                    component: managerSimple
                }, {
                    path: '/gui/deviceInfo',
                    name: 'deviceInfo',
                    component: deviceInfo
                }, {
                    path: '/gui/statistics',
                    name: 'statistics',
                    component: statistics
                }, {
                    path: '/gui/driverCompany',
                    name: 'driverCompany',
                    component: driverCompany
                }, ]
            },

        ]
    })
    router.beforeEach((to, from, next) => {
        if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
            if (sessionStorage.username) { // 通过vuex state获取当前的token是否存在
                next();
            } else {
                next({
                    path: '/',
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