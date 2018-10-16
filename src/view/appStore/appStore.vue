<template>
    <div class="appStore-wrapper">
        <h3 class="appStore-title">应用商城</h3>
        <el-tabs v-model="activeName" @tab-click="handleClick" class="appStore-content" >
            <el-tab-pane label="应用" name="first">
                <div class="pane-wrapper">
                    <hht-app v-for="(item,index) in apps" :key="'a' + index" :item='item'> </hht-app>
                </div>
            </el-tab-pane>
            <el-tab-pane label="教学资源" name="second">
                <div class="pane-wrapper">
                    <hht-app v-for="(item, index) in resource" :key="'b' + index" :item='item'> </hht-app>
                </div>
            </el-tab-pane>
            <el-tab-pane label="工具" name="third">
                <div class="pane-wrapper">
                    <hht-app v-for="(item, index) in tools" :key="'c' + index" :item='item'> </hht-app>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import hhtApp from '../../components/app/app';
import {apps, resource, tools} from '../../mock/appStore'

export default {
	data() {
		return {
			activeName: 'first',
			apps: apps,
			tools: tools,
			resource: resource
		};
	},
	components: {
		hhtApp,
	},
	methods: {
		handleClick(tab, event) {
		},
	},
};
</script>
<style lang='scss' scoped>
.appStore-wrapper {
	background-color: #fff;
	height: 100%;
	.appStore-title {
		font-weight: normal;
		font-size: 12px;
		line-height: 40px;
		border-bottom: 1px solid #f0f0f0;
		text-indent: 2em;
	}
	.appStore-content {
		padding: 5px 40px;
		height: calc(100% - 41px);
		overflow-y: scroll;
		.pane-wrapper{
			// height: 670px;
			// overflow-y: scroll
		}
	}
}
</style>