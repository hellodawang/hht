<template>
    <div class="hht_content_header">
        <i class="iconfont icon-menu" @click="showSideBar=!showSideBar"></i>
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
                <img src="../../assets/图层 36@3x.png" alt="">
            </div>
            <div class="loginOut">退出</div>
        </div>
    </div>
</template>
<script>
export default {
	props: ['showSideBar'],
};
</script>
<style lang='scss' scoped>
.hht_content_header {
	height: 52px;
	background-color: #eff3f4;
	.icon-menu {
		float: left;
		margin-left: 23px;
		width: 15px;
		height: 15rem;
		margin-top: 18px;
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
			img {
				width: 100%;
			}
		}
	}
}
</style>