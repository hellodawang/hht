<template>
    <el-tree :data="list"  node-key="menuId" :expand-on-click-node="true" class="hht_list">
        <span class="custom-tree-node" slot-scope="{ node, data }"  @click="go(data.url)">
			<div class="tree-link">
				<i class='iconfont' :class="'icon-'+data.iconPath"></i>
				<span class='icon-text '>
					{{data.menuName}}
				</span>	
				<span class="iconfont down" v-if='node.childNodes.length>0' :class="{'icon-left':!node.expanded, 'icon-down':node.expanded}"></span>
				<span class="iconfont icon-lock" v-if="data.url=='/gui/maintenance'||data.url=='/gui/statistics'" ></span>
			</div>
        </span>
    </el-tree>
</template>
<script>
export default {
	props: ['list'],
	methods:{
		go(url){
			if(url == '/gui/maintenance' || url == '/gui/statistics'){
				this.$alert('该界面未开放',{confirmButtonText: '确定'})
			}else{
				this.$router.push(url)
			}
		}
	}
};
</script>
<style lang='scss'>
.hht_list {
	background-color: transparent;
	vertical-align: middle;
	font-size: 12px;
	.is-current {
		background-color: #014099;
	}
	.custom-tree-node{
		width: 100%;
		.tree-link{
			width: 100%;
		}
	}
	.el-tree-node {
		color: #dbdce0;
		// width: 100%;
		&:focus > .el-tree-node__content {
			background-color: transparent;
		}
		.el-tree-node__content {
			position: relative;
			height: 37px;
			line-height: 37px;
			.el-tree-node__expand-icon {
				display: none;
			}
		}
		.el-tree-node__content:hover {
			background-color: #014099;
			color: #409eff;
		}
		.custom-tree-node {
			.down {
				position: absolute;
				right: 20px;
			}
			.icon-lock{
				position: absolute;
				right: 20px;
				color: #E6A23C
			}
			.iconfont {
				display: inline-block;
				width: 20px;
				height: 20px;
				margin-left: 20px;
				font-size: 14px;
			}
			.icon-text {
				display: inline-block;
				vertical-align: top;
				margin-left: 8px;
				color: #dbdce0;
			}
		}
	}
	.tree-link {
		color: #fff;
		text-decoration: none;
		display: inline-block;
	}
}
</style>