<template>
    <div>
        <div class="modal-wrapper" v-if="showChooseVersion">
			<div class="modal">
				<div class="modal-header">
					<h3 class="modal-header-title">升级</h3>
					<i class="el-icon-close" @click="cancelUpdate"></i>
				</div>
				<div class="modal-body" v-if="updateVersion.length">
					<span>请选择要升级的版本</span>
					<div v-for="(item, index) in updateVersion" :key="item.id" class="version-item">
						<el-radio v-model="chooseVersion" :label="index" >{{item.versionName}}</el-radio>	
					</div>					
				</div>
				<div class="modal-body" v-else>
					<span>没有合适的可供升级的版本</span>
				</div>
				<div class="btn-group">
					<el-button type='primary' class="btn-confirm" @click="confirmUpdate" size="mini">确 定</el-button>	
				</div>
				
			</div>
		</div>
		<div class="modal-wrapper" v-if="showUpdating">
			<div class="modal">
				<div class="modal-header">
					<h3 class="modal-header-title">升 级</h3>
					<i class="el-icon-close" @click="hideUpdate"></i>
				</div>
				<div class="modal-body ">
					<div class="table">  
						<div class="table-tr" v-for="item in updateStatus" :key="item.id"> 
							<div class="table-td" style="width:50%">{{item.clientCloudCode}}</div>
							<div class="table-td" style="width:50%"><el-progress :percentage="item.progress||0"></el-progress></div>  
							<!-- <div class="table-td">{{item.progress || 0}}</div>   -->
							<div class="table-td" v-if='false'><i class="iconfont icon-stop"></i></div>  
						</div> 
					</div>
					<el-button type='primary' class="btn-confirm" @click="hideUpdate" size="mini"> 取消</el-button>
				</div>
			</div>
		</div>
		<div class="modal-wrapper" v-if="showResult" >
			<div class="modal" style="height:400px">
				<div class="modal-header">
					<h3 class="modal-header-title">升级</h3>
					<i class="el-icon-close" @click="confirmResult"></i>
				</div>
				<div class="modal-body update-result" style="max-height:300px">
					<div class="result">
						<div class="result-item success"><i class="iconfont icon-smile"></i><span class="result-num">5台</span><div class="result-text">升级成功</div></div>
						<div class="result-item failed"><i class="iconfont icon-cry"></i><span class="result-num">5台</span><div class="result-text">升级失败</div></div>
						<div class="result-item stop"><i class="iconfont icon-face"></i><span class="result-num">5台</span><div class="result-text">升级终止</div></div>
					</div>
					<div style="width:80%;margin:20px auto 0">
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
				<div class="btn-group">
					<el-button type='primary'  size="mini"> 导出</el-button>
					<el-button type='primary'  size="mini" @click="confirmResult"> 确定</el-button>	
				</div>
			</div>
		</div>
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
			failedList:[{num:'122335',reason:'失败原因我不知道'},{num:'122335',reason:'失败原因我不知道'},{num:'122335',reason:'失败原因我不知道'},]
        };
    },
    methods: {
        confirmUpdate() {
			if (this.chooseVersion == -1) {
				// this.openMessage('请至少选中一台设备！')
				this.$alert('请选择一固件版本！', {confirmButtonText: '确定'});
				return
			}
			this.showChooseVersion = false;
			this.showUpdating = true;
			let data = {
				clientCloudCodeList: this.data.map(v => v.clientCloudCode),
				versionId: this.chooseVersion
			}
			this.$axios
				.post("/term/submitUpgrade", data, { responseType: "json" })
					.then(res => {
						if (res.data.code != 0) {
							return console.log("get data error: ", res.message);
						}
						this.updateStatus = res.data.data;
						this.updateProgress()
					})
					.catch(function(error) {
						console.log(error);
					});
			},
		cancelUpdate() {
			this.$emit('cancelUpdate')
		},
		hideUpdate() {
			this.$emit('hideUpdate', this.updateProgressHandle)
			// clearTimeout(this.updateProgressHandle)
		},
		updateProgress() {
			let cloudCode = this.data.map(v => v.clientCloudCode)
			this.$axios
			.post("/term/upgradeProgrs", {clientCloudCodeList: cloudCode}, { responseType: "json" })
				.then(res => {
					if (res.data.code != 0) {
						return console.log("get data error: ", res.message);
					}
					this.updateStatus = res.data.data;
					// console.log('update status: ', this.updateStatus)
					let remains = res.data.data.filter(v => v.progress < 100)
					if (!remains[0]) {
						this.showUpdating = false
						this.showResult = true
						return
					}
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
		let cloudCode = this.data.map(v => v.clientCloudCode)
		this.$axios
			.post("/term/firmware", {clientCloudCodeList: cloudCode}, { responseType: "json" })
			.then(res => {
				if (res.data.code != 0) {
					return console.log("get data error: ", res.message);
				}
				this.updateVersion = res.data.data;
				console.log('update version list: ', this.updateVersion)
			})
			.catch(function(error) {
				console.log(error);
			});
	},
	// computed
}
</script>

<style lang="scss" scoped>
.modal-wrapper {
	position: fixed;
	left: 0;
	top: 0;
	bottom: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.7);
	z-index: 999;
	text-align: center;
	&:after {
		content: '';
		display: inline-block;
		height: 100%;
		width: 0;
		vertical-align: middle;
	}
	.modal {
		position: relative;
		display: inline-block;
		width: 550px;
		height: 350px;
		background-color: #fff;
		vertical-align: middle;
		text-align: left;
		.modal-header {
			height: 50px;
			position: relative;
			background-color: #5d8bc5;
			.modal-header-title {
				line-height: 50px;
				text-indent: 1em;
				color: #fff;
				font-size: 16px;
				font-weight: normal;
			}
			.el-icon-close {
				position: absolute;
				right: 0px;
				top: 10px;
				color: #fff;
				z-index: 1000;
				line-height: 30px;
				width: 30px;
				height: 30px;
				text-align: center;
				cursor: pointer;
			}
		}
		.modal-body {
			padding: 10px 20px;
			overflow-y: scroll;
			background-color: #fff;
			max-height: 250px;
			overflow-y: scroll;
			.version-item {
				margin: 15px 0;
			}
			.btn-confirm {
				// display: block;
				position: absolute;
				bottom: 20px;
				left: 50%;
				margin-left: -35px;
				z-index: 1001;
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
		.btn-group{
			text-align: center;
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 50px;
			line-height: 50px;
		}
	}
}
.update-result{
	.table{
		.table-tr{
			border-top:1px solid #ccc;
			border-left: 1px solid #ccc;
			&:first-child{
				.table-td{
					line-height: 1.8em;
				}
			}
			.table-td{
				border-bottom:1px solid #ccc;
				border-right: 1px solid #ccc;
				text-align: center
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
