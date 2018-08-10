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
		margin-left: 0.23rem;
		width: 0.15rem;
		height: 0.15rem;
		margin-top: 0.18rem;
	}
	.menubar {
		float: right;
		margin: 0.1rem 0.5rem;
		font-size: 0.12rem;
		> div {
			display: inline-block;
			vertical-align: middle;
		}
		.icon-message {
			display: inline-block;
			position: relative;
			width: 0.24rem;
			height: 0.24rem;
			margin-left: 0.2rem;
			margin-right: 0.2rem;
			font-size: 24px;
			vertical-align: middle;
			.message-text {
				position: absolute;
				top: -0.05rem;
				left: -0.05rem;
				width: 0.18rem;
				height: 0.18rem;
				border-radius: 50%;
				background-color: #f66;
				text-align: center;
				line-height: 0.18rem;
				color: #fff;
			}
		}
		.avator {
			width: 0.32rem;
			height: 0.32rem;
			border-radius: 50%;
			margin: 0 0.2rem;
			img {
				width: 100%;
			}
		}
	}
}
</style>