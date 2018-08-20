<template>
    <div class="app-wrapper">
		<div class="app-title clearfix">
			<span class="app-name">{{item.name}}</span>
			<span class="app-size">{{item.size}}</span>
		</div>
		<div class="app-rate">
			<el-rate v-model="item.rate" disabled  text-color="#ff9900" ></el-rate>
		</div>
		<div class="app-text">{{item.subscribe}}</div>
		<div class="app-img"><img src="../../assets/logo.png" alt=""></div>
		<div class="app-other">
			<span class="download-num">下载{{item.downloadTimes}}次</span>
			<div class="app-operate">
				<i class="app-star el-icon-star-off"  ></i>
				<i class="el-icon-download"></i>	
			</div>			
		</div>
    </div>
</template>
<script>
export default {
	props: ['item'],
};
</script>
<style lang='scss' >
.app-wrapper {
	display: inline-block;
	width: 184px;
	// height: 188px;
	box-shadow: 0 0 4px #ccc;
	margin: 10px;
	font-size: 12px;
	padding: 10px 0;
	&:hover {
		box-shadow: 0 0 5px #409eff;
	}
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
			// float: left;
			display: inline-block;
			width: 55%;
		}
		.app-operate {
			display: inline-block;
			width: 40%;
			text-align: right;
			// float: right;
			> i {
				font-size: 16px;
				display: inline-block;
				vertical-align: baseline;
				cursor: pointer;
			}
			.el-icon-download {
				&:hover {
					color: #409eff;
				}
			}
		}
	}
}
</style>