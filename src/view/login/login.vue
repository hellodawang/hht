<template>
    <div class="wrapper">
        <div class="title">
            <img src="../../assets/logo.png" alt="">
            <span>鸿合云管理平台</span>
        </div>
        <div class="login-box">
            <el-form  class="login-wrapper" :model="ruleForm" :rules="rules" ref="ruleForm" >
                <el-form-item>
                    <h3>登录</h3>
                </el-form-item>
                <el-form-item   prop="username"> 
                    <el-input placeholder="请输入用户名" v-model="ruleForm.username" clearable @keyup.enter.native="submit"><i slot="prefix" class="icon iconfont icon-user"></i></el-input>
                </el-form-item>
                <el-form-item  class="password"  prop="password">
                    <el-input placeholder="请输入密码"  v-model="ruleForm.password" clearable type='password' required @keyup.enter.native="submit"><i slot="prefix" class="icon iconfont icon-password"></i></el-input>  
                </el-form-item>
                <el-form-item  class="verification"  prop="captcha">
                    <el-input placeholder="验证码"  v-model="ruleForm.captcha" clearable  required @keyup.enter.native="submit"><i slot="prefix" class="icon iconfont icon-verification"></i></el-input>  
					<div class="verification-box"  ><span v-html="captchaUrl" style="display: inline-block; transform-origin: 0 0; transform: scale(0.5)"></span></div>
				</el-form-item> 
                <el-form-item class="submit-btn" >
                   <el-button type="primary"  @click="submit" >登录</el-button> 
                </el-form-item> 
                <el-form-item  >
                   <el-checkbox v-model="checked">记住账号</el-checkbox> 
                   <a href="" class="foget-password">忘记密码</a>
                </el-form-item>                         
            </el-form>
        </div>
        <div class="mask" v-if='showModel'>
            <div class="model">
                <div class="model-header">
                    <h3>用户信息完善</h3>
                    <!-- <i class="el-icon-close"></i> -->
                </div>
                <div class="model-body">
                    <el-form  class="model-form"  label-width="200px"   :model="ruleForm1" :rules="rules1"  >
                        <el-form-item  label="账号" > 
                            <el-input  v-model="ruleForm1.id" clearable size="mini" disabled></el-input>
                        </el-form-item>
                        <el-form-item  label="昵称" prop="nickName"> 
                            <el-input placeholder="昵称规范" v-model="ruleForm1.nickName" clearable size="mini"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" class="password"  prop="password">
                            <el-input placeholder="密码规范"  v-model="ruleForm1.password" size="mini" clearable type='password' required @keyup.enter.native="submit"></el-input>  
                        </el-form-item>
                        <el-form-item label="确认密码" class="password"  prop="repassword">
                            <el-input placeholder=" 请再次输入密码"  v-model="ruleForm1.repassword" clearable size="mini" type='password' required @keyup.enter.native="submit"></el-input>  
                        </el-form-item>
                        <el-form-item label="常用邮箱"   prop="email">
                            <el-input  v-model="ruleForm1.email" size="mini" clearable  required @keyup.enter.native="submit"></el-input>  
                        </el-form-item>
                        <el-form-item label="手机"   prop="tel">
                            <el-input   v-model="ruleForm1.tel" size="mini" clearable  required @keyup.enter.native="submit"></el-input>  
                        </el-form-item>
                        <el-form-item label="性别"   >
                            <el-radio v-model="ruleForm1.gender" label="1">男</el-radio>
  							<el-radio v-model="ruleForm1.gender" label="2">女</el-radio> 
                        </el-form-item>
                        <el-form-item label="头像">
							<el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false">
								<img v-if="imageUrl" :src="imageUrl" class="avatar">
								<i v-else class="el-icon-plus avatar-uploader-icon"></i>
							</el-upload>
                        </el-form-item> 
                        <el-form-item  >
                            <el-button type="primary" class="submit-btn" @click="confirm" >确定</el-button>  
                        </el-form-item>                       
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
	data() {
		return {
			ruleForm: {
				username: '',
				password: '',
				captcha: '',
			},
			rules: {
				username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
				password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
				captcha: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
			},
			ruleForm1: {
				id: '',
				password: '',
				nickName: '',
				tel: '',
				email: '',
				repassword: '',
				gender: '1',
			},
			rules1: {
				nickName: [{ required: true, message: '昵称', trigger: 'blur' }],
				password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
				repassword: [{ required: true, message: '请再次输入密码', trigger: 'blur' }],
				tel: [{ required: true, message: '请输入电话号码', trigger: 'blur' }],
				email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }],
			},
			checked: false,
			showModel: false,
			imageUrl: '',
			captchaUrl: '',
		};
	},
	mounted() {
		let that = this;
		this.$axios
			.get('aux/captcha')
			.then(function(response) {
				that.captchaUrl = response.data;
			})
			.catch(function(error) {
				console.log(error);
			});
	},
	methods: {
		submit() {
			this.$axios
				.post('/user/login', {
					username: this.ruleForm.username,
					password: this.ruleForm.password,
					captcha: this.ruleForm.captcha,
				})
				.then(response => {
					if (response.data.code == 0) {
						this.$axios.get('/user/info').then(response => {
							this.$store.commit('setUserDate', response.data);
							// if(response.data.role =='admin'){
							this.$router.push('/gui/index');
							// }
						});
					}
				})
				.catch(function(error) {
					console.log(error);
				});
		},
		confirm() {
			this.showModel = false;
		},
	},
};
</script>
<style lang='scss' scoped>
.wrapper {
	position: relative;
	height: 100%;
	width: 100%;
	background: url('../../assets/login-bg.png') no-repeat center center;
	background-size: cover;
	.title {
		position: absolute;
		left: 110px;
		top: 66px;
		width: 500px;
		z-index: 99;
		> img {
			width: 103px;
			height: 42px;
			margin-right: 4px;
			display: inline-block;
			vertical-align: middle;
		}
		> span {
			color: #fff;
			font-size: 30px;
			vertical-align: middle;
		}
	}
	.login-box {
		position: absolute;
		top: 236px;
		right: 275px;
		width: 398px;
		background-color: #fff;
		padding: 10px 50px;
		border-radius: 5px;
		h3 {
			font-size: 20px;
			font-weight: normal;
			text-align: center;
		}
		.verification {
			.el-input {
				width: 220px;
			}
			.verification-box {
				width: 70px;
				height: 38px;
				display: inline-block;
				background-color: #fff;
				vertical-align: top;
				border: 1px solid #cfcfcf;
				border-radius: 4px;
			}
		}
		.foget-password {
			text-decoration: none;
			display: inline-block;
			color: #5d8bc5;
			text-align: right;
			margin-left: 150px;
		}
		.submit-btn {
			text-align: center;
			.el-button {
				width: 100%;
			}
		}
	}
	.mask {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.7);
		z-index: 999;
		text-align: center;
		&::after {
			content: '';
			display: inline-block;
			height: 100%;
			width: 0;
			vertical-align: middle;
		}
		.model {
			width: 946px;
			height: 570px;
			background-color: #fff;
			display: inline-block;
			vertical-align: middle;
			border-radius: 4px;
			.model-header {
				background-color: #5d8bc5;
				height: 50px;
				position: relative;
				h3 {
					font-size: 16px;
					font-weight: normal;
					line-height: 50px;
					text-indent: 1em;
					color: #fff;
					text-align: left;
				}
				.el-icon-close {
					position: absolute;
					width: 20px;
					height: 20px;
					right: 10px;
					top: 15px;
					color: #fff;
				}
			}
			.model-body {
				.model-form {
					padding-top: 30px;
					width: 900px;
					margin: 0 auto;
					.el-form-item__label {
						line-height: 28px;
					}
					.el-form-item__content {
						line-height: 28px;
					}
				}
			}
		}
	}
}
</style>
<style lang='scss'>
.model-form {
	.el-form-item {
		margin-bottom: 10px;
	}
	.el-form-item__label {
		line-height: 28px;
	}
	.el-form-item__content {
		line-height: 28px;
		text-align: left;
	}
	.el-input {
		width: 450px;
	}
	.el-form-item__error {
		position: static;
		display: inline-block;
		margin-left: 10px;
	}
	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}
	.avatar-uploader .el-upload:hover {
		border-color: #409eff;
	}
	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 78px;
		height: 78px;
		line-height: 78px;
		text-align: center;
	}
	.avatar {
		width: 78px;
		height: 78px;
		display: block;
	}
}
</style>
