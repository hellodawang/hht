<template>
    <el-row class="driver-wrapper" :gutter="10" ref="driver">
        <el-col :span="6" class="col-one">
            <div class="section online">
                <div class="section-title"> 
                    <h3>在线统计</h3>
                </div>
                <div class="section-content">
                    <div class="online-item clearfix">
						<h5>上线人数</h5>
						<div class="online-num">
							<span class="onlines">8500</span>
							<span class="all">/12000</span>
						</div>
					</div>
                    <div class="online-item clearfix">
						<h5>上线设备</h5>
						<div class="online-num">
							<span class="onlines">8500</span>
							<span class="all">/12000</span>
						</div>
					</div>
                </div>
            </div>
			<div class="section online-distribution">
                <div class="section-title"> 
                    <h3>在线数据分布</h3>
                </div>
                <div class="section-content">
                    <div ref="myEchart" style="height:300px"></div>
					<div>
						<div ref='myEchart1' style="height:200px"></div>
						<div class="period" style="height:50px;text-align:center;margin-top:15px">
							<el-button-group>
								<el-button size="mini" type="primary" @click="showWeek">本周</el-button>
								<el-button size="mini" @click="showMonth">本月</el-button>
								<el-button size="mini" @click="showYear">本年</el-button>
							</el-button-group>
						</div>	
					</div>	
                </div>
            </div>
        </el-col>
        <el-col :span="12" class="col-two">
			<div class="section device-distribution">
                <div class="section-title"> 
                    <h3 @click="ss">设备概览</h3>
                </div>
                <div class="section-content">
					<div ref="myEchart3" id='chart-panel' style="height:470px"></div>
                </div>
            </div>
            <div class="section">
                <div class="section-title"> 
                    <h3>重要关键事情提醒</h3> 
                </div>
                <div class="section-content" style="height:180px">
                    <!-- <el-col :span='12'>
                        <div ref="myEchart4" style="height:180px"></div>   
                    </el-col>
                    <el-col :span='12'>
                        <div ref="myEchart5" style="height:180px"></div>   
                    </el-col> -->
                </div>
            </div>
        </el-col>
        <el-col :span="6">
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
                    <div ref="myEchart7" style="height:180px"></div>                
                </div>
            </div>
            <div class="section">
                <div class="section-title"> 
                    <h3>cpu/内存</h3> 
                </div>
                <div class="section-content">
                    <div ref="myEchart8" style="height:180px"></div>   
                </div>
            </div>
            <div class="section">
                <div class="section-title"> 
                    <h3>设备使用列表</h3> 
                </div>
                <div class="section-content" style="height:140px">
                                 
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

export default {
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
				callback: function(name, option, instance) {},
			});
			let dom = this.$refs.myEchart;
			this.chart = this.$echarts.init(dom);
			let dom1 = this.$refs.myEchart1;
			this.chart1 = this.$echarts.init(dom1);
			var option = {
				grid: [
					{
						x: '5%',
						y: '10%',
						width: '90%',
						height: '35%',
						containLabel: true,
					},
					{
						x: '5%',
						y: '60%',
						width: '90%',
						height: '35%',
						containLabel: true,
					},
				],
				xAxis: [
					{
						type: 'category',
						data: ['教育', '商用', 'i学', '其他'],
					},
					{
						gridIndex: 1,
						type: 'category',
						data: ['教育', '商用', 'i学', '其他'],
					},
				],
				yAxis: [
					{
						type: 'value',
						name: '在线人数分布',
						splitLine: {
							show: false,
						},
					},
					{
						type: 'value',
						gridIndex: 1,
						name: '在线设备分布',
						splitLine: {
							show: false,
						},
					},
				],
				series: [
					{
						name: '教育',
						type: 'bar',
						data: [320, 332, 301, 334],
						barGap: '10%',
						barWidth: '30%',
						xAxisIndex: 0,
						yAxisIndex: 0,
						itemStyle: {
							normal: {
								color: new this.$echarts.graphic.LinearGradient(
									0,
									0,
									0,
									1,
									[
										{
											offset: 0,
											color: '#00b0ff',
										},
										{
											offset: 0.8,
											color: '#7052f4',
										},
									],
									false
								),
							},
						},
					},
					{
						name: '教育',
						type: 'bar',
						data: [320, 332, 301, 334],
						barGap: '10%',
						barWidth: '30%',
						xAxisIndex: 1,
						yAxisIndex: 1,
						itemStyle: {
							normal: {
								color: '#f5aba3',
							},
						},
					},
				],
			};
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
						data: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00'],
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
						data: [79, 68, 56, 74, 89, 98, 84],
					},
				],
			};
			this.chart.setOption(option);
			this.chart1.setOption(option1);
			this.chart7 = this.$echarts.init(this.$refs.myEchart7);
			var option7 = {
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'cross',
						label: {
							backgroundColor: '#6a7985',
						},
					},
				},
				legend: {
					data: ['最高值', '最低值', '平均值'],
				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					top: '15%',
					containLabel: true,
				},
				xAxis: [
					{
						type: 'category',
						boundaryGap: false,
						data: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00'],
					},
				],
				yAxis: [
					{
						type: 'value',
						min: 0,
						max: 100,
						interval: 20,
					},
				],
				series: [
					{
						name: '最高值',
						type: 'line',
						smooth: true,
						showSymbol: false,
						areaStyle: { normal: {} },
						data: [40, 50, 30, 90, 65, 69, 90],
					},
					{
						name: '最低值',
						type: 'line',
						smooth: true,
						showSymbol: false,
						areaStyle: { normal: {} },
						data: [10, 5, 30, 45, 23, 39, 17],
					},
					{
						name: '平均值',
						type: 'line',
						smooth: true,
						showSymbol: false,
						label: {
							normal: {
								show: true,
								position: 'top',
							},
						},
						areaStyle: { normal: {} },
						data: [79, 68, 56, 74, 89, 98, 84],
					},
				],
			};
			this.chart7.setOption(option7);
			this.chart8 = this.$echarts.init(this.$refs.myEchart8);
			var option8 = {
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'cross',
						label: {
							backgroundColor: '#6a7985',
						},
					},
				},
				legend: {
					data: ['cpu', '内存'],
				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					top: '10%',
					containLabel: true,
				},
				xAxis: [
					{
						type: 'category',
						boundaryGap: false,
						data: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00'],
					},
				],
				yAxis: [
					{
						type: 'value',
						min: 0,
						max: 100,
						interval: 20,
					},
				],
				series: [
					{
						name: 'cpu',
						type: 'line',
						stack: '总量',
						smooth: true,
						showSymbol: false,
						lineStyle: {
							normal: {
								color: '#c23531',
							},
						},
						showSymbol: false,
						// areaStyle: {normal: {}},
						data: [40, 50, 30, 90, 65, 69, 90],
					},
					{
						name: '内存',
						type: 'line',
						smooth: true,
						showSymbol: false,
						lineStyle: {
							normal: {
								color: '#93d6ca',
							},
						},
						showSymbol: false,
						// areaStyle: {normal: {}},
						data: [10, 5, 30, 45, 23, 39, 17],
					},
				],
			};
			this.chart8.setOption(option8);
		});
	},
	data() {
		return {
			map: {},
			chart1: {},
		};
	},
	computed: {
		getShowSidebar() {
			return this.$store.state.showSideBar;
		},
	},
	watch: {
		// 如果 `question` 发生改变，这个函数就会运行
		getShowSidebar: function(newQuestion, oldQuestion) {
			this.map.resize();
		},
	},
	methods: {
		showMonth() {
			this.$nextTick(() => {
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
							data: ['08-01', '08-02', '08-03', '08-04', '08-05', '08-06', '08-07'],
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
							data: [79, 68, 56, 74, 89, 98, 84],
						},
					],
				};
				this.chart1.setOption(option1);
			});
		},
		showWeek() {},
		showYear() {},
		ss() {
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
		},
	},
};
</script>
<style lang='scss' scoped>
.driver-wrapper {
	height: 100%;
	// min-width: 1300px;
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
		}
	}
}
</style>