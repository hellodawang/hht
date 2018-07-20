<template>
    <div class="welcome-wrapper">
        <div class="mask">
            <h3>admin,欢迎来到鸿合云</h3>
            <el-button @click="showInfo" class="btn" type="primary">点击这里进入看板</el-button>
        </div>      
    </div>
</template>
<script>
import {Button} from 'element-ui'
import Vue from 'vue';
Vue.use(Button)
// import "../../assets/bg.jpg"
export default {
    methods:{
        showInfo(){
            this.$router.push("info")
        }
    }
}
</script>
<style lang='scss' scoped>
    .welcome-wrapper{
        width: 100%;
        height: 100%;
        background: url("../../assets/bg.jpg")  center center no-repeat;
        background-size:cover;
        .mask{
            height: 100%;
            width: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            h3{
                color: #fff;
                font-size: 32px;
                font-weight: 500;
                text-align: center;
                padding-top: 200px;
            }
            .btn{
                display: block;
                margin: 50px auto;
            }
        }
    }
</style>