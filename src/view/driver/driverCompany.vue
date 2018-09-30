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
                </div>
            </div>
			<div class="section online-distribution" style="padding:20px 0 ">
                <!-- <div class="section-title"> 
                    <h3>在线数据分布</h3>
                </div> -->
                <div class="section-content">
					<distribution-bar-chart :data="barChartData" />
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
					<chinese-map :stats="chineseMapData" @setProvinceData="setProvinceData" />

					<div class="device-text">
						<div class="device-text-item">
							<span class="device-num">{{terminalTotal}}</span>
							<span class="device-num-text">设备总数</span>
						</div>
						<div class="device-text-item">
							<span class="device-num">{{onlineTerminalTotal}}</span>
							<span class="device-num-text">当前设备运行总数</span>
						</div>
						<div class="device-text-item alarm" v-if="!hideWarning">
							<span class="device-num">{{stats[mapType].warningTotal}}</span>
							<span class="device-num-text">设备告警总数</span>
						</div>
					</div>
                </div>
            </div>
            <div class="section keyEvent">
                <div class="section-title"> 
                    <h3>关键事件提醒</h3> 
                </div>
                <div class="section-content" style="height:200px;overflow-y:scroll">
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
                <div class="section-content" >					
                    <half-circle :op='networkQualityData'></half-circle>  
                </div>
            </div>
			<div class="section">
                <div class="section-title"> 
                    <h3>公告</h3> 
                </div>
                <div class="section-content bulletin" >
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
import provinceMap from '../../utils/provinceList'

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
			eventsData:[ ],
			rawBulletinData:[ ],
			cloudSpaceCapacityData:{name:'云空间容量',all:100,available:100},
			stats: {
				'1': {terminalTotal: 0, onlineTerminalTotal: 0, warningTotal: 0},
				'2': {terminalTotal: 0, onlineTerminalTotal: 0, warningTotal: 0},
			},
			terminalTotal: 0,
			onlineTerminalTotal: 0,
			mapType: "1", // 中国地图
			hideWarning: false,
		};
	},
	computed: {
		getShowSidebar() {
			return this.$store.state.showSideBar;
		},
		barChartData() {
			let data = {title1:'使用时长排名',
				title2:'使用率排名',
				data1: [],
				data2: []
			}
			if(this.device.deptTerminalList){
				data.data1 = this.device.deptTerminalList.map((v) => {
					return {
						xAxis:v.deptName,
						value: v.useTime
					}
				}).sort((a, b) => a.typeOnline < b.typeOnline ? 1 : -1).slice(0, 5)	
				data.data2 = this.device.deptTerminalList.map((v) => {
					return {
						xAxis:v.deptName,
						value: v.usage
					}
				}).sort((a, b) => a.typeOnline < b.typeOnline ? 1 : -1).slice(0, 5)	
			}			
			return data
		},
		chineseMapData() {
			if (!this.stats['1'].mapData) return {}
			let stats = this.stats['1'].mapData
			let data = []
			// console.log('china map data: ', stats)
			stats.forEach((v) => {
				let area = v.subList.map((u) => {
					return {
						name: u.areaName,
						value: u.areaValue,
						online: u.areaOnlineValue,
					}
				})
				// console.log('province data: ', v.areaName, provinceMap[v.areaName])

				data[provinceMap[v.areaName]] = area
			})
			let china = stats.map((v) => {
				return {
				name: provinceMap[v.areaName],
				value: v.areaValue,
				online: v.areaOnlineValue,
				}
			})
			data.china = china
			this.china = china
			// console.log('china map format data: ', data)
			return data
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
					time: v.noticeTime,
					content: v.noticeDetail,
				}
			})
		},
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
	created(){
	  this.$axios   // 获取事件通知与公告
		.post("/movement/movement/importevent", {}, { responseType: "json" })
		.then(res => {
			if (res.data.code != '0000') {
			return console.log("get data error: ", res.message);
			}
			this.eventsData  = res.data.data.importEventList
			this.rawBulletinData = res.data.data.noticeList
		})
		.catch(function(error) {
			console.log(error);
		});

	  this.getMapData('1')
	  
	  this.$axios   // 获取企业接入网络质量
		.post("/terminalweb/terminalReport/terminalNetwork", {}, { responseType: "json" })
		.then(res => {
			if (res.data.code != '0000') {
			return console.log("get data error: ", res.message);
			}
			this.terminalNetwork  = res.data.data.networkList
		})
		.catch(function(error) {
			console.log(error);
		});
	  this.$axios   // 获取企业存储空间
		.post("/userapi/userReport/findPersonalSpace", {}, { responseType: "json" })
		.then(res => {
			if (res.data.code != '0000') {
			return console.log("get data error: ", res.message);
			}
			this.cloudSpaceCapacityData  = {
				name:'云空间容量',
				all: res.data.data.userPersonalSpace.totalspace,
				available: res.data.data.userPersonalSpace.availablespace
			}
		})
		.catch(function(error) {
			console.log(error);
		});
	  this.$axios   // 在线用户统计
		.post("/userapi/userReport/findOnlineUser", {}, { responseType: "json" })
		.then(res => {
			if (res.data.code != '0000') {
			return console.error("get data error: ", res.message);
			}
			this.account = res.data.data;
		})
		.catch(function(error) {
			console.log(error);
		});
	  this.$axios   // 在线终端统计
		.post("/terminalweb/terminalReport/findOnlineStatisticalByDept", {}, { responseType: "json" })
		.then(res => {
			if (res.data.code != '0000') {
			return console.log("get data error: ", res.message);
			}
			this.device = res.data.data;
		})
		.catch(function(error) {
			console.log(error);
		});
	//   this.$axios		// 国内地图
	// 		.get("/report/term/stats/district", { responseType: "json" })
	// 		.then(res => {
	// 			if (res.data.code != 0) {
	// 				return console.log("get data error: ", res.message);
	// 			}
	// 			this.china = res.data.data;
	// 			// console.log('stats data: ', res.data)
	// 			this.stats['1'] = {
	// 				terminalTotal: res.data.data.terminalTotal, 
	// 				onlineTerminalTotal: res.data.data.onlineTerminalTotal,
	// 				warningTotal: res.data.data.warningTotal,
	// 			}
	// 		})
	// 		.catch(function(error) {
	// 			console.log(error);
	// 		});
	},
	methods: {
		setProvinceData(d) {
			// console.log('current area name: ', d)
			this.hideWarning = d != 'china'
			// console.log('this.hideWarning: ', this.hideWarning)
			if (d == 'china') {
				this.terminalTotal = this.stats['1'].terminalTotal
				this.onlineTerminalTotal = this.stats['1'].onlineTerminalTotal
				return
			}
			let count = this.stats['1'].mapData.filter(v => v.areaName.indexOf(d) == 0)[0]
			// console.log('current area data: ', count)
			this.terminalTotal = count.areaValue
			this.onlineTerminalTotal = count.areaOnlineValue
		},
		getMapData(mapType) {
			// type=1为国内地图，type=2为世界地图
			let type = mapType || this.mapType
			console.log('mapType: ', type)
			if (this.stats[type] && this.stats[type].mapData) return

			this.$axios
				.post("/terminalweb/terminalReport/findAllTerminalMap", {mapType: type}, { responseType: "json" })
				.then(res => {
					if (res.data.code != '0000') {
						return console.log("get data error: ", res.data.message);
					}
					// if (res.data.data.mapType == '1') { // 国内地图
					//   this.china = res.data.data.areaTerminalList;
					// } else if (res.data.data.mapType == '2') { // 国外地图
					//   this.world = res.data.data.areaTerminalList;
					// }
					this.mapType = res.data.data.mapType

					this.stats[res.data.data.mapType] = {
						mapData: res.data.data.areaTerminalList,
						terminalTotal: res.data.data.terminalTotal, 
						onlineTerminalTotal: res.data.data.onlineTerminalTotal,
						warningTotal: res.data.data.warningTotal,
					}
					this.setProvinceData('china')
					console.log('this.stats: ', this.stats)
				})
				.catch(function(error) {
					console.log(error);
				});
		},
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
				&.bulletin{
					height: 360px;
					@media screen and (max-width: 1400px){
						height: 340px;
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
