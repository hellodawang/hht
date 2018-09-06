<template>
    <el-row class="driver-wrapper" :gutter="10" ref="driver">
        <el-col :span="6" class="col-one">
            <online-stats :account="onlineStats.account" :device="onlineStats.device"/>
			<div class="section online-distribution">
                <div class="section-title"> 
                    <h3>在线数据分布</h3>
                </div>
                <div class="section-content">
					<bar-chart :data="barChartData" style="height:325px"/>
                    <!-- <div ref="myEchart" style="height:325px"></div> -->
					<div>
						<bar-chart :data="activityData" style="height:220px"/>
						<!-- <div ref='myEchart1' style="height:220px"></div> -->
						<div class="period" style="height:50px;text-align:center;margin-top:15px">
							<!-- <el-button-group>
								<el-button size="mini" @click="showWeek" class="current-btn">本周</el-button>
								<el-button size="mini" @click="showMonth">本月</el-button>
								<el-button size="mini" @click="showYear">本年</el-button>
							</el-button-group> -->
							<el-radio-group v-model="period"   size="small" @change='handleChange'>
								<el-radio-button label="week">本周</el-radio-button>
								<el-radio-button label="month">本月</el-radio-button>
								<el-radio-button label="year">本年</el-radio-button>
							</el-radio-group>
						</div>	
					</div>	
                </div>
            </div>
        </el-col>
        <el-col :span="12" class="col-two">
			<div class="section device-distribution">
                <div class="section-title"> 
                    <h3 >全景图</h3>
					<div style="float:right;line-height:38px;margin-right:20px">
						<el-radio v-model="mapType" label="1">国内</el-radio>
						<el-radio v-model="mapType" label="2">海外</el-radio>	
					</div>				
                </div>
                <div class="section-content">
					<div ref="myEchart3" id='chart-panel' style="height:500px"></div>
					<div class="device-text">
						<div class="device-text-item">
							<span class="device-num">15558</span>
							<span class="device-num-text">今日设备运行总数</span>
						</div>
						<div class="device-text-item">
							<span class="device-num">15558</span>
							<span class="device-num-text">当前设备运行总数</span>
						</div>
					</div>
                </div>
            </div>
            <div class="section">
                <div class="section-title"> 
                    <h3>TOP应用/客户汇总</h3> 
                </div>
                <div class="section-content" style="height:180px">
                    <el-col :span='12'>
                        <bar-chart :data="topAppData" style="height:180px"/>   
                    </el-col>
                    <el-col :span='12'>
                        <bar-chart :data="topClientData" style="height:180px"/>  
                    </el-col>
                </div>
            </div>
        </el-col>
        <el-col :span="6">
            <div class="section">
                <div class="section-title"> 
                    <h3>云设备整体状态</h3> 
                </div>
                <div class="section-content" style="height:130px">                 
                    <el-col :span='16'>
                        <bar-chart :data="deviceStatus" style="height:110px"/>   
                    </el-col>
                    <el-col :span='8'>   
                        <div style="width:54px;height:54px;border-radius:50%;border:4px solid green;text-align:center;line-height:46px;color:green;margin-top:20px">优</div>
                    </el-col>              
                </div>
            </div>
            <div class="section">
                <div class="section-title"> 
                    <h3>容量</h3> 
                </div>
                <div class="section-content" style="height:140px">
                    <el-col :span='12' style="text-align:center">
                        <el-progress type="circle" :percentage="20" :width='80'></el-progress>
                        <p>硬盘容量</p>
                    </el-col>
                    <el-col :span='12'>
                        <el-progress type="circle" :percentage="20" :width='80'></el-progress>
                        <p>数据库容量</p>
                    </el-col>              
                </div>
            </div>
            <div class="section">
                <div class="section-title"> 
                    <h3>带宽性能</h3> 
                </div>
                <div class="section-content" >
                    <bar-chart :data="bendwidth" style="height:180px"/>                
                </div>
            </div>
            <div class="section">
                <div class="section-title"> 
                    <h3>cpu/内存</h3> 
                </div>
                <div class="section-content">
                    <bar-chart :data="cpuAndRamStatus" style="height:180px"/> 
                </div>
            </div>
        </el-col>
    </el-row>
</template>
<script>
import china from 'echarts/map/json/china.json';
import world from 'echarts/map/json/world.json';
import mapchart from '../../utils/map.js';
import { value, nameMap } from '../../utils/worldmap.js';
import echarts from 'echarts';

import onlineStats from './onlineStats'
import barChart from './barChart'

import distributionData4BarChart from '../../mock/distributionData4BarChart'
import activityData from '../../mock/activityData'
import topAppData from '../../mock/topAppData'
import topClientData from '../../mock/topClientData'
import deviceStatus from '../../mock/deviceStatus'
import bendwidth from '../../mock/bendwidth'
import cpuAndRamStatus from '../../mock/cpuAndRamStatus'

export default {
	components: {
		onlineStats,
		barChart,
	},
	mounted() {
		echarts.registerMap('china', china);
		echarts.registerMap('world', world);
		this.$nextTick(() => {
			this.map = echarts.extendsMap(this.$refs.myEchart3, {
				bgColor: '#154e90', // 画布背景色
				mapName: 'china', // 地图名
				// text:'火电业务',
				goDown: true, // 是否下钻
				// 下钻回调
				callback: function(name, option, instance) {
					
				},
			});

		});
	},
	data() {
		return {
			map: {},
			chart1: {},
			mapType:'1',
			period:'week'
		};
	},
	computed: {
		getShowSidebar() {
			return this.$store.state.showSideBar;
		},
		onlineStats() {
			return {// todo 假数据
				account: {online: 34551, all: 82342},
				device: {online: 321243, all: 912341}
			}
		},
		barChartData() {
			return distributionData4BarChart // todo 假数据
		},
		activityData() {
			return activityData // todo 假数据
		},
		topAppData() {
			return topAppData // todo 假数据
		},
		topClientData() {
			return topClientData // todo 假数据
		},
		deviceStatus() {
			return deviceStatus // todo 假数据
		},
		bendwidth() {
			return bendwidth // todo 假数据
		},
		cpuAndRamStatus() {
			return cpuAndRamStatus // todo 假数据
		},
	},
	watch: {
		// 如果 `getShowSidebar` 发生改变，这个函数就会运行
		getShowSidebar: function(newQuestion, oldQuestion) {
			this.map.resize();
		},
		mapType:function(n,o){
			if(n=='1'){
				this.$nextTick(()=>{
					this.$echarts.dispose(this.$refs.myEchart3);
					this.map = echarts.extendsMap(this.$refs.myEchart3, {
						bgColor: '#154e90', // 画布背景色
						mapName: 'china', // 地图名
						// text:'火电业务',
						goDown: true, // 是否下钻
						// 下钻回调
						callback: function(name, option, instance) {},
					});
				})
			}else{
				this.$nextTick(()=>{
					this.$echarts.dispose(this.$refs.myEchart3);
					this.map = this.$echarts.init(this.$refs.myEchart3);
					this.map.setOption({
						backgroundColor: '#154e90',
						visualMap: {
							min: 0,
							max: 10000,
							left: 'right',
							top: 'bottom',
							text: ['High', 'Low'],
							seriesIndex: [0],
							inRange: {
								color: ['#e0ffff', '#006edd'],
							},
							calculable: true,
						},
						series: [
							{
								type: 'map',
								map: 'world',
								data: value,
								nameMap: nameMap,
							},
						],
					});
				})
			}
		}
	},
	methods: {
		handleChange(value){
			let data;
			let xdata
			if(value=='week'){
				xdata = ['08-01', '08-02', '08-03', '08-04', '08-05', '08-06', '08-07']
				data = [79, 68, 56, 74, 89, 98, 84]
			}else if(value=='month'){
				xdata = ['08-01', '08-02', '08-03', '08-04', '08-05', '08-06', '08-07', '08-08', '08-09', '08-10', '08-11', '08-12', '08-13', '08-14', '08-15', '08-16', '08-17'];
				data = [79, 68, 56, 74, 89, 98, 84,100,90,22,33,46,78,51,66,11,69]
			}else{
				xdata = ['2018-01', '2018-02', '2018-03', '2018-04', '2018-05', '2018-06', '2018-07', '2018-08', '2018-09', '2018-10', '2018-11', '2018-12']
				data = [79, 68, 56, 74, 89, 98, 84,12,56,23,33,67]
			}
			this.$nextTick(()=>{
				var option1 = {
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'cross',
							label: {
								backgroundColor: '#6a7985',
							},
						},
					},
					grid: {
						left: '2%',
						right: '5%',
						bottom: '3%',
						top: '20%',
						containLabel: true,
					},
					xAxis: [
						{
							type: 'category',
							boundaryGap: false,
							data:xdata
						},
					],
					yAxis: [
						{
							name: '活跃度',
							type: 'value',
							min: 0,
							max: 100,
							interval: 20,
						},
					],
					series: [
						{
							// name: '平均值',
							type: 'line',
							smooth: true,
							// showSymbol: false,
							label: {
								normal: {
									show: true,
									position: 'top',
								},
							},
							data: data
						},
					],
				};
				this.chart1.setOption(option1);
			})
		},
	},
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
				padding: 10px;
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
					padding: 0 60px;
					.device-text-item {
						display: inline-block;
						margin-right: 20px;
						text-align: center;
						> span {
							display: block;
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
			&.device-distribution {
				.section-content {
					padding: 0;
				}
			}
		}
	}
}
.current-btn{
	background-color: #f66;
	color: #fff;
}
</style>