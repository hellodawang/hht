<template>
    <div class="appStore-wrapper">
        <h3>应用商城</h3>
        <el-tabs v-model="activeName" @tab-click="handleClick" >
            <el-tab-pane label="应用" name="first">
                <div class="pane-wrapper">
                    <hht-app v-for="item in apps" :key="item.id"></hht-app>
                </div>
            </el-tab-pane>
            <el-tab-pane label="教学资源" name="second">
                <div class="pane-wrapper">
                    <hht-app></hht-app>
                </div>
            </el-tab-pane>
            <el-tab-pane label="工具" name="third">
                <div class="pane-wrapper">
                    <hht-app></hht-app>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import hhtApp from '../../components/app/app';
export default {
	data() {
		return {
			activeName: 'second',
			apps: [{ id: 1 }, { id: 2 }, { id: 3 }],
			tools: [],
			source: [],
		};
	},
	components: {
		hhtApp,
	},
	methods: {
		handleClick(tab, event) {
			console.log(tab, event);
		},
	},
};
</script>
<style lang='scss' scoped>
.appStore-wrapper {
	background-color: #fff;
}
</style>