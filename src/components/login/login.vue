<template>
    <div class="wrapper">
        <el-form  label-width="60px" class="login-wrapper">
            <h3>鸿合云</h3>
            <el-form-item label="用户名:">
                <el-input placeholder="请输入用户名" v-model="username" clearable><i slot="prefix" class="icon iconfont icon-user"></i></el-input>
            </el-form-item>
            <el-form-item label="密码：" class="password">
                <el-input placeholder="请输入密码"  v-model="password" clearable type='password'><i slot="prefix" class="icon iconfont icon-password"></i></el-input>
                <div class="tip" >
                    <span v-if='showTip'>请检查用户名和密码是否正确</span>
                </div>   
            </el-form-item>
            
            <el-button type="primary" class="submit-btn" @click="submit">登录</el-button>               
        </el-form>      
    </div>
</template>
<script>
import {Button,Form,FormItem,Input} from 'element-ui'
import Vue from 'vue';
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
let param = new URLSearchParams();
param.append("username", "admin");
param.append("password", "admin");
export default {
    data(){
        return{
            username:'',
            password:'',
            showTip:false,
        }
    },
    methods:{
        submit(){
            this.$axios({
                method: 'post',
                url:'api/user/login',
                data:{
                    username:this.username,
                    password:this.password
                }
            }).then((res)=>{
                if(res.data.message=='success'){
                    this.$router.push('welcome')
                }else{
                    // alert('登录失败')
                    this.showTip = true
                }               
            })
        }
    }
}
</script>
<style lang='scss' scoped>
    .wrapper{
        height: 100%;
        width: 100%;
        background: url(./timg.jpg) center center no-repeat;
        background-size: cover;
        display: flex;
        .login-wrapper{
            width: 350px;
            height: 260px;
            background-color: #fff;
            border-radius: 10px;
            margin: auto;
            padding: 20px ;
            .password{
                margin-bottom: 0;
            }
            h3{
                text-align: center;
                line-height: 40px;
                font-size: 24px;
                font-weight: 500;
                color: #333;
                margin-bottom: 20px;
            }
            .submit-btn{
                display: block;
                width: 100px;
                margin: 0 auto;
            }
            .tip{
                // font-size: 14px;line-height: 40px;
                font-size: 12px;
                margin-bottom: 10px;
                color: #F56C6C;
                height: 20px;
            }
        }
    }
</style>