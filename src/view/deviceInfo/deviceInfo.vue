<template>
    <div class="deviceInfo-wrapper">
        <!-- <h3 class="deviceInfo-title">设备信息</h3> -->
        <div class="deviceInfo-content">
            <div class="deviceInfo-section">
				<div class="deviceInfo-list">
					<div class="toolbar">
						<el-button size="mini">日志导出</el-button>
						<el-button size="mini">配置导入</el-button>
						<el-button size="mini">配置导出</el-button>
						<el-button size="mini" @click="update">升级</el-button>
						<el-button size="mini" @click="restart">重启</el-button>
						<el-button size="mini" @click="restoreDefault">恢复初始定义</el-button>
						<el-input
							placeholder="请输入内容"
							v-model="search" size="mini" style="width:200px">
							<i slot="prefix" class="el-input__icon el-icon-search"></i>
						</el-input>
					</div>
					<el-table ref="multipleTable" :data="tableData" @selection-change="handleSelectionChange" tooltip-effect="dark"  class="deviceTable" height="100%"> 
						<el-table-column type="selection" width="55"> </el-table-column> 
						<el-table-column prop="clientCloudCode" label="云识别号"> </el-table-column> 
						<el-table-column prop="model" label="型号"> </el-table-column> 
						<el-table-column prop="customer" label="客户名" show-overflow-tooltip></el-table-column>
						<el-table-column prop="firmware" label="固件版本" show-overflow-tooltip></el-table-column>
						<el-table-column prop="category" label="产品类别" show-overflow-tooltip></el-table-column>
						<el-table-column prop="status" label="在线状态" show-overflow-tooltip></el-table-column>
					</el-table>
				</div>
                <div class="deviceInfo-more" style="margin-left:990px;height:100%;background-color:#fff">
				</div>
            </div>  
        </div> 
		<upgrade :data="selectedDevice" @cancelUpdate="showUpdating = false" @hideUpdate="hideUpdate" v-if="showUpdating" />
    </div>
</template>
<script>
import upgrade from '../../components/upgrade/upgrade'

export default {
	components: {
		upgrade,
	},
	data() {
		return {
			tableData: [
			],
			search: '',
			chooseVersion: '',
			selectedDevice: [],
			showChooseVersion: false,
			showUpdating: false,
			showAlert: false,
		};
	},
	methods: {
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
			console.log('selected:', this.selected)
			this.showUpdating = true
		},
		// confirmUpdate() {
		// 	this.showChooseVersion = false;
		// 	this.showUpdating = true;
		// },
		restart() {},
		restoreDefault() {},
		handleSelectionChange(val) {
			this.selectedDevice = val
			// console.log('selected devices: ', val)
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
	},
	beforeCreate() {
		this.$axios
			.get("/term/list", { responseType: "json" })
			.then(res => {
				if (res.data.code != 0) {
				return console.log("get data error: ", res.message);
				}
				this.tableData = res.data.data
				this.current = this.tableData[0]
				// console.log('device data: ', this.tableData)
			})
			.catch(function(error) {
				console.log(error);
			});
	},
};
</script>
<style lang='scss' scoped>
.deviceInfo-wrapper {
	height: 100%;
	.deviceInfo-title {
		line-height: 40px;
		font-size: 12px;
		text-indent: 1em;
	}
	.deviceInfo-content {
		padding: 0 15px;
		height: 100%;
	}
	.deviceInfo-section {
		height: 100%;
		border-radius: 4px;
		.deviceInfo-list{
			height: 100%;
			background-color: #fff;
			padding-bottom: 10px;
			position: relative;
			width: 980px;
			overflow: hidden;
			float: left;
			.toolbar {
				position: absolute;
				top: 0;
				left: 0;
				padding: 20px 0 10px 10px;
				z-index: 999;
				background-color: #fff;
			}
			.deviceTable{
				height: 100%;
				overflow-y: scroll;
				padding-top: 50px
			}
			.deviceInfo-section-title {
				line-height: 30px;
				text-indent: 2em;
			}	
		}
		
	}
	.demo-table-expand {
		font-size: 0;
		.el-form-item {
			margin-right: 0;
			margin-bottom: 0;
			width: 50%;
			.el-form-item__label {
				width: 90px;
				color: #99a9bf;
			}
		}
	}
}
.deviceInfo-wrapper .el-table td, .el-table th.is-leaf{
	border-bottom: none
}
.deviceInfo-wrapper .el-table::before{
	background-color: #fff
}
.table-text {
	width: 90px;
	text-align: left;
	padding-right: 20px;
	color: #99a9bf;
}
</style>  
 <style>
 .deviceInfo-wrapper .el-table td, .el-table th.is-leaf{
	border-bottom: none
}
 </style>
  