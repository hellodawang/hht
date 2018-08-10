<template>
    <el-tree :data="list"  node-key="id" :expand-on-click-node="true" class="hht_list">
        <span class="custom-tree-node" slot-scope="{ node, data }" >
            <i class='iconfont' :class="[{ 'icon-driver': (node.icon=='driver')},
                                    {'icon-statistics':(node.icon=='statistics')},
                                    {'icon-maintenance':(node.icon=='maintenance')},
                                    {'icon-mall':(node.icon=='mall')},
                                    {'icon-user':(node.icon=='user')},
                                    {'icon-study':(node.icon=='study')},
                                    {'icon-setting':(node.icon=='setting')}
                                    ]"  ></i>
            <span class='icon-text '>
                {{node.label}}
            </span>
            <span class="iconfont down" v-if='data.children' :class="{'icon-left':!node.expanded, 'icon-down':node.expanded}"></span>
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
	.el-tree-node {
		color: #dbdce0;
		&:focus > .el-tree-node__content {
			background-color: transparent;
		}
		.el-tree-node__content {
			position: relative;
			height: 37px;
			.el-tree-node__expand-icon {
				display: none;
			}
		}
		.el-tree-node__content:hover {
			background-color: #24272c;
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
}
</style>