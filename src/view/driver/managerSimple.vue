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
		<div class="content">
			<div class="device-list-wrapper">
				<el-table :data="tableData" style="width: 100%">
					<el-table-column type="selection" width="55" > 全选</el-table-column>
					<el-table-column  label=''>
						<template slot-scope="scope">
							<div class="device">
								<div class="device-name">设备名称</div>
								<div class="device-status">空闲</div>
								<i class="iconfont icon-conference"></i>
								<!-- {{ scope.row.date }} -->
							</div>
						</template>
					</el-table-column>
				</el-table>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	created() {
		this.$store.commit('hide');
	},
	data(){
		return{
			tableData:[{id:1,},{id:2}]
		}
	}
};
</script>
<style lang='scss' scoped>
	.wrapper{
		height: 100%;
		background-color: #fff;
		.toolbar{
			padding: 10px;
			margin-left: 30px;
			border-bottom: 1px solid #f0f0f0;
		}
		.content{
			.device-list-wrapper{
				width: 300px;
				float: left;
			}
		}
	}
	.device{
		width: 200px;
		height: 150px;
		border:1px solid #e0e0e0;
		border-radius: 4px;
		.icon-conference{
			display: block;
			font-size: 60px;
			height: 100px;
			line-height: 100px;
			text-align: center
		}
		&.close{

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
