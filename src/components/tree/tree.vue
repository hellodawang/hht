<template>
    <el-tree :data="list"  node-key="id" :expand-on-click-node="true" class="hht_list">
        <span class="custom-tree-node" slot-scope="{ node, data }" >
			<router-link :to="data.url" class="tree-link">
				<i class='iconfont' :class="'icon-'+data.icon"></i>
					<span class='icon-text '>
						{{node.label}}
					</span>	
					<span class="iconfont down" v-if='node.childNodes.length>0' :class="{'icon-left':!node.expanded, 'icon-down':node.expanded}"></span>
			</router-link>   
        </span>
    </el-tree>
</template>
<script>
export default {
	props: ['list'],
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
	.el-tree-node {
		color: #dbdce0;
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