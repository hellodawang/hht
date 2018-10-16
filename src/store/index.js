import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
    // 定义状态
    state: {
        showSideBar: true,
        userData: {},
        lang:''
    },
    mutations: {
        updateshowSideBar(state,n) {
            state.showSideBar = n;
            sessionStorage.setItem('showSideBar',n)
        },
        setUserDate(state, n) {
            state.userData = n
        },
        hide(state){                    
            state.showSideBar = false;
        },
        reset(state){
            state.showSideBar = true;
        },
        setLang(state,n){
            state.lang = n
        }
    }
})
export default store