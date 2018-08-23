import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const store = new Vuex.Store({
    // 定义状态
    state: {
        showSideBar: true,
        userData: {}
    },
    mutations: {
        toggle(state) {
            state.showSideBar = !state.showSideBar
                // 所有的echart全部resize
        },
        hide(state) {
            state.showSideBar = false
        },
        setUserDate(state, n) {
            state.userData = n
        }
    }
})
export default store