<template>
    <div class="wrapper">
        <div class="title">
			<div class="logo">
				<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						width="125px" height="65px" viewBox="0 0 125 65" enable-background="new 0 0 125 65" xml:space="preserve">
					<g>
						<path fill="#fff" d="M50.262,30.687l-1.425,2.008c0.888-1.256,1.421-2.008,1.421-2.008h-2.789c0,0-4.158,0-5.933,1.725
							c-0.699,0.679-7.757,10.849-7.757,10.849h-2.231l8.924-12.574h-2.585c0,0-4.969,0.051-7.048,2.688
							c-2.079,2.637-6.896,9.886-6.896,9.886l-2.18,0.053l8.822-12.626h-2.941c0,0-4.63,0.003-6.591,2.789L1.481,61.262h4.056
							c0,0,3.905-0.709,5.223-2.384c1.318-1.673,1.318-1.673,1.318-1.673l5.983-8.671h2.181l-8.975,12.728h3.499
							c0,0,3.75-0.575,5.223-1.774c1.85-1.51,7.859-10.901,7.859-10.901l2.231-0.052l-9.025,12.728h3.346c0,0,4.284,0,5.679-2.028
							c0.532-0.774,9.648-13.663,15.443-21.853h8.29L37.029,61.262c6.655,0.405,9.127-2.23,9.127-2.23l15.414-21.65
							c0,0,4.057,0.017,6.844-0.103c5.933-0.254,8.012-6.591,8.012-6.591H50.262z"/>
						<g>
							<path fill="#fFF" d="M53.519,23.334h4.228c-2.996-5.896-9.115-9.938-16.182-9.938c-7.852,0-14.538,4.988-17.065,11.968h3.945
								c2.319-4.918,7.321-8.323,13.12-8.323C46.527,17.041,50.904,19.534,53.519,23.334z"/>
							<path fill="#fFF" d="M79.597,6.393c11.995,0,21.719,9.724,21.719,21.718c0,0.3-0.011,0.598-0.022,0.896h4.709
								c0.011-0.297,0.018-0.596,0.018-0.896c0-14.593-11.83-26.422-26.423-26.422c-12.962,0-23.742,9.333-25.991,21.646h4.807
								C60.589,13.639,69.245,6.393,79.597,6.393z"/>
							<path fill="#fFF" d="M112.729,24.93h-5.124v4.108h5.124c3.784,0.505,6.705,3.744,6.705,7.666c0,2.534-1.218,4.783-3.102,6.195
								l2.585,3.163c2.797-2.162,4.602-5.548,4.602-9.358C123.52,30.523,118.774,25.453,112.729,24.93z"/>
						</g>
						<text transform="matrix(1 0 0 1 62.792 59.7783)" fill="#fff" font-family="'STXingkai'" font-size="18.0941">鸿合云</text>
					</g>
				</svg>
			</div>
			<div class="language">
				<el-dropdown>
					<span class="el-dropdown-link">
						中文<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>英文</el-dropdown-item>                             
						<el-dropdown-item>中文</el-dropdown-item>                             
					</el-dropdown-menu>
				</el-dropdown>
			</div>
        </div>
		<div  class="main">
			<div class="text">
				<p class="text-title">云 平 台 管 理 系 统</p>
				<div class="subtext">
					<ul>
						<li>让设备接入有序</li>
						<li>让数据实时可见</li>
						<li>让距离不再遥远</li>
						<li>让业务更加简单</li>
					</ul>
				</div>
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
						<div class="verification-box" @click="refreshVerification"><img :src="captchaUrl" ref="verification"/></div>
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
			<!-- <p class="ing">建设中......敬请期待</p>	 -->
		</div>
		<div class="footer">
			<p>© 2018-2028 Hongheyun.com 版权所有</p>
			<p class="sep">|</p>
			<p>建议分辨率：1920*1080</p>
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
			captchaUrl: '',
			CookieID:null
		};
	},
	mounted() {
		let that = this;
		this.CookieID = new Date().getTime()
		this.$axios
			.get('/login/login/validateCode',{headers:{'CookieID':that.CookieID},responseType:'blob'})
			.then(function(response) {
				let reader = new FileReader();
				reader.onload = function (e) {
					that.captchaUrl = e.target.result
				}
				reader.readAsDataURL(response.data)
			})
			.catch(function(error) {
				console.log(error);
			});
	},
	methods: {
		submit() {
			// let that = this
			this.$axios({
				method:'post',
				url:'/login/login/loginCheck',
				headers:{'CookieID':this.CookieID},
				data:{
					loginName: this.ruleForm.username,
					passWord: this.ruleForm.password,
					code: this.ruleForm.captcha,	
				}
			}).then(response => {
				switch(response.data.code){
					// 登陆成功
					case '0000':
						// this.$router.push('/gui/index');
						sessionStorage.token =  response.data.data.tokenType +" "+ response.data.data.accessToken
						// 请求用户信息
						return this.$axios.post('/auth/auth/findUserRolePermissions')
					// 登陆名为空或者不符合规范
					default:
						return Promise.reject(response.data.code)
				}
			}).then(res => {
				if (!res) return Promise.reject('0000')
				if (res.data.code != '0000') return Promise.reject(res.data)
				res.data.data.menuList.sort((a, b) => a.sortCode < b.sortCode ? -1 : 1)
				console.log('sort menu: ', res.data.data.menuList)
				sessionStorage.setItem('userData',JSON.stringify(res.data.data))
				if(!res.data.data.role.match('Company Admin')){
					this.$router.push('/gui/index');
					return Promise.reject('0000')
				}
				return this.$axios.post('/terminalweb/terminalReport/findOnlineStatisticalByDept')
			}).then( res =>{
				console.log('get user data: ', res)
				if (res.data.data.terminalTotal > 20) {
					return this.$router.push('/gui/driverCompany')
				}
				if(res.data.data.terminalTotal < 20 ){
					let userData = JSON.parse(sessionStorage.getItem('userData'))
					let menu = userData.menuList.filter((v) => v.url != '/gui/driverCompany')
					menu.forEach((v) => {
						if (v.url == '/gui/deviceInfo') v.url = '/gui/managerSimple'
					})
					if (menu[0].url = '/gui/maintenance') {
						let first = menu.shift()
						menu.splice(1, 0, first)
					}
					console.log('menu: ', menu)
					// res.data.data.menuList[0].url = '/gui/managerSimple'
					userData.menuList = menu//.sort((a, b) => a.sortCode < b.sortCode ? 1 : -1)
					sessionStorage.setItem('userData',JSON.stringify(userData))								
					this.$router.push('/gui/index');
				}
			}).catch((error) => {
				if (typeof error != 'string') console.log(error)
				switch(error) {
				case "0000":
					break
				case "0001":
					this.$confirm('登录名称为空或者不符合规范', '提示', {
						confirmButtonText: '确定',
						type: 'warning'
					})
					break
				case "0002":
					this.$confirm('登录密码为空或者不符合规范', '提示', {
						confirmButtonText: '确定',
						type: 'warning'
					})
					break
				case "0003":
					this.$confirm('登录验证码为空或者不符合规范', '提示', {
						confirmButtonText: '确定',
						type: 'warning'
					})
					break
				case "0004":
					this.$confirm('验证码错误', '提示', {
						confirmButtonText: '确定',
						type: 'warning'
					})
					break
				case "0005":
					this.$confirm('客户端身份为空或者不符合规范', '提示', {
						confirmButtonText: '确定',
						type: 'warning'
					})
					break
				case "0006":
					this.$confirm('账号密码错误，登录失败', '提示', {
						confirmButtonText: '确定',
						type: 'warning'
					})
					break
				default:
					this.$confirm('系统繁忙，请稍后再试', '提示', {
						confirmButtonText: '确定',
						type: 'warning'
					})
					break
				}
			});
		},
		confirm() {
			this.showModel = false;
		},
		refreshVerification(){
			let that = this
			this.$axios
			.get('/login/login/validateCode',{headers:{'CookieID':this.CookieID},responseType:'blob'})
			.then(function(response) {
				let reader = new FileReader();
				reader.onload = function (e) {
					that.captchaUrl = e.target.result
				}
				reader.readAsDataURL(response.data)
			})
			.catch(function(error) {
				console.log(error);
			});
		}
	},
};
</script>
<style lang='scss' scoped>
.wrapper {
	position: relative;
	height: 100%;
	width: 100%;
	min-width: 1200px;
	min-height: 580px;
	background: url('../../assets/login-bg.jpg') no-repeat center center;
	background-size: cover;
	.title {
		height: 75px;
		padding: 10px 0;
		.logo{
			display: inline-block;
			width: 125px;
			margin-left: 5%;
			padding-top: 24px;
		}
		.language{
			float: right;
			width: 50px;
			height: 30px;
			margin-top: 24px;
			margin-right: 5%;
		}
	}
	.main{
		
		width: 1400px;
		position: absolute;	
		left: 50%;
		margin-left: -700px;
		right: 0;
		bottom: 20px;
		top: 42px;
		@media screen and (max-width: 1400px){
			width: 1200px;
			margin-left: -600px;
		}
		&::after{
			content: "";
			display: inline-block;
			height: 100%;
			width: 0;
			vertical-align: middle;
		}
		.text{
			display: inline-block;
			vertical-align: middle;
			width: 980px;
			@media screen and (max-width: 1400px){
				width: 780px;
			}
			color: #fff;
			.text-title{
				font-size: 50px;
				line-height: 1.8em;
				margin-bottom: 10px;
			}
			.subtext{
				font-size: 18px;
				line-height: 2em;;
				padding-left: 20px;
				// text-indent: 2em;
				// li{
				// 	list-style:
				// }
			}
		}
		.login-box {
			display: inline-block;
			vertical-align:middle;
			width: 380px;
			background-color: #fff;
			padding: 10px 30px;
			border-radius: 5px;
			text-align: left;
			h3 {
				font-size: 20px;
				font-weight: normal;
				text-align: center;
			}
			.verification {
				.el-input {
					width: 180px;
				}
				.verification-box {
					width: 110px;
					height: 38px;
					display: inline-block;
					background-color: #fff;
					vertical-align: top;
					border: 1px solid #cfcfcf;
					border-radius: 4px;
					img{
						width: 100%;
						border-radius: 4px;
						line-height: 38px;
					}
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
				margin-top: 30px;
				text-align: center;
				.el-button {
					width: 100%;
				}
			}
		}
		.ing{
			margin-top: 100px;
			text-align: center;
			color: #c0c0c0;
			font-size: 26px;
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
	.footer{
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 40px;
		padding: 10px 0;
		background-color: #33383B;
		text-align: center;
		color: #808080;
		line-height: 20px;
		p{
			display:inline-block;
			&.sep{
				margin: 0 20px;
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
.wrapper{
	.language{
		.el-dropdown{
			color:#fff
		}	
	}	
}


</style>
