<template>
    <div class="wrapper">
        <div class="mask">
            <el-form  label-width="70px" class="login-wrapper" :model="ruleForm" :rules="rules" ref="ruleForm" >
                <el-form-item label="用户名:"  prop="username"> 
                    <el-input placeholder="请输入用户名" v-model="ruleForm.username" clearable @keyup.enter.native="submit"><i slot="prefix" class="icon iconfont icon-user"></i></el-input>
                </el-form-item>
                <el-form-item label="密码：" class="password"  prop="password">
                    <el-input placeholder="请输入密码"  v-model="ruleForm.password" clearable type='password' required @keyup.enter.native="submit"><i slot="prefix" class="icon iconfont icon-password"></i></el-input>  
                </el-form-item>          
                <el-button type="primary" class="submit-btn" @click="submit" >登录</el-button>               
            </el-form>
        </div>        
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
            ruleForm:{
                username:'',
                password:'',
            },
            rules:{
                username:[{ required: true, message: '请输入用户名', trigger: 'blur' },],
                password:[{ required: true, message: '请输入密码', trigger: 'blur' },],
            }
        }   
    },
    methods:{
        submit(){
            if(this.ruleForm.username=='admin'&& this.ruleForm.password=='admin'){
                // 登录成功              
                this.$router.push('index')
            }else{
                // 登录失败
               this.$message.error('请检查用户名和密码');
            }
        }
    }
}
</script>
<style lang='scss' scoped>
    .wrapper{
        height: 100%;
        width: 100%;
        background: url("../../assets/bg.jpg")  center center no-repeat;
        background-size:cover;       
        .mask{
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
        }
        .login-wrapper{
            width: 350px;
            height: 200px;
            background-color: #fff;
            border-radius: 10px;
            margin: auto;
            padding: 20px ;
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
        }
    }
</style>