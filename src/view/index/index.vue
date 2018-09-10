<template>
    <div class="hht_wrapper">
		<!-- <transition name="fade" > -->
			<div class="hht_aside" v-if='$store.state.showSideBar'>
				<div class="hht_logo">
					<img src='../../assets/logo.png' alt="">
				</div>
				<div class="hht_user">
					<el-popover
						placement="right"
						width="100"
						v-model="visible2">
						<div class="user-operate">
							<div class="personal-settings" @click="setting = !setting">个人设置</div>
							<div class="login-out">退出登录</div>
						</div>
						<img slot="reference" :src="$store.state.userData.avatar" alt="" class="avator" >
					</el-popover>	
					<div class="hht_user_text">
						<div class="hht_user_name">{{$store.state.userData.alias}}</div>
						<div class="hht_user_role">{{$store.state.userData.role}}</div>
					</div>
				</div>
				<hht-tree :list='data1'></hht-tree>
			</div>	
		<!-- </transition> -->
        <div class="hht_content">
            <div class="hht_content_header">
				<i class="iconfont icon-menu" @click="toggle"></i>
				<div class="menubar">
					<i class="iconfont icon-message"><span class="message-text">3</span></i>
					<div class="language">
						<el-dropdown>
							<span class="el-dropdown-link">
								中文<i class="el-icon-arrow-down el-icon--right"></i>
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item>英文</el-dropdown-item>                             
							</el-dropdown-menu>
						</el-dropdown>
					</div>
					<div class="avator">
						<img :src="$store.state.userData.avatar" alt="">
					</div>
					<div class="loginOut">退出</div>
				</div>
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
			data1: [
				// { id: 1, label: '管理驾驶舱', icon: 'driver' },
				// { id: 9, label: '系统设置', icon: 'setting', children: [{ id: 11, label: '用户管理', icon: 'user' }] },
				// { id: 5, label: '应用商城', icon: 'mall' },
				// { id: 3, label: '诊断维护', icon: 'maintenance' },
				// { id: 2, label: '统计报表', icon: 'statistics' },
			],
			user: {
				id: '',
				nickName: '',
				email: '',
				tel: '',
				oldPassword: '',
				newPassword: '',
				reNewPassword: '',
				avator: '',
			},
			setting: false,
			visible2: false,
		};
	},
	methods: {
		toggle() {
			this.$store.commit('toggle');
		},
		confirm() {},
	},
	created() {
		this.data1 = this.$store.state.userData.menu;
		this.$router.push(this.data1[0].url);
	},
};
</script>
<style lang='scss' scoped>
.hht_wrapper {
	height: 100%;
	overflow-y: scroll;
	overflow-x: hidden;
	display: flex;
	.hht_aside {
		height: 100%;
		width: 197px;
		background-color: #292d30;
		.hht_logo {
			height: 75px;
			padding: 24px 0;
			img {
				width: 139px;
				height: 27px;
				display: block;
				margin: 0 auto;
			}
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
			}
			.hht_user_text {
				display: inline-block;
				vertical-align: top;
				margin-top: 8px;
				line-height: 1.4em;
				margin-left: 18px;
				.hht_user_name {
					color: #fff;
					font-size: 12px;
				}
				.hht_user_role {
					color: #808080;
					font-size: 12px;
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
			margin-left: 23px;
			width: 15px;
			height: 15px;
			margin-top: 18px;
			background: url() no-repeat center center;
			background-size: cover;
		}
		.menubar {
			float: right;
			margin: 10px 50px;
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
				img {
					width: 100%;
				}
			}
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

