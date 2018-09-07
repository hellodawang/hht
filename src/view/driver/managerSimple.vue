<template>
    <div class="wrapper">
		<div class="toolbar">
			<el-button size="mini">日志导出</el-button>
			<el-button size="mini">配置导入</el-button>
			<el-button size="mini">配置导出</el-button>
			<el-button size="mini">升级</el-button>
			<el-button size="mini">重启</el-button>
			<el-button size="mini">关机</el-button>
		</div>
		<div class="content clearfix">
			<div class="device-list-wrapper">
				<el-table :data="tableData" style="width: 100%">
					<el-table-column type="selection" width="35" > 全选</el-table-column>
					<el-table-column  label=''>
						<template slot-scope="scope">
							<div class="device" :class="{busy:scope.row.status=='忙碌',close:scope.row.status=='未开机',available:scope.row.status=='空闲',current: current==scope.row.id}" @click="changeCurrent(scope.row.id)">
								<div class="device-name">设备名称: {{scope.row.deviceName}}</div>
								<div class="device-status">{{scope.row.status}}</div>
								<i class="iconfont icon-conference" ></i>
							</div>
						</template>
					</el-table-column>
				</el-table>
			</div>
			<div class="device-other-info-wrapper"> 
				<!-- <div class="device-other-info"> -->
					<el-row class="device-other-info">
						<el-col :span='12' class="col">
							<div class="section">
								<h5>基础信息</h5>

							</div>
							<div class="section">
								<chart :period='period1'>
									<div ref="useRatio" style="height:300px"></div>
								</chart>
							</div>
						</el-col>
						<el-col :span='12' class="col">
							<div class="section"></div>
							<div class="section"></div>
						</el-col>
					</el-row>
			</div>	
		</div>
	</div>
</template>
<script>
import chart from '../../components/chart/chart1';
export default {
	// created() {
	// 	this.$store.commit('hide');
	// },
	data(){
		return{
			tableData:[{id:1,deviceName:'XC_1234568',status:'未开机'},
				{id:2,deviceName:'XC_1234568',status:'忙碌'},
				{id:3,deviceName:'XC_1234568',status:'空闲'},
				{id:4,deviceName:'XC_1234568',status:'空闲'},
				{id:5,deviceName:'XC_1234568',status:'空闲'},
				{id:6,deviceName:'XC_1234568',status:'空闲'},
			],
			current:null,
			period1:'week',
			useRatio:null,
		}
	},
	mounted() {
		this.current = this.tableData[0].id;
		this.useRatio = this.$echarts.init(this.$refs.useRatio)
		this.$nextTick(()=>{
			this.useRatio.setOption({
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
						data:['2018-01', '2018-02', '2018-03', '2018-04', '2018-05', '2018-06', '2018-07', '2018-08', '2018-09', '2018-10', '2018-11', '2018-12']
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
						data: [79, 68, 56, 74, 89, 98, 84,12,56,23,33,67]
					},
				],
			})	
		})
		
	},
	methods:{
		changeCurrent(id){
			this.current = id
		}
	},
	components:{
		chart
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
					.col{
						height: 100%;
						.section{
							height: 50%;
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
