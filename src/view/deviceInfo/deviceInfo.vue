<template>
    <div class="deviceInfo-wrapper">
        <!-- <h3 class="deviceInfo-title">设备信息</h3> -->
        <div class="deviceInfo-content">
            <div class="deviceInfo-section">
				<el-row>
					<el-col :span="17">
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
								<el-table-column prop="model" label="型号"> </el-table-column> 
								<el-table-column prop="customer" label="客户名" show-overflow-tooltip></el-table-column>
								<el-table-column prop="location" label="所在地" show-overflow-tooltip></el-table-column>
								<el-table-column prop="lastUpgradeDate" label="上次更新时间" show-overflow-tooltip></el-table-column>
								<el-table-column prop="status" label="状态" show-overflow-tooltip></el-table-column>
							</el-table>
							<ul class="list-shortcut">
								<li v-for="(item,index) in ss" :key="index"  ref="item" :class="{current:current==index}" @click="gotoChar(item,index)">{{item}}</li>
							</ul>
						</div>
					</el-col>
					<el-col :span="7">
						<div class="deviceInfo-more" >
							<h5>设备详细信息:</h5>
							<div class="deviceInfo-more-content">
								<div class="info-item"><span class="info-item-label">设备编号</span> <span class="info-item-text">{{selected.category}}</span></div>
								<div class="info-item"><span class="info-item-label">cpu品牌</span> <span class="info-item-text">{{selected.cpuModel}}</span></div>
								<div class="info-item"><span class="info-item-label">ops型号</span> <span class="info-item-text">{{selected.opsCpuModel}}</span></div>
								<div class="info-item"><span class="info-item-label">ops系统</span> <span class="info-item-text">{{selected.opsSystem}}</span></div>
								<!-- <div class="info-item"><span class="info-item-label">云识别号</span> <span class="info-item-text">{{selected.clientCloudCode}}</span></div> -->
								<div class="info-item"><span class="info-item-label">硬盘容量</span> <span class="info-item-text">{{selected.hardDiskSize}}</span></div>
							</div>
						</div>		
					</el-col>
				</el-row>    
            </div>  
        </div> 
		<upgrade :data="selectedDevice" @cancelUpdate="showUpdating = false" @hideUpdate="hideUpdate" v-if="showUpdating" @completed='completed' />
		<el-dialog title="配置导入" :visible.sync="dialogTableVisible">
			<el-upload
				class="upload-demo"
				ref="uploadConfig"
				action="/upload/config"
				name="config"
				:data="clientCloudCodeSelected"
				:on-success="configUploaded"
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
	computed: {
		clientCloudCodeSelected() {
			return {clientCloudCode: JSON.stringify(this.selectedDevice.map(v => v.clientCloudCode))}
		}
	},
	methods: {
		update() {
			if (this.selectedDevice.length == 0) {
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
		restart() {},
		restoreDefault() {},
		handleSelectionChange(val) {
			this.selectedDevice = val
		},
		hideUpdate(timer) {
			this.$confirm('关闭后将无法查看升级进度和结果, 是否继续?', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.showUpdating = false
					// console.log('timer: ', typeof timer)
					clearTimeout(timer)
				}).catch((e) => console.log(e))
		},
		completed(){
			this.showUpdating = false
		},
		selectedRow(row, event, column){
			this.$axios.post('/terminalweb/terminalReport/terminalInfo',{clientCloudCode:row.deviceID})
						.then(res =>{
							if(res.data.code== '0000'){
								this.selected = res.data.data.terminalBaseModel
							}
						})		
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
			if (this.selectedDevice.filter(v => v.status == '离线')[0]) {
				this.$alert('不能选择离线设备', {confirmButtonText: '确定'})
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
					this.$refs.uploadConfig.submit()
					// this.$message({
					// 	type: 'info',
					// 	message: '上传成功'
					// });
					// this.dialogTableVisible = false
				}).catch(() => {
				this.$message({
					type: 'info',
					message: '已取消上传'
				});          
			});
		},
		configUploaded() {
			this.dialogTableVisible = false
		},
		logExport(){
			if (this.selectedDevice.length == 0) {
				return this.$alert('请至少选中一台设备！', {confirmButtonText: '确定'}).catch(e => console.log(e));
			}
			let codeSelected = this.selectedDevice.map(v => v.deviceID)
			this.$axios.post('/logweb/logserver/exportlog', codeSelected ,{responseType: "blob"})
				.then((res)=>{
					let filename = res.headers['content-disposition'].split('=')[1] || 'deviceLog.xlsx'
					// console.log('export log data: ', res)
					if (!window.URL) {
						return navigator.msSaveBlog(res.data, filename)
					}
					let logLink = document.createElement('a')
					logLink.download = filename
					logLink.href = URL.createObjectURL(res.data)
					document.body.appendChild(logLink)
					logLink.click()
					URL.revokeObjectURL(logLink.href)
					document.body.removeChild(logLink)
				})
				.catch(e => console.log('log export error: ', e))
		},
		settingExport(){
			if (this.selectedDevice.length == 0) {
				return this.$alert('请至少选中一台设备！', {confirmButtonText: '确定'}).catch(e => console.log(e));
			}
			let codeSelected = this.selectedDevice.map(v => v.clientCloudCode)
			let qs = 'clientCloudCode=' + codeSelected.join('&' + 'clientCloudCode=')
			let settingLink = document.createElement('a')
			settingLink.style.display = 'none'
			console.log(qs)
			settingLink.href = '/web/exportProfile' + '?' + qs
			settingLink.click()
			document.body.removeChild(settingLink)
		}
	},
	mounted() {
		this.$axios
			.post("/terminalweb/terminalManger/querydevicelist", { responseType: "json" })
			.then(res => {
				if (res.data.code != 0) {
				return console.log("get data error: ", res.message);
				}			
				this.tableData = res.data.data.deviceList
				this.selected = this.tableData[0]
				this.$refs.multipleTable.setCurrentRow(this.tableData[0]);
				this.$axios.post('/terminalweb/terminalReport/terminalInfo',{clientCloudCode:this.selected.deviceID})
						.then(res =>{
							if(res.data.code== '0000'){
								this.selected = res.data.data.terminalBaseModel
							}
						})							
			})
			.catch(function(error) {
				console.error(error);
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
		padding: 0 5px 0 0;
		height: 100%;
	}
	.deviceInfo-section {
		height: 100%;
		border-radius: 4px;
		.el-row{
			height: 100%;
			.el-col{
				height: 100%;
			}
		}
		.deviceInfo-list{
			height: 100%;
			background-color: #fff;
			padding-bottom: 10px;
			position: relative;
			overflow: hidden;
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
			padding: 10px;
			margin-left: 10px;
			background-color: #fff;
			height: 100%;
			h5{
				color: "#f66";
				font-weight: 500;
				line-height: 1.8em;
				text-indent: 2em;
			}
			.deviceInfo-more-content{
				.info-item{
					font-size: 12px;
					line-height: 2em;
					.info-item-label{
						display: inline-block;
						width: 30%;
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
  