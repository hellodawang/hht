<template>
    <div class="wrapper">
		<div class="toolbar">
			<el-button size="mini">日志导出</el-button>
			<el-button size="mini">配置导入</el-button>
			<el-button size="mini">配置导出</el-button>
			<el-button size="mini" @click="update" >升级</el-button>
			<el-button size="mini">重启</el-button>
			<el-button size="mini">关机</el-button>
		</div>
		<div class="content clearfix">
			<!-- 侧边列表 -->
			<div class="device-list-wrapper">
				<el-table :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
					<el-table-column type="selection" width="35" label="全选"></el-table-column>
					<el-table-column  label=''>
						<template slot-scope="scope">
							<div class="device" :class="{busy:scope.row.status=='忙碌',close:scope.row.status=='离线',available:scope.row.status=='空闲',current: currentId==scope.row.id}" @click="changeCurrent(scope.row.id)">
								<div class="device-name">设备名称: {{scope.row.deviceName}}</div>
								<div class="device-status">{{scope.row.status}}</div>
								<i class="iconfont icon-conference" ></i>
							</div>
						</template>
					</el-table-column>
				</el-table>
			</div>
			<!-- 右边图表信息 -->
			<div class="device-other-info-wrapper"> 
				<el-row class="device-other-info">
					<el-col :span='12' class="col">
						<div class="section">
							<h5>基础信息</h5>
							<el-row class="basic-info">
								<el-col :span="12">
									<!-- <h5>软件信息：</h5> -->
									<div class="info-item"><span class="info-item-label">类型</span> <span class="info-item-text">{{current ? current.category : ''}}</span></div>
									<div class="info-item"><span class="info-item-label">设备编号</span> <span class="info-item-text">{{current ? current.id : ''}}</span></div>
									<div class="info-item"><span class="info-item-label">规格</span> <span class="info-item-text">{{current ? current.model : ''}}</span></div>
									<div class="info-item"><span class="info-item-label">云识别号</span> <span class="info-item-text">{{current ? current.clientCloudCode : ''}}</span></div>
									<div class="info-item"><span class="info-item-label">固件版本</span> <span class="info-item-text">{{current ? current.firmware : ''}}</span></div>
									<div class="info-item"><span class="info-item-label">升级时间</span> <span class="info-item-text">{{current ? current.lastUpgrade : ''}}</span></div>
								</el-col>
								<el-col :span="12">
									<!-- <h5>硬件信息：</h5> -->
									<div class="info-item"><span class="info-item-label">客户名</span> <span class="info-item-text">{{current ? current.customer : ''}}</span></div>
									<div class="info-item"><span class="info-item-label">销售日期</span> <span class="info-item-text">{{current ?current.saleDate : ''}}</span></div>
									<div class="info-item"><span class="info-item-label">配置清单</span> <span class="info-item-text">{{current ?current.manifest : ''}}</span></div>
									<div class="info-item"><span class="info-item-label">所在城市</span> <span class="info-item-text">{{current ?current.location : ''}}</span></div>
									<div class="info-item"><span class="info-item-label">最近开机</span> <span class="info-item-text">{{current ?current.lastBoot : ''}}</span></div>
									<div class="info-item"><span class="info-item-label">配置时间</span> <span class="info-item-text">{{current ?current.lastConfig : ''}}</span></div>
								</el-col>
							</el-row>
						</div>				
						<div class="section">
							<h5>使用率</h5>
							<device-usage style="heigth:250px" :cloudCode='current.clientCloudCode' />
						</div>
					</el-col>
					<el-col :span='12' class="col">
						<div class="section">
							<h5>使用时长</h5>
							<running-time  style="height:250px" :cloudCode='current.clientCloudCode' />
						</div>
						<div class="section">
							<h5>异常统计</h5>
							<exception-stats  style="height:250px" :cloudCode='current.clientCloudCode' />
						</div>
					</el-col>
				</el-row>
			</div>	
		</div>
		<upgrade :data="selectedDevice" @cancelUpdate="showUpdating = false" @hideUpdate="hideUpdate" v-if="showUpdating" />
	</div>
</template>
<script>
import chart from '../../components/chart/chart1';
import runningTime from './runningTime'
import deviceUsage from './deviceUsage'
import exceptionStats from './exceptionStats'
import upgrade from '../../components/upgrade/upgrade'

export default {
	components: {
		chart,
		runningTime,
		deviceUsage,
		exceptionStats,
		upgrade
	},
	beforeCreate() {
		this.$axios
			.get("/term/list", { responseType: "json" })
			.then(res => {
				if (res.data.code != 0) {
				return console.log("get data error: ", res.message);
				}
				this.$nextTick(()=>{
					this.tableData = res.data.data
					this.currentId = this.tableData[0].id
				})
			})
			.catch(function(error) {
				console.log(error);
			});
	},
	data(){
		return{
			// runningTimeData:{
			// 	onlineDateType:2,
			// 	dateList:[ 
			// 		{"dayDate":"2018-9-6", "hour":"5",},
			// 		{"dayDate":"2018-9-7","hour":"1",},
			// 		{"dayDate":"2018-9-8","hour":"4",},
			// 		{"dayDate":"2018-9-9","hour":"6",},
			// 		{"dayDate":"2018-9-10","hour":"3",},
			// 	]
			// },
			// deviceUsageData:{
			// 	onlineDateType:3,
			// 	dateList:[ 
			// 		{"dayDate":"2018-9-6", "employRate":"5", "busyRate":"6"},
			// 		{"dayDate":"2018-9-7","employRate":"1","busyRate":"2"},
			// 		{"dayDate":"2018-9-8","employRate":"4","busyRate":"2"},
			// 		{"dayDate":"2018-9-9","employRate":"6","busyRate":"2"},
			// 		{"dayDate":"2018-9-10","employRate":"3","busyRate":"2"},
			// 	]
			// },
			// exceptionData:{
			// 	onlineDateType:1,
			// 	exceptionList:[
			// 		{exceptionNum:4,exceptionDecs:'升级异常' },
			// 		{exceptionNum:5,exceptionDecs:'日志上传异常' },
			// 		{exceptionNum:4,exceptionDecs:'配置导出异常' },
			// 		{exceptionNum:10,exceptionDecs:'关机异常' },
			// 	]
			// },
			tableData: [],
			currentId: '',
			useRatio:null,
			useRatio2:null,
			selectedDevice:[],
			showUpdating: false,
		}
	},
	computed: {
		current(){
			return this.tableData.filter(v => v.id == this.currentId)[0] || this.tableData[0] || {}
		}
	},
	methods:{
		changeCurrent(id){
			this.currentId = id
			// 右边数据更新 ajax请求
			this.deviceUsageData = {
				onlineDateType:1,
				dateList:[ 
					{"dayDate":"2018-9-6", "employRate":"8", "busyRate":"6"},
					{"dayDate":"2018-9-7","employRate":"2","busyRate":"2"},
					{"dayDate":"2018-9-8","employRate":"3","busyRate":"2"},
					{"dayDate":"2018-9-9","employRate":"5","busyRate":"2"},
					{"dayDate":"2018-9-10","employRate":"1","busyRate":"2"},
				]
			}
		},
		handleSelectionChange(val){
			this.selectedDevice = val
		},
		update() {
			// this.showChooseVersion = true;
			if (this.selectedDevice.length == 0) {
				// this.openMessage('请至少选中一台设备！')
				this.$alert('请至少选中一台设备！', {confirmButtonText: '确定'});
				return
			}
			let offline = this.selectedDevice.filter(v => v.status == '离线')
			if (offline[0]) {
				this.$alert('不能选择升级离线设备', {confirmButtonText: '确定'})
				return
			}
			this.showUpdating = true
		},
		hideUpdate() {
			this.$confirm('关闭后将无法查看升级进度和结果, 是否继续?', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.showUpdating = false
				}).catch((e) => console.log(e))
		},
	}
};
</script>
<style lang='scss' scoped>
	.wrapper{
		height: 100%;
		background-color: #fff;
		position: relative;
		.toolbar{
			padding: 10px;
			margin-left: 30px;
			border-bottom: 1px solid #f0f0f0;
		}
		.content{
			position: absolute;
			left: 0;
			top: 50px;
			bottom: 0;
			right: 0;
			.device-list-wrapper{
				width: 320px;
				float: left;
				height: 100%;
				overflow-y: scroll;
			}
			.device-other-info-wrapper{
				height: 100%;
				margin-left: 320px;
				padding: 20px;
				.device-other-info{
					height: 100%;
					border:1px solid #cfcfcf;
					border-radius: 4px;
					padding: 10px 40px;
					.col{
						height: 100%;
						.section{
							height: 50%;
							// padding: 0 30px;
							h5{
								text-align: center;
								color: #333;
								margin-top: 10px;
								// line-height: 30px;
							}
							.basic-info{
								h5{
									font-weight: 500;
									margin-top: 40px;
									margin-bottom: 10px;
								}
								.info-item{
									line-height: 30px;
									font-size: 12px;
									.info-item-label{
										display: inline-block;
										width: 25%;
										text-align: right;
										margin-right: 20px;
									}
									.info-item-text{
										display: inline-block;
										width: 60%;
									}
								}
							}
						}
					}
				}
			}
		}
	}
	.device{
		width: 250px;
		height: 160px;
		border:1px solid #e0e0e0;
		border-radius: 4px;
		padding:5px 10px;
		margin: 2px 0;
		cursor: pointer;
		.icon-conference{
			display: block;
			font-size: 80px;
			height: 100px;
			line-height: 100px;
			text-align: center
		}
		.device-status{
			position: relative;
			margin-left: 20px;
			font-size: 14px;
			line-height: 30px;
			&::before{
				position: absolute;
				content: '';
				width: 10px;
				height: 10px;
				left: -15px;
				top: 10px;
				border-radius: 50%;
			}
		}
		&.close{
			.device-status{
				&::before{
					background-color: #999;
				}
			}
			.icon-conference{
				color: #999
			}
		}
		&.busy{
			.device-status{
				&::before{
					background-color: #f00;
				}
			}
			.icon-conference{
				color: #409eff
			}
		}
		&.available{
			.device-status{
				&::before{
					background-color: #67c23a;
				}
			}
			.icon-conference{
				color: #67c23a
			}
		}
		&.current{
			box-shadow: 0 0 5px #409eff
		}
	}
	
</style>
<style>
	.el-table--enable-row-hover .el-table__body tr:hover>td{
		background-color: #fff;
	}
	.el-table td, .el-table th.is-leaf{
		border:0
	}

</style>
