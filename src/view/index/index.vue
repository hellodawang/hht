<template>
    <div class="hht_wrapper">
		<!-- <transition name="fade" > -->
			<div class="hht_aside" v-if='showSideBar'>
				<div class="hht_logo" >
					<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						width="125px" height="44px" viewBox="0 0 125 65" enable-background="new 0 0 125 65" xml:space="preserve">
					<g>
						<path fill="#4190FF" d="M50.262,30.687l-1.425,2.008c0.888-1.256,1.421-2.008,1.421-2.008h-2.789c0,0-4.158,0-5.933,1.725
							c-0.699,0.679-7.757,10.849-7.757,10.849h-2.231l8.924-12.574h-2.585c0,0-4.969,0.051-7.048,2.688
							c-2.079,2.637-6.896,9.886-6.896,9.886l-2.18,0.053l8.822-12.626h-2.941c0,0-4.63,0.003-6.591,2.789L1.481,61.262h4.056
							c0,0,3.905-0.709,5.223-2.384c1.318-1.673,1.318-1.673,1.318-1.673l5.983-8.671h2.181l-8.975,12.728h3.499
							c0,0,3.75-0.575,5.223-1.774c1.85-1.51,7.859-10.901,7.859-10.901l2.231-0.052l-9.025,12.728h3.346c0,0,4.284,0,5.679-2.028
							c0.532-0.774,9.648-13.663,15.443-21.853h8.29L37.029,61.262c6.655,0.405,9.127-2.23,9.127-2.23l15.414-21.65
							c0,0,4.057,0.017,6.844-0.103c5.933-0.254,8.012-6.591,8.012-6.591H50.262z"/>
						<g>
							<path fill="#4190FF" d="M53.519,23.334h4.228c-2.996-5.896-9.115-9.938-16.182-9.938c-7.852,0-14.538,4.988-17.065,11.968h3.945
								c2.319-4.918,7.321-8.323,13.12-8.323C46.527,17.041,50.904,19.534,53.519,23.334z"/>
							<path fill="#4190FF" d="M79.597,6.393c11.995,0,21.719,9.724,21.719,21.718c0,0.3-0.011,0.598-0.022,0.896h4.709
								c0.011-0.297,0.018-0.596,0.018-0.896c0-14.593-11.83-26.422-26.423-26.422c-12.962,0-23.742,9.333-25.991,21.646h4.807
								C60.589,13.639,69.245,6.393,79.597,6.393z"/>
							<path fill="#4190FF" d="M112.729,24.93h-5.124v4.108h5.124c3.784,0.505,6.705,3.744,6.705,7.666c0,2.534-1.218,4.783-3.102,6.195
								l2.585,3.163c2.797-2.162,4.602-5.548,4.602-9.358C123.52,30.523,118.774,25.453,112.729,24.93z"/>
						</g>
						<text transform="matrix(1 0 0 1 62.792 59.7783)" fill="#C7DEFF" font-family="'STXingkai'" font-size="18.0941">鸿合云</text>
					</g>
					</svg>
				</div>
				<div class="hht_user">
					<el-popover
						placement="right"
						width="100"
						v-model="visible2">
						<div class="user-operate">
							<div class="personal-settings" @click="setting = !setting">个人设置</div>
							<div class="login-out"><el-button @click="logout" type="text">退出登录</el-button></div>
						</div>
						<div slot="reference" class="avator" :class="{male:userData.sex =='男',famale:userData.sex == '女'}"><img  :src="userData.avatar" alt=""  ></div>						
					</el-popover>	
					<div class="hht_user_text">
						<div class="hht_user_name">{{userData.userName}}</div>
						<div class="hht_user_role">{{userData.role}}</div>
					</div>
				</div>
				<hht-tree :list='menu'></hht-tree>
			</div>	
        <div class="hht_content">
            <div class="hht_content_header">
				<el-row>
					<el-col :span="8"><div style="height:52px;width:20px"><i class="iconfont icon-menu" @click="toggle" v-if=" userData.role != 'user;'"></i></div></el-col>
					<el-col :span="8"><h3 class="hht-title">云平台管理系统</h3></el-col>
					<el-col :span="8">
						<div class="menubar">
							<i class="iconfont icon-message">
							</i>
							<div class="language">
								<el-dropdown>
									<span class="el-dropdown-link">
										中文<i class="el-icon-arrow-down el-icon--right"></i>
									</span>
									<el-dropdown-menu slot="dropdown">
										<el-dropdown-item>中文</el-dropdown-item>                             
										<el-dropdown-item>英文</el-dropdown-item>                             
									</el-dropdown-menu>
								</el-dropdown>
							</div>
							<div class="avator" :class="{male:userData.sex =='男',famale:userData.sex == '女'}">
								<img :src="$store.state.userData.avatar" alt="" >
							</div>
							<div class="loginOut" @click="logout">退出</div>
						</div>		
					</el-col>
				</el-row>
			</div>
            <div class="hht-content_content">
                <router-view to='' ></router-view>
            </div>
        </div>
		<div class="modal-setting-wrapper" v-if='setting'>
			<div class="modal-setting">
				<div class="modal-header clearfix">
					<h3>个人设置</h3>
					<i class="el-icon-close" @click="setting = !setting" style="cursor: pointer"></i>
				</div>
				<div class="modal-body" style="width:700px">
					<el-form  class="model-form"  label-width="200px"   :model="user"  >
                        <el-form-item  label="账号" > 
                            <el-input  v-model="user.id" clearable size="mini" disabled></el-input>
                        </el-form-item>
                        <el-form-item  label="昵称" prop="nickName"> 
                            <el-input placeholder="昵称规范" v-model="user.nickName" clearable size="mini"></el-input>
                        </el-form-item>
						<el-form-item label="常用邮箱"   prop="email">
                            <el-input  v-model="user.email" size="mini" placeholder="请输入常用邮箱"  clearable  required @keyup.enter.native="submit"></el-input>  
                        </el-form-item>
                        <el-form-item label="手机"   prop="tel">
                            <el-input   v-model="user.tel" size="mini" clearable placeholder=" 请输入电话号码"  required @keyup.enter.native="submit"></el-input>  
                        </el-form-item>
                        <el-form-item label="旧密码" class="password"  prop="password">
                            <el-input placeholder="密码规范"  v-model="user.oldPassword" size="mini" clearable type='password' required @keyup.enter.native="submit"></el-input>  
                        </el-form-item>
                        <el-form-item label="新密码" class="password"  prop="repassword">
                            <el-input placeholder=" 请再次输入密码"  v-model="user.newPassword" clearable size="mini" type='password' required @keyup.enter.native="submit"></el-input>  
                        </el-form-item>
						<el-form-item label="新密码" class="password"  prop="repassword">
                            <el-input placeholder=" 请再次输入密码"  v-model="user.reNewPassword" clearable size="mini" type='password' required @keyup.enter.native="submit"></el-input>  
                        </el-form-item>                    
                        <el-form-item label="头像" style="text-align:left">
							<img src="../../assets/图层 36@3x.png" alt="" class="avatar">
							<!-- <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false">
								<img v-if="user.avator" :src="user.avator" class="avatar">
								<i v-else class="el-icon-plus avatar-uploader-icon"></i>
							</el-upload> -->
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
import hhtTree from '../../components/tree/tree';
export default {
	components: {
		hhtTree,
	},
	data() {
		return {
			menu: [],
			user: {
				id: '',
				nickName: '',
				email: '',
				tel: '',
				oldPassword: '',
				newPassword: '',
				reNewPassword: '',
				avator: '',
				role:''
			},
			userData:{},
			setting: false,
			visible2: false,
		};
	},
	computed:{
		showSideBar(){		 
			if(sessionStorage.showSideBar){
				let flag = JSON.parse(sessionStorage.showSideBar)
				if(this.$store.state.showSideBar !== flag && flag){
					this.$store.commit('updateshowSideBar',flag)
				}	
			}
			
			return this.$store.state.showSideBar
		}
	},
	methods: {
		toggle() {
			this.$store.commit('updateshowSideBar',!this.showSideBar);
		},
		confirm() {},
		logout() {
			this.$axios
				.post('/login/login/logOut', {})
				.then(() => {
					this.$router.push('/gui/login');
					sessionStorage.clear()
				})
				.catch((e) => {
					this.$router.push('/gui/login');
					sessionStorage.clear()
					console.log('logout error: ', e)
				})
		}
	},
	created() {
		this.userData = JSON.parse(sessionStorage.getItem('userData'))
		this.menu = this.userData.menuList;
		if(this.menu.length > 0){
			if(this.$route.path == '/gui/index'){
				this.$router.replace(this.menu[0].url);	
			}
		}else{
			this.$router.replace('/gui/endUser');	
		}	
	},
};
</script>
<style lang='scss' scoped>
.hht_wrapper {
	height: 100%;
	overflow-y: scroll;
	// overflow-x: hidden;
	display: flex;
	.hht_aside {
		height: 100%;
		width: 197px;
		@media screen and (max-width: 1500px){
			width: 160px;
		}
		background-color: #292d30;
		.hht_logo {
			padding: 4px 0;
			text-align: center
		}
		.hht_user {
			height: 117px;
			padding-top: 29px;
			padding-left: 21px;
			position: relative;
			.avator {
				width: 57px;
				height: 57px;
				border-radius: 50%;
				display: inline-block;
				vertical-align: top;
				&.male{
					background: url('../../assets/avator1.png') no-repeat center center;
					background-size: contain;	
				}
				&.female{
					background: url('../../assets/avator2.png') no-repeat center center;
					background-size: contain;	
				}
				>img{
					width: 100%;
					border-radius: 50%;  
				}
			}
			.hht_user_text {
				display: inline-block;
				vertical-align: top;
				margin-top: 4px;
				line-height: 1.4em;
				@media screen and (max-width: 1400px){
					width: 70px;
				}
				.hht_user_name {
					color: #fff;
					font-size: 12px;
				}
				.hht_user_role {
					color: #808080;
					font-size: 12px;
					overflow:hidden;
				text-overflow:ellipsis;
				white-space:nowrap;
				}
			}
		}
		.hht_list {
			background-color: transparent;
			vertical-align: middle;
		}
	}
	.hht_content {
		flex: 1;
		height: 100%;
		background-color: #dbdce0;
		position: relative;
		.hht-content_content {
			position: absolute;
			left: 10px;
			right: 0;
			bottom: 10px;
			top: 62px;
		}
	}
	.modal-setting-wrapper {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		background-color: rgba(0, 0, 0, 0.7);
		text-align: center;
		z-index: 10000;
		&::after {
			content: '';
			display: inline-block;
			height: 100%;
			width: 0;
			vertical-align: middle;
		}
		.modal-setting {
			display: inline-block;
			vertical-align: middle;
			width: 946px;
			height: 570px;
			background-color: #fff;
			.modal-header {
				height: 50px;
				background-color: #5d8bc5;
				h3 {
					float: left;
					color: #fff;
					font-weight: normal;
					font-size: 16px;
					text-indent: 1em;
					line-height: 50px;
				}
				.el-icon-close {
					float: right;
					color: #fff;
					line-height: 50px;
					margin-right: 10px;
				}
			}
			.modal-body {
				.el-form-item {
					// margin-bottom: 0;
				}
			}
		}
	}
	.hht_content_header {
		height: 52px;
		background-color: #eff3f4;
		.icon-menu {
			float: left;
			width: 40px;
			height: 52px;
			text-align: center;
			line-height: 52px;
			cursor: pointer;
		}
		.menubar {
			// float: right;
			width: 100%;
			text-align: right;
			padding: 10px 50px;
			font-size: 12px;
			> div {
				display: inline-block;
				vertical-align: middle;
			}
			.icon-message {
				display: inline-block;
				position: relative;
				width: 24px;
				height: 24px;
				margin-left: 20px;
				margin-right: 20px;
				font-size: 24px;
				vertical-align: middle;
				.message-text {
					position: absolute;
					top: -5px;
					left: -5px;
					width: 18px;
					height: 18px;
					border-radius: 50%;
					background-color: #f66;
					text-align: center;
					line-height: 18px;
					color: #fff;
					font-size: 12px;
				}
			}
			.avator {
				width: 32px;
				height: 32px;
				border-radius: 50%;
				margin: 0 20px;
				overflow: hidden;
				background: url('../../assets/avator.png') no-repeat center center;
				background-size: contain;
				&.male{
					background: url('../../assets/avator1.png') no-repeat center center;
					background-size: contain;	
				}
				&.female{
					background: url('../../assets/avator2.png') no-repeat center center;
					background-size: contain;	
				}
				img {
					width: 100%;
				}
			}
		}
		.hht-title{
			font-weight: normal;
			text-align: center;
			line-height: 52px
		}
		.loginOut{
			width: 40px;
			height: 20px;
			line-height: 20px;
			cursor: pointer;
		}
	}
}
.user-operate {
	> div {
		line-height: 1.8em;
		cursor: pointer;
		&:hover {
			color: #409eff;
		}
	}
}
</style>
<style>
.el-popover {
	min-width: 100px !important;
}
</style>

