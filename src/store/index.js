import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const store = new Vuex.Store({
    // 定义状态
    state: {
        showSideBar: sessionStorage.showSideBar || true,
        userData: {}
    },
    mutations: {
        updateshowSideBar(state,n) {
            state.showSideBar = n;
            sessionStorage.showSideBar = state.showSideBar
        },
        setUserDate(state, n) {
            state.userData = n
        },
        hide(state){
            state.showSideBar = false;
        }
    }
})
export default store