<template>
    <div class="app-wrapper" @mouseover="flag=true" @mouseout="flag = false">
		<div class="app-title clearfix">
			<span class="app-name">{{item.name}}</span>
			<span class="app-size">{{item.size}}</span>
		</div>
		<div class="app-rate">
			<el-rate v-model="item.rate" disabled  text-color="#ff9900" ></el-rate>
		</div>
		<div class="app-text">{{item.subscribe}}</div>
		<div class="app-img"><img :src="item.imgUrl" alt=""></div>
		<div class="app-other">
			<span class="download-num">下载{{item.downloadTimes}}次</span>
			<div class="app-operate" v-show="flag" >
				<i class="app-star el-icon-star-off" @click="addStar"></i>
				<i class="el-icon-download" @click="download"></i>	
			</div>			
		</div>
    </div>
</template>
<script>
export default {
	props: ['item'],
	data(){
		return {
			flag:false,
			starAdded: '',
		}
	},
	methods: {
		addStar() {
			// console.log('stared')
		},
		download() {
			this.$alert('暂不支持下载！', {confirmButtonText: '确定'});
		}
	}
};
</script>
<style lang='scss' >
.app-wrapper {
	display: inline-block;
	width: 184px;
	box-shadow: 0 0 4px #ccc;
	margin: 10px;
	font-size: 12px;
	padding: 10px 0 4px;
	transform: scale(0.82);
	margin:-10px;
	&:hover {
		box-shadow: 0 0 5px #409eff;
	}
	.app-title {
		margin: 0 10px 6px;
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
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		padding: 0 8px;
		transform: scale(0.84);
		// // transform-origin: 0 0;
		// &::after {
		// 	content: '...';
		// 	font-weight: bold;
		// 	position: absolute;
		// 	width: 10px;
		// 	background-color: #fff;
		// 	bottom: 0px;
		// 	right: 5px;
			// transform: scale(1.2);
		// }
	}
	.app-img {
		margin: 0 10px;
		height: 80px;
		text-align: center;
		> img {
			display: inline-block;
			height: 100%;
		}
	}
	.app-other {
		margin: 5px 10px 0;
		line-height: 2em;
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