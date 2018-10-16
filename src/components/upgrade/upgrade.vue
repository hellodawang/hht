<template>
    <div class="upgrade-wrapper">
		<el-dialog title="升级" :visible.sync="showChooseVersion" center class="hht-dialog" :close-on-press-escape ='true'>
			<div class="dialog-content" >
				<span>请选择要升级的版本</span>
				<div v-for="item in updateVersion" :key="item.versionId" class="version-item">
					<el-radio v-model="chooseVersion" :label="item.versionId" >{{item.versionName}}</el-radio>	
				</div>
			</div>
			<span slot="footer" class="dialog-footer">
				<el-button type='primary' @click="confirmUpdate" size="mini">确 定</el-button>
			</span>
		</el-dialog>
		<el-dialog title="升级" :visible.sync="showUpdating" center class="hht-dialog" :close-on-press-escape ='true'>
			<div class="dialog-content" >
				<div class="table">  
					<div class="table-tr" v-for="item in updateStatus" :key="item.id"> 
						<div class="table-td" style="width:50%">{{item.clientCloudCode}}</div>
						<div class="table-td" style="width:50%"><el-progress :percentage="parseInt(item.progress) ||0"></el-progress></div>
						<div class="table-td" v-if='false'><i class="iconfont icon-stop"></i></div>  
					</div> 
				</div>
			</div>
			<span slot="footer" class="dialog-footer">
				<el-button type='primary'  @click="hideUpdate" size="mini">取消</el-button>
			</span>
		</el-dialog>
		<el-dialog title="升级" :visible.sync="showResult" center class="hht-dialog" :close-on-press-escape ='true'>
			<div class="dialog-content" >
				<div class="result">
					<div class="result-item success"><i class="iconfont icon-smile"></i><span class="result-num">{{updateOk}}台</span><div class="result-text">升级成功</div></div>
					<div class="result-item failed"><i class="iconfont icon-cry"></i><span class="result-num">0台</span><div class="result-text">升级失败</div></div>
					<div class="result-item stop"><i class="iconfont icon-face"></i><span class="result-num">0台</span><div class="result-text">升级终止</div></div>
				</div>
				<div style="width:80%;margin:20px auto 0" v-if="false">
					<h5 style="font-weight:500;line-height:1.8em">失败列表</h5>
					<div class="table">  
						<div class="table-tr"> 
							<div class="table-td" style="width:30%">序号</div>
							<div class="table-td" style="width:70%">失败原因</div>  
						</div>
						<div class="table-tr" v-for="item in failedList" :key="item.num"> 
							<div class="table-td" style="width:30%">{{item.num}}</div>
							<div class="table-td" style="width:70%">{{item.reason}}</div>  
						</div> 
					</div>
				</div>
			</div>
			<span slot="footer" class="dialog-footer">
				<el-button type='primary'  size="mini"> 导出</el-button>
				<el-button type='primary'  size="mini" @click="confirmResult"> 确定</el-button>	
			</span>
		</el-dialog>
    </div>
</template>

<script>
export default {
    props: ['data'],
    data() {
        return {
            updateVersion: [],
			updateStatus: [],
            showChooseVersion: true,
			showUpdating: false,
			showResult:false,
			chooseVersion: -1,
			updateProgressHandle: null,
			failedList:[{num:'122335',reason:'失败原因我不知道'},{num:'122335',reason:'失败原因我不知道'},{num:'122335',reason:'失败原因我不知道'},],
			updateOk: 0,	// 升级成功的数量
        };
    },
    methods: {
        confirmUpdate() {
			if (this.chooseVersion == -1) {
				this.$alert('请选择一固件版本！', {confirmButtonText: '确定'});
				return
			}
			this.showChooseVersion = false;
			this.showUpdating = true;
			let data = {
				clientCloudCodeList: this.data.map(v => v.deviceID),
				versionId: this.chooseVersion
			}
			this.$axios
				.post("/terminalweb/terminalReport/submitUpgrade", data, { responseType: "json" })
					.then(res => {
						if(res.data.code == '0000'){
							this.updateStatus = res.data.data;
							this.updateProgress()	
						}else if(res.data.code == '6002'){
							this.$alert('该设备已下载完成，设备正在升级中，请稍后再试！',{confirmButtonText: '确定'})
							this.showUpdating = false;
							this.showChooseVersion = true //false;
						}
						
					})
					.catch(function(error) {
						console.log(error);
					});
			},
		cancelUpdate() {
			this.$emit('cancelUpdate', this.updateProgressHandle)
		},
		hideUpdate() {
			this.$emit('hideUpdate', this.updateProgressHandle)
		},
		updateProgress() {
			let cloudCode = this.data.map(v => v.deviceID)
			this.$axios
			.post("/terminalweb/terminalReport/upgradeProgrs", {clientCloudCodeList: cloudCode}, { responseType: "json" })
				.then(res => {
					if (res.data.code != 0) {
						return console.log("get data error: ", res.message);
					}
					this.updateStatus = res.data.data.progressList;
					let remains = res.data.data.progressList.filter(v => parseInt(v.progress) < 100)
					// console.log('remain devices: ', remains)
					if (!remains[0]) {
						this.showUpdating = false
						this.showResult = true
						this.updateOk = cloudCode.length
						console.log('upgrade finished')
						return
					}
					// 当隐藏升级对话框时，请求更新进度
					if (!this.showUpdating) return
					console.log('this.showUpdating: ', this.showUpdating)
					this.updateProgressHandle = setTimeout(this.updateProgress.bind(this), 1000)
				})
				.catch(function(error) {
					console.log(error);
				});
		},
		confirmResult(){
			this.$emit('completed')
			this.showChooseVersion = false;
		}
	},
	created() {
		let deviceID = this.data.map(v => v.deviceID)
		this.$axios
			.post("/terminalweb/terminalReport/firmware", {clientCloudCodeList: deviceID}, { responseType: "json" })
			.then(res => {
				if (res.data.code == '0000') {
					this.updateVersion = res.data.data.versionList;	
				}else if(res.data.code == '6002'){
					let list = res.data.data.versionList.map(v => v.clientCloudCode);
					this.$alert('设备'+list.join(',')+'已下载完成，设备正在升级中，请稍后再试！',{confirmButtonText: '确定'})
					this.showUpdating = false;
					this.showChooseVersion = true //false;
				}else{
					return console.err(res)
				}
			})
			.catch(function(error) {
				console.log(error);
			});
	},
}
</script>

<style lang="scss" scoped>
.upgrade-wrapper{
	.version-item{
		margin: 15px 0
	}
	.result{
		text-align: center;
		.result-item{
			display: inline-block;
			margin: 10px 20px;
			.iconfont{
				font-size: 40px;
				margin-right: 10px;
			}
			.result-num{
				font-size: 20px;
			}
			.result-text{
				font-size: 14px;
				margin-top: 10px;
			}
			&.success{
				color: #67C23A
			}
			&.failed{
				color: #F56C6C
			}
			&.stop{
				color: #909399
			}
		}
	}
}

.table {
	display: table;
	width: 100%;
	border-collapse: collapse;
	font-size: 14px;
}

.table-tr {
	display: table-row;
	height: 30px;
}
.table-th {
	display: table-cell;
	font-weight: bold;
	height: 100%;
	// text-align: center;
	vertical-align: middle;
}
.table-td {
	display: table-cell;
	height: 100%;
	line-height: 2.8em;
	.icon-stop {
		font-size: 20px;
	}
}
</style>
