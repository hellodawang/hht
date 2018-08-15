<template>
    <div class="app-wrapper">
		<div class="app-title clearfix">
			<span class="app-name">星际争霸</span>
			<span class="app-size">32M</span>
		</div>
		<div class="app-rate">
			<el-rate v-model="value5" disabled  text-color="#ff9900" ></el-rate>
		</div>
		<div class="app-text">一款在火星进行基地建设，与外星人进行战斗的游戏与外星人进行战斗的游戏..与外星人进行战斗的游戏..与外星人进行战斗的游戏..</div>
		<div class="app-img"><img src="../../assets/logo.png" alt=""></div>
		<div class="app-other">
			<span class="download-num">下载100002次</span>
			<div class="app-operate">
				<i class="el-icon-star-on"></i>
				<i class="el-icon-download"></i>	
			</div>
			
		</div>
    </div>
</template>
<script>
export default {
	data() {
		return {
			value5: 3.7,
		};
	},
};
</script>
<style lang='scss' >
.app-wrapper {
	display: inline-block;
	width: 184px;
	height: 188px;
	box-shadow: 0 0 4px #ccc;
	margin: 10px;
	font-size: 12px;
	padding: 10px 0;
	.app-title {
		margin: 0 10px 6px;
		// margin-bottom: 6px;
		.app-name {
			float: left;
			color: #666;
			font-weight: bold;
		}
		.app-size {
			float: right;
		}
	}
	.app-rate {
		margin: 0 10px;
	}
	.app-text {
		color: #666;
		font-size: 12px;
		position: relative;
		line-height: 1.8em;
		height: 3.6em;
		overflow: hidden;
		transform: scale(0.84);
		// transform-origin: 0 0;
		&::after {
			content: '...';
			font-weight: bold;
			position: absolute;
			width: 10px;
			background-color: #fff;
			bottom: 0px;
			right: 5px;
			transform: scale(1.2);
		}
	}
	.app-img {
		margin: 0 10px;
		height: 80px;
		> img {
			width: 100%;
		}
	}
	.app-other {
		margin: 0 10px;
		.download-num {
			float: left;
		}
		.app-operate {
			float: right;
		}
	}
}
</style>