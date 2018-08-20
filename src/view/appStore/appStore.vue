<template>
    <div class="appStore-wrapper">
        <h3 class="appStore-title">应用商城</h3>
        <el-tabs v-model="activeName" @tab-click="handleClick" class="appStore-content" >
            <el-tab-pane label="应用" name="first">
                <div class="pane-wrapper">
                    <hht-app v-for="item in apps" :key="item.id" :item='item'> </hht-app>
                </div>
            </el-tab-pane>
            <el-tab-pane label="教学资源" name="second">
                <div class="pane-wrapper">
                    <hht-app v-for="item in tools" :key="item.id" :item='item'> </hht-app>
                </div>
            </el-tab-pane>
            <el-tab-pane label="工具" name="third">
                <div class="pane-wrapper">
                    <hht-app v-for="item in source" :key="item.id" :item='item'> </hht-app>
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
			activeName: 'first',
			apps: [
				{
					id: 1,
					name: '星际争霸',
					rate: 3.7,
					downloadTimes: 100002,
					size: '32M',
					collected: false,
					subscribe:
						'一款在火星进行基地建设，与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏',
				},
				{
					id: 2,
					name: '星际争霸',
					rate: 5,
					downloadTimes: 100002,
					size: '32M',
					collected: true,
					subscribe:
						'一款在火星进行基地建设，与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏',
				},
				{
					id: 3,
					name: '星际争霸',
					rate: 3.7,
					downloadTimes: 100002,
					size: '32M',
					collected: false,
					subscribe:
						'一款在火星进行基地建设，与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏',
				},
			],
			tools: [
				{
					id: 1,
					name: '星际争霸',
					rate: 3.7,
					downloadTimes: 100002,
					size: '32M',
					collected: false,
					subscribe:
						'一款在火星进行基地建设，与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏',
				},
				{
					id: 2,
					name: '星际争霸',
					rate: 3.7,
					downloadTimes: 100002,
					size: '32M',
					collected: false,
					subscribe:
						'一款在火星进行基地建设，与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏',
				},
				{
					id: 3,
					name: '星际争霸',
					rate: 3.7,
					downloadTimes: 100002,
					size: '32M',
					collected: false,
					subscribe:
						'一款在火星进行基地建设，与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏',
				},
			],
			source: [
				{
					id: 1,
					name: '星际争霸',
					rate: 3.7,
					downloadTimes: 100002,
					size: '32M',
					collected: false,
					subscribe:
						'一款在火星进行基地建设，与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏',
				},
				{
					id: 2,
					name: '星际争霸',
					rate: 3.7,
					downloadTimes: 100002,
					size: '32M',
					collected: false,
					subscribe:
						'一款在火星进行基地建设，与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏',
				},
				{
					id: 3,
					name: '星际争霸',
					rate: 3.7,
					downloadTimes: 100002,
					size: '32M',
					collected: false,
					subscribe:
						'一款在火星进行基地建设，与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏',
				},
			],
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
	height: 100%;
	.appStore-title {
		font-weight: normal;
		font-size: 12px;
		line-height: 40px;
		border-bottom: 1px solid #f0f0f0;
		text-indent: 2em;
	}
	.appStore-content {
		padding: 20px 40px;
	}
}
</style>