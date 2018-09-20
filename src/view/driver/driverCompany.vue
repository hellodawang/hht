<template>
    <el-row class="driver-wrapper" :gutter="10" ref="driver">
        <el-col :span="6" class="col-one">
			<!-- 在线数据统计 -->
            <div class="section online">
                <div class="section-title"> 
                    <h3>在线统计</h3>
                </div>
                <div class="section-content">
                	<online-stats :account="accountStats" :device="deviceStats"/>
                    <!-- <online-stats :account="onlineStats.account" :device="onlineStats.device"/> -->
                </div>
            </div>
			<div class="section online-distribution">
                <div class="section-title"> 
                    <h3>在线数据分布</h3>
                </div>
                <div class="section-content">
					<distribution-bar-chart :data="barChartData" style="height:325px"/>
					<activity-chart />
                </div>
            </div>
        </el-col>
        <el-col :span="12" class="col-two">
			<div class="section device-distribution">
                <div class="section-title"> 
                    <h3 >设备概览</h3>
                </div>
                <div class="section-content">
					<chinese-map :stats="chineseMapData" style="height:500px" />
					<!-- <div ref="myEchart3" id='chart-panel' style="height:500px"></div> -->
					<div class="device-text">
						<div class="device-text-item">
							<span class="device-num">{{stats[mapType].terminalTotal}}</span>
							<span class="device-num-text">今日设备运行总数</span>
						</div>
						<div class="device-text-item">
							<span class="device-num">{{stats[mapType].onlineTerminalTotal}}</span>
							<span class="device-num-text">当前设备运行总数</span>
						</div>
						<div class="device-text-item alarm">
						<span class="device-num">{{stats[mapType].warningTotal}}</span>
						<span class="device-num-text">设备告警总数</span>
					</div>
					</div>
                </div>
            </div>
            <div class="section keyEvent">
                <div class="section-title"> 
                    <h3>重要关键事件提醒</h3> 
                </div>
                <div class="section-content" style="height:200px">
					<key-events :op='eventsData'></key-events>
                </div>
            </div>
        </el-col>
        <el-col :span="6">
            <div class="section">
                <div class="section-title"> 
                    <h3>云空间容量</h3> 
                </div>
                <div class="section-content" >
                    <cloud-space-capacity :op='cloudSpaceCapacityData'/>            
                </div>
            </div>
            <div class="section">
                <div class="section-title"> 
                    <h3>网络质量</h3> 
                </div>
                <div class="section-content" style="height:180px;">					
                    <half-circle :op='networkQualityData'></half-circle>  
                </div>
            </div>
			<div class="section">
                <div class="section-title"> 
                    <h3>公告</h3> 
                </div>
                <div class="section-content"  style="height:370px">
					<bulletin :op='bulletinData'></bulletin>
                </div>
            </div>
        </el-col>
    </el-row>
</template>

<script>
import bulletin from '../../components/bulletin/bulletin'
import halfCircle from '../../components/chart/halfCircle'
import cloudSpaceCapacity from './cloudSpaceCapacity.vue'
import keyEvents from './keyEvents.vue'
import onlineStats from "./onlineStats";
import distributionBarChart from "./distBarChart";
import activityChart from "./activity";
import chineseMap from "../../components/map/chineseMap";

export default {
	mounted() {
		this.$nextTick(() => {
		});
	},
	data() {
		return {
			china: {},
			device: { online: 0, all: 1, deptInfoList: []},
			account: { online: 0, all: 1, accountTypeList: []},
			terminalNetwork: [],
			eventsData:[
				// {eventName:'设备升级',eventDetail:'今天升级总部设备10台',deadLine:'2018-08-06'},
				// {eventName:'设备升级',eventDetail:'今天升级总部设备10台',deadLine:'2018-08-06'},
				// {eventName:'设备升级',eventDetail:'今天升级总部设备10台',deadLine:'2018-08-06'},
				// {eventName:'设备升级',eventDetail:'今天升级总部设备10台',deadLine:'2018-08-06'},
			],
			rawBulletinData:[
                // {id:1,time:'2018-09-11',content:'公司放假通知：放假3天 庆祝中秋'},
                // {id:2,time:'2018-08-01',content:'公司放假通知：放假3天 庆祝中秋'},
                // {id:3,time:'2018-06-31',content:'公司放假通知：放假3天 庆祝中秋'},
                // {id:4,time:'2018-06-12',content:'公司放假通知：放假3天 庆祝中秋'},
            ],
			cloudSpaceCapacityData:{name:'云空间容量',all:100,available:100},
			// networkQualityData:[
			// 	{"name": "广东，广西，福建，湖南，贵州", level:'优秀', "value": 900}, 
			// 	{"name": "西藏，青海，四川",level:'良好',"value": 500},
			// 	{"name": "浙江，江苏，安徽",level:'好',"value": 300},
			// 	{ "name": "河南，陕西，山东", level:'一般', "value": 900},
			// 	{"name": "黑龙江，沈阳",level:'差',"value": 500}
			// ],
			// onlineStats:{
				// account: { online: 34551, all: 82342 },
        		// device: { online: 321243, all: 912341 }
			// },
			// barChartData:{
			// 	title1:'使用时长',
			// 	title2:'使用率',
			// 	account: [{accountType:'教育',typeOnline:2342},{accountType:'商用',typeOnline:3213}, {accountType:'i学',typeOnline:1242}, {accountType:'其他',typeOnline:455}],
        	// 	device: [{terminalType:'教育',typeOnline:22342},{terminalType:'商用',typeOnline:32113},{terminalType:'i学',typeOnline:41242},{terminalType:'其他',typeOnline:8455}]
			// },
			// activityData:{
			// 	dateType:2,
			// 	distributionList:[
			// 		{"onlineDateInfo": "07/26","distributionUserInfo": "3500","distributionTerminalInfo": "350" },
			// 		{"onlineDateInfo": "07/27","distributionUserInfo": "4500","distributionTerminalInfo": "600" },
			// 		{"onlineDateInfo": "07/28","distributionUserInfo": "1500","distributionTerminalInfo": "500" },
			// 		{"onlineDateInfo": "07/29","distributionUserInfo": "2300","distributionTerminalInfo": "200" },
			// 		{"onlineDateInfo": "07/30","distributionUserInfo": "800","distributionTerminalInfo": "180" },
			// 		{"onlineDateInfo": "07/31","distributionUserInfo": "3000","distributionTerminalInfo": "480" },
			// 	]
			// },
			stats: {
				'2': {terminalTotal: 0, onlineTerminalTotal: 0, warningTotal: 0},
			},
			mapType: "2",
		};
	},
	computed: {
		getShowSidebar() {
			return this.$store.state.showSideBar;
		},
		barChartData() {
			let data = {title1:'使用率排名',
				title2:'使用时长排名',
				account: [{accountType:'教育',typeOnline:2342},{accountType:'商用',typeOnline:3213}, {accountType:'i学',typeOnline:1242}, {accountType:'其他',typeOnline:455}],
				device: [{terminalType:'教育',typeOnline:22342},{terminalType:'商用',typeOnline:32113},{terminalType:'i学',typeOnline:41242},{terminalType:'其他',typeOnline:8455}]
			}
			data.account = this.device.deptInfoList.map((v) => {
				return {
					accountType: v.deptName,
					typeOnline: v.usage
				}
			}).sort((a, b) => a.typeOnline < b.typeOnline ? 1 : -1).slice(0, 5)
			data.device = this.device.deptInfoList.map((v) => {
				return {
					terminalType: v.deptName,
					typeOnline: v.useTime
				}
			}).sort((a, b) => a.typeOnline < b.typeOnline ? 1 : -1).slice(0, 5)
			return data
		},
		chineseMapData() {
			let stats = this.china.detail
			if (!stats) return [];
			let china = Object.keys(stats).map((v) => {
				let province = stats[v]
				let data = {name: v, value: 0, online: 0}
				Object.keys(province).forEach((u) => {
				let area = province[u]
				
				let value = 0
				let online = 0
				Object.keys(area).forEach((t) => {
					value += area[t].total
					online += area[t].online
					if (!data[t]) data[t] = {online: 0, total: 0}
					data[t].online += area[t].online
					data[t].total += area[t].total
				})
				area.value = value
				area.online = online
				data.value += value
				data.online += online
				})

				return data // 省数据
			})

			Object.keys(stats).forEach((v) => {
				let province = stats[v]
				stats[v] = Object.keys(province).map((u) => {
				return Object.assign({name: u}, province[u])
				})
			})
			stats.china = china
			return stats
		},
		accountStats() {
			return {
				online: this.account && this.account.onlineTotal || 0, 
				all: this.account && this.account.accountTotal || 1
			};
		},
		deviceStats() {
			return {
				online: this.device && this.device.onlineTotal || 0, 
				all: this.device && this.device.terminalTotal || 1
			}
		},
		networkQualityData() {
			return this.terminalNetwork.map((v) => {
				return {
					name: v.networkStateList.join('，'),
					level: v.networkStateName,
					value: v.networkStateList.length
				}
			})
		},

		bulletinData() {
			return this.rawBulletinData.map((v) => {
				return {
					time: v.deadLine,
					content: v.noticeDetail,
				}
			})
			// {time:'2018-09-11',content:'公司放假通知：放假3天 庆祝中秋'},
		},
	},
	watch: {
		// 如果 `getShowSidebar` 发生改变，这个函数就会运行
		getShowSidebar: function(newQuestion, oldQuestion) {
			this.map.resize();
		},
	},
	methods: {

	},
	components:{
		bulletin,
		halfCircle,
		cloudSpaceCapacity,
		keyEvents,
		onlineStats,
		distributionBarChart,
		activityChart,
		chineseMap,
	},
	beforeCreate(){
	  this.$axios   // 获取事件通知与公告
		.post("/web/importEvent", {}, { responseType: "json" })
		.then(res => {
			if (res.data.code != '0000') {
			return console.log("get data error: ", res.message);
			}
			this.eventsData  = res.data.data.importEventList
			this.rawBulletinData = res.data.data.noticeList
			// console.log('events data: ', this.eventsData)
			// console.log('bulletin data: ', this.rawBulletinData)
		})
		.catch(function(error) {
			console.log(error);
		});
	  this.$axios   // 获取企业接入网络质量
		.post("/user/terminalNetwork", {}, { responseType: "json" })
		.then(res => {
			if (res.data.code != '0000') {
			return console.log("get data error: ", res.message);
			}
			this.terminalNetwork  = res.data.data
			console.log('available terminalNetwork: ', res.data.data)
		})
		.catch(function(error) {
			console.log(error);
		});
	  this.$axios   // 获取企业存储空间
		.post("/web/personalSpace", {}, { responseType: "json" })
		.then(res => {
			if (res.data.code != '0000') {
			return console.log("get data error: ", res.message);
			}
			this.cloudSpaceCapacityData  = {
				name:'云空间容量',
				all: res.data.data.totalSpace,
				available: res.data.data.availableSpace
			}
			console.log('available store: ', res.data.data)
		})
		.catch(function(error) {
			console.log(error);
		});
	  this.$axios   // 在线用户统计
		.post("/user/findOnline", {}, { responseType: "json" })
		.then(res => {
			if (res.data.code != '0000') {
			return console.log("get data error: ", res.message);
			}
			this.account = res.data.data;
			// console.log('online account: ', this.account)
		})
		.catch(function(error) {
			console.log(error);
		});
	  this.$axios   // 在线终端统计
		.post("/terminalReport/findOnlineStatisticalByDept", {}, { responseType: "json" })
		.then(res => {
			if (res.data.code != '0000') {
			return console.log("get data error: ", res.message);
			}
			this.device = res.data.data;
			console.log('online device: ', this.device)
		})
		.catch(function(error) {
			console.log(error);
		});
	  this.$axios		// 国内地图
			.get("/report/term/stats/district", { responseType: "json" })
			.then(res => {
				if (res.data.code != 0) {
					return console.log("get data error: ", res.message);
				}
				this.china = res.data.data;
				// console.log('stats data: ', res.data)
				this.stats['2'] = {
					terminalTotal: res.data.data.terminalTotal, 
					onlineTerminalTotal: res.data.data.onlineTerminalTotal,
					warningTotal: res.data.data.warningTotal,
				}
			})
			.catch(function(error) {
				console.log(error);
			});
	}
};
</script>
<style lang='scss' scoped>
.driver-wrapper {
	height: 100%;
	overflow-y: scroll;
	> .el-col {
		height: 100%;
		.section {
			background-color: #fff;
			border-radius: 4px;
			margin-bottom: 10px;
			display: inline-block;
			width: 100%;
			font-size: 12px;
			position: relative;
			vertical-align: middle;
			&:last-child{
				margin-bottom: 0;
			}
			.section-title {
				border-bottom: 1px solid #e0e0e0;
				height: 38px;
				h3 {
					font-size: 12px;
					font-weight: 500;
					text-indent: 1em;
					line-height: 38px;
					color: #0b0b0b;
					float: left;
				}
			}
			.section-content {
				.detail {
					text-decoration: none;
					color: #333;
					display: block;
					text-align: right;
					margin-right: 20px;
					line-height: 1.8em;
					font-size: 12px;
					&:hover {
						color: #f66;
					}
				}
				.device-text {
					height: 80px;
					padding: 0 30px;
					.device-text-item {
						// display: inline-block;
						float: left;
						margin-right: 20px;
						text-align: center;
						> span {
						display: block;
						}
						&.alarm{
						float: right;
						.device-num{
							font-size: 18px;
							color: #FF6C00;
							line-height: 24px;
							margin: 20px 0 10px 0;
						}
						}
						.device-num {
						font-size: 28px;
						color: #1a8034;
						line-height: 54px;
						font-weight: 500;
						}
					}
				}
			}
			&.online .online-item {
				height: 60px;
				line-height: 60px;
				h5 {
					font-weight: normal;
					font-size: 14px;
					width: 58px;
					float: left;
				}
				.online-num {
					text-align: center;
					.onlines {
						font-size: 28px;
						color: #1e87d0;
						font-weight: bold;
					}
					.all {
						font-size: 16px;
						color: #ccc;
					}
				}
			}
			&.device-distribution {
				.section-content {
					padding: 0;
				}
			}
			&.keyEvent{
				.section-content{
					padding: 0 20px;
					// font-size: 12px;
				}
				// overflow-y: scroll;
			}
		}
	}
}
</style>
<style lang='scss'>
.driver-wrapper{
	.section.keyEvent{
		.el-table td, .el-table th{
			padding: 4px;
		}
		table{
			font-size: 12px;
		}
	}	
} 
</style>
