<template>
    <div class="hht_wrapper">
        <div class="hht_aside" v-if='showSideBar'>
            <div class="hht_logo">
                <img src="../../assets/logo.png" alt="">
            </div>
            <div class="hht_user">
                <img src="../../assets/图层 36@3x.png" alt="" class="avator">
                <div class="hht_user_text">
                    <div class="hht_user_name">杨文兴</div>
                    <div class="hht_user_role">超级管理员</div>
                </div>
            </div>
            <hht-tree :list='data'></hht-tree>
        </div>
        <div class="hht_content">
            <hht-header :showSideBar='showSideBar' ></hht-header>
            <div class="hht-content_content">
                <router-view to='/index/index'></router-view>
            </div>
        </div>
		<div class="modal-setting-wrapper" v-if='setting'>
			<div class="modal-setting">
				<div class="modal-header clearfix">
					<h3>个人设置</h3>
					<i class="el-icon-close "></i>
				</div>
				<div class="modal-body">
					<el-form  class="model-form"  label-width="200px"   :model="user" :rules="rules1"  >
                        <el-form-item  label="账号" > 
                            <el-input  v-model="user.id" clearable size="mini" disabled></el-input>
                        </el-form-item>
                        <el-form-item  label="昵称" prop="nickName"> 
                            <el-input placeholder="昵称规范" v-model="user.nickName" clearable size="mini"></el-input>
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
                        <el-form-item label="常用邮箱"   prop="email">
                            <el-input  v-model="user.email" size="mini" clearable  required @keyup.enter.native="submit"></el-input>  
                        </el-form-item>
                        <el-form-item label="手机"   prop="tel">
                            <el-input   v-model="user.tel" size="mini" clearable  required @keyup.enter.native="submit"></el-input>  
                        </el-form-item>
                        <el-form-item label="头像">
							<el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false">
								<img v-if="user.avator" :src="user.avator" class="avatar">
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
import hhtTree from '../../components/tree/tree';
import hhtHeader from '../../components/header/header';
export default {
	components: {
		hhtTree,
		hhtHeader,
	},
	data() {
		return {
			data: [
				{ id: 1, label: '管理驾驶舱', icon: 'driver' },
				{ id: 9, label: '系统设置', icon: 'setting', children: [{ id: 11, label: '用户管理', icon: 'user' }] },
				{ id: 5, label: '应用商城', icon: 'mall' },
				{ id: 3, label: '诊断维护', icon: 'maintenance' },
				{ id: 2, label: '统计报表', icon: 'statistics' },
			],
			showSideBar: true,
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
		};
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
			left: 0;
			right: 0;
			bottom: 0;
			top: 52px;
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
		}
	}
}
</style>
