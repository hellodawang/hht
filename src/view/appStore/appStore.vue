<template>
    <div class="appStore-wrapper">
        <h3 class="appStore-title">应用商城</h3>
        <el-tabs v-model="activeName" @tab-click="handleClick" class="appStore-content" >
            <el-tab-pane label="应用" name="first">
                <div class="pane-wrapper">
                    <hht-app v-for="(item,index) in apps" :key="index" :item='item'> </hht-app>
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
					imgUrl:'/static/appIcon/360.png',
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
					imgUrl:'/static/appIcon/Chrome浏览器.png',
					collected: true,
					subscribe:
						'一款在火星进行基地建设，与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏',
				},
				{
					id: 3,
					name: '星际争霸',
					rate: 5,
					downloadTimes: 100002,
					size: '32M',
					imgUrl:'/static/appIcon/AdobeReader.png',
					collected: true,
					subscribe:
						'一款在火星进行基地建设，与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏',
				},
				{
					id: 4,
					name: '星际争霸',
					rate: 5,
					downloadTimes: 100002,
					size: '32M',
					imgUrl:'/static/appIcon/FIFA足球世界.png',
					collected: true,
					subscribe:
						'一款在火星进行基地建设，与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏',
				},
				{
					id: 5,
					name: '星际争霸',
					rate: 5,
					downloadTimes: 100002,
					size: '32M',
					imgUrl:'/static/appIcon/PolarisOffice.png',
					collected: true,
					subscribe:
						'一款在火星进行基地建设，与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏',
				},
				{
					id: 6,
					name: '星际争霸',
					rate: 5,
					downloadTimes: 100002,
					size: '32M',
					imgUrl:'/static/appIcon/WPSOffice.png',
					collected: true,
					subscribe:
						'一款在火星进行基地建设，与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏',
				},
				{
					id: 7,
					name: '星际争霸',
					rate: 5,
					downloadTimes: 100002,
					size: '32M',
					imgUrl:'/static/appIcon/方块拼凑.png',
					collected: true,
					subscribe:
						'一款在火星进行基地建设，与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏',
				},
				{
					id: 8,
					name: '星际争霸',
					rate: 5,
					downloadTimes: 100002,
					size: '32M',
					imgUrl:'/static/appIcon/高德地图.png',
					collected: true,
					subscribe:
						'一款在火星进行基地建设，与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏',
				},
				{
					id: 9,
					name: '星际争霸',
					rate: 5,
					downloadTimes: 100002,
					size: '32M',
					imgUrl:'/static/appIcon/割绳子.png',
					collected: true,
					subscribe:
						'一款在火星进行基地建设，与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏',
				},
				{
					id: 10,
					name: '星际争霸',
					rate: 5,
					downloadTimes: 100002,
					size: '32M',
					imgUrl:'/static/appIcon/古诗词分类赏析.png',
					collected: true,
					subscribe:
						'一款在火星进行基地建设，与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏',
				},
				{
					id: 11,
					name: '星际争霸',
					rate: 5,
					downloadTimes: 100002,
					size: '32M',
					imgUrl:'/static/appIcon/汉语词典.png',
					collected: true,
					subscribe:
						'一款在火星进行基地建设，与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏',
				},
				{
					id: 12,
					name: '星际争霸',
					rate: 5,
					downloadTimes: 100002,
					size: '32M',
					imgUrl:'/static/appIcon/鸿合i学家长端.png',
					collected: true,
					subscribe:
						'一款在火星进行基地建设，与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏',
				},
				{
					id: 13,
					name: '星际争霸',
					rate: 5,
					downloadTimes: 100002,
					size: '32M',
					imgUrl:'/static/appIcon/鸿合i学教师端.png',
					collected: true,
					subscribe:
						'一款在火星进行基地建设，与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏',
				},
				{
					id: 2,
					name: '星际争霸',
					rate: 5,
					downloadTimes: 100002,
					size: '32M',
					imgUrl:'/static/appIcon/鸿合i学学生端.png',
					collected: true,
					subscribe:
						'一款在火星进行基地建设，与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏',
				},
				{
					id: 2,
					name: '星际争霸',
					rate: 5,
					downloadTimes: 100002,
					size: '32M',
					imgUrl:'/static/appIcon/鸿合多屏互动.png',
					collected: true,
					subscribe:
						'一款在火星进行基地建设，与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏',
				},
				{
					id: 2,
					name: '星际争霸',
					rate: 5,
					downloadTimes: 100002,
					size: '32M',
					imgUrl:'/static/appIcon/鸿合可乐学习.png',
					collected: true,
					subscribe:
						'一款在火星进行基地建设，与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏',
				},
				{
					id: 2,
					name: '星际争霸',
					rate: 5,
					downloadTimes: 100002,
					size: '32M',
					imgUrl:'/static/appIcon/教育+.png',
					collected: true,
					subscribe:
						'一款在火星进行基地建设，与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏',
				},{
					id: 2,
					name: '星际争霸',
					rate: 5,
					downloadTimes: 100002,
					size: '32M',
					imgUrl:'/static/appIcon/腾讯课堂.png',
					collected: true,
					subscribe:
						'一款在火星进行基地建设，与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏',
				},{
					id: 2,
					name: '星际争霸',
					rate: 5,
					downloadTimes: 100002,
					size: '32M',
					imgUrl:'/static/appIcon/新概念英语.png',
					collected: true,
					subscribe:
						'一款在火星进行基地建设，与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏',
				},{
					id: 2,
					name: '星际争霸',
					rate: 5,
					downloadTimes: 100002,
					size: '32M',
					imgUrl:'/static/appIcon/有道词典.png',
					collected: true,
					subscribe:
						'一款在火星进行基地建设，与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏与外星人进行战斗的游戏',
				},{
					id: 2,
					name: '星际争霸',
					rate: 5,
					downloadTimes: 100002,
					size: '32M',
					imgUrl:'/static/appIcon/我的实验室.png',
					collected: true,
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
		height: calc(100% - 41px);
		overflow-y: scroll;
		.pane-wrapper{
			// height: 670px;
			// overflow-y: scroll
		}
	}
}
</style>