<template>
    <div class="deviceInfo-wrapper">
        <!-- <h3 class="deviceInfo-title">设备信息</h3> -->
        <div class="deviceInfo-content">
            <div class="deviceInfo-section">
				<div class="deviceInfo-list">
					<div class="toolbar">
						<el-button size="mini" @click="logExport">日志导出</el-button>
						<el-button size="mini" @click="importSetting">配置导入</el-button>
						<el-button size="mini" @click="settingExport">配置导出</el-button>
						<el-button size="mini" @click="update">升级</el-button>
						<el-button size="mini" @click="restart">重启</el-button>
						<el-button size="mini" @click="restoreDefault">恢复初始定义</el-button>
						<el-input
							placeholder="请输入内容"
							v-model="search" size="mini" style="width:200px">
							<i slot="prefix" class="el-input__icon el-icon-search"></i>
						</el-input>
					</div>
					<el-table ref="multipleTable" :data="tableData" @selection-change="handleSelectionChange" tooltip-effect="dark"
                  		:highlight-current-row='true' class="deviceTable" height="100%" @row-click='selectedRow' > 
						<el-table-column type="selection" width="55"> </el-table-column> 
						<el-table-column prop="deviceName" label=" 设备名称"> </el-table-column> 
						<el-table-column prop="clientCloudCode" label="云识别号"> </el-table-column> 
						<el-table-column prop="model" label="型号"> </el-table-column> 
						<el-table-column prop="customer" label="客户名" show-overflow-tooltip></el-table-column>
						<!-- <el-table-column prop="firmware" label="固件版本" show-overflow-tooltip></el-table-column> -->
						<el-table-column prop="category" label="产品类别" show-overflow-tooltip></el-table-column>
						<el-table-column prop="status" label="在线状态" show-overflow-tooltip></el-table-column>
					</el-table>
					 <ul class="list-shortcut">
						<li v-for="(item,index) in ss" :key="index"  ref="item" :class="{current:current==index}" @click="gotoChar(item,index)">{{item}}</li>
					</ul>
				</div>
                <div class="deviceInfo-more" style="margin-left:990px;height:100%;background-color:#fff">
					<h5>设备信息</h5>
					<div class="deviceInfo-more-content">
						<div class="info-item"><span class="info-item-label">类型</span> <span class="info-item-text">{{selected.category}}</span></div>
						<div class="info-item"><span class="info-item-label">设备编号</span> <span class="info-item-text">{{selected.clientCloudCode}}</span></div>
						<div class="info-item"><span class="info-item-label">规格</span> <span class="info-item-text">{{selected.model}}</span></div>
						<div class="info-item"><span class="info-item-label">云识别号</span> <span class="info-item-text">{{selected.clientCloudCode}}</span></div>
						<div class="info-item"><span class="info-item-label">固件版本</span> <span class="info-item-text">{{selected.firmware}}</span></div>
						<div class="info-item"><span class="info-item-label">升级时间</span> <span class="info-item-text">{{selected.lastUpgrade}}</span></div>
					</div>
				</div>
            </div>  
        </div> 
		<upgrade :data="selectedDevice" @cancelUpdate="showUpdating = false" @hideUpdate="hideUpdate" v-if="showUpdating" @completed='completed' />
		<el-dialog title="配置导入" :visible.sync="dialogTableVisible">
			<el-upload
				class="upload-demo"
				action="https://jsonplaceholder.typicode.com/posts/"
				:file-list="fileList" :auto-upload="false" :on-change='fileChange'>
				<el-button size="small" type="primary"  slot="trigger">选择文件</el-button>
				<el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
				<div slot="tip" class="el-upload__tip">只能上传excel文件，且不超过500kb</div>
			</el-upload>
		</el-dialog>
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
			selected:{},
			ss:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
			current:0,
			dialogTableVisible:false,
			fileList:[]
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
			// this.showChooseVersion = true
			this.showUpdating = true
		},
		restart() {},
		restoreDefault() {},
		handleSelectionChange(val) {
			this.selectedDevice = val
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
		completed(){
			this.showUpdating = false
		},
		selectedRow(row, event, column){
			this.selected = row
		},
		gotoChar(char,index){
            this.current = index;
			// 查询以当前选中字母开头的数据
		},
		importSetting(){
			if (this.selectedDevice.length == 0) {
				this.$alert('请至少选中一台设备！', {confirmButtonText: '确定'});
				return
			}
			this.dialogTableVisible = true
		},
		fileChange(file, fileList){
			this.fileList.push(file)
		},
		submitUpload(){
			if(this.fileList.length == 0){
				this.$alert('请先添加文件',{confirmButtonText: '确定'})
				return
			}
			this.$confirm('是否确定上传?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
				}).then(() => {
					// 点击确定后回调
					this.$message({
						type: 'info',
						message: '上传成功'
					});
					this.dialogTableVisible = false
				}).catch(() => {
				this.$message({
					type: 'info',
					message: '已取消上传'
				});          
			});
		},
		logExport(){
			if (this.selectedDevice.length == 0) {
				this.$alert('请至少选中一台设备！', {confirmButtonText: '确定'});
				return
			}
		},
		settingExport(){
			if (this.selectedDevice.length == 0) {
				this.$alert('请至少选中一台设备！', {confirmButtonText: '确定'});
				return
			}
		}
	},
	mounted() {
		this.$axios
			.get("/term/list", { responseType: "json" })
			.then(res => {
				if (res.data.code != 0) {
				return console.log("get data error: ", res.message);
				}			
				this.$nextTick(()=>{
					this.tableData = res.data.data
					this.selected = this.tableData[0]
					this.$refs.multipleTable.setCurrentRow(this.tableData[0]);
				})								
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
		padding: 0 15px 0 0;
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
				padding-top: 50px
			}
			.deviceInfo-section-title {
				line-height: 30px;
				text-indent: 2em;
			}	
			.list-shortcut{
				position: absolute;
				top: 100px;
				right: 10px;
				width: 20px;
				text-align: center;
				line-height: 1.8em;
				font-size: 14px;
				color: #999;
				li{
					width: 25px;
					height: 25px;
					cursor: pointer;
					&.current{
						border-radius: 50%;
						background-color: #ccc;
						color: #fff;
					}
				}
			}
		}
		.deviceInfo-more{
			padding: 20px;
			h5{
				color: "#f66";
				font-weight: 500;
				line-height: 1.8em;
			}
			.deviceInfo-more-content{
				.info-item{
					font-size: 12px;
					line-height: 2em;
					.info-item-label{
						display: inline-block;
						width: 40%;
						text-align: right;
						margin-right: 20px;
					}
					.info-item-text{
						display: inline-block
					}
				}
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
  