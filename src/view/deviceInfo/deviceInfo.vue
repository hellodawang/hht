<template>
    <div class="deviceInfo-wrapper">
        <h3 class="deviceInfo-title">设备信息</h3>
        <div class="deviceInfo-content">
            <div class="deviceInfo-section">
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
                <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" > 
                    <el-table-column type="selection" width="55"> </el-table-column> 
                    <el-table-column label="云识别号" prop="name1"> </el-table-column> 
                    <el-table-column prop="name1" label="型号"> </el-table-column> 
                    <el-table-column prop="name2" label="客户名" show-overflow-tooltip></el-table-column>
                    <el-table-column prop="name2" label="固件版本" show-overflow-tooltip></el-table-column>
                    <el-table-column prop="name2" label="产品类别" show-overflow-tooltip></el-table-column>
                    <el-table-column prop="name2" label="最近开机时间" show-overflow-tooltip></el-table-column>
                    <el-table-column type="expand">
                        <template slot-scope="props">
                            <div class="table">  
                                <div class="table-tr" > 
                                    <div class="table-td table-text">ops</div>  
                                    <div class="table-td">{{props.row.name1}}</div>  
                                    <div class="table-td table-text">带宽</div>  
                                    <div class="table-td">{{props.row.name1}}</div>
                                      <div class="table-td table-text">数据库容量</div>  
                                    <div class="table-td">{{props.row.name1}}</div>  
                                    <div class="table-td table-text">最新版本</div>  
                                    <div class="table-td">{{props.row.name1}}</div> 
                                </div> 
                                <div class="table-tr" > 
                                    <div class="table-td table-text">数据库容量</div>  
                                    <div class="table-td">{{props.row.name1}}</div>  
                                    <div class="table-td table-text">最新版本</div>  
                                    <div class="table-td">{{props.row.name1}}</div>
                                    <div class="table-td table-text">当前版本</div>  
                                    <div class="table-td">{{props.row.name1}}</div>  
                                    <div class="table-td table-text">序列号</div>  
                                    <div class="table-td">{{props.row.name1}}</div>    
                                </div>
                                <div class="table-tr" > 
                                    <div class="table-td table-text">当前版本</div>  
                                    <div class="table-td">{{props.row.name1}}</div>  
                                    <div class="table-td table-text">序列号</div>  
                                    <div class="table-td">{{props.row.name1}}</div>   
                                </div>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </div>  
        </div> 
		<div class="modal-wrapper" v-if="showChooseVersion">
			<div class="modal">
				<div class="modal-header">
					<h3 class="modal-header-title">升级</h3>
					<i class="el-icon-close" @click="showChooseVersion = false"></i>
				</div>
				<div class="modal-body">
					<span>请选择要升级的版本</span>
					<div v-for="item in updateVersion" :key="item.id" class="version-item">
						<el-radio v-model="chooseVersion" :label="item.id" >{{item.name}}</el-radio>	
					</div>
					<el-button type='primary' class="btn-confirm" @click="confirmUpdate">确定</el-button>
				</div>
			</div>
		</div>
		<div class="modal-wrapper" v-if="showUpdating">
			<div class="modal">
				<div class="modal-header">
					<h3 class="modal-header-title">升级</h3>
					<i class="el-icon-close" @click="showUpdating = false"></i>
				</div>
				<div class="modal-body">
					<div style="width:100%">
						<div class="table">  
                            <div class="table-tr" v-for="item in tableData1" :key="item.id"> 
                                <div class="table-td">{{item.id}}</div>  
                                <div class="table-td">{{item.progress}}</div>  
                                <div class="table-td"><i class="iconfont icon-stop"></i></div>  
                            </div> 
                        </div>
					</div>
					<el-button type='primary' class="btn-confirm" @click="confirmUpdate">确定</el-button>
				</div>
			</div>
		</div>   
    </div>
</template>
<script>
export default {
	data() {
		return {
			tableData: [
				{ id: 1, name1: 'XC_1234568', name2: 'BN12345666', name3: 'BN12345666' },
				{ id: 1, name1: 'XC_1234568', name2: 'BN12345666', name3: 'BN12345666' },
				{ id: 1, name1: 'XC_1234568', name2: 'BN12345666', name3: 'BN12345666' },
				{ id: 1, name1: 'XC_1234568', name2: 'BN12345666', name3: 'BN12345666' },
				{ id: 1, name1: 'XC_1234568', name2: 'BN12345666', name3: 'BN12345666' },
				{ id: 1, name1: 'XC_1234568', name2: 'BN12345666', name3: 'BN12345666' },
				{ id: 1, name1: 'XC_1234568', name2: 'BN12345666', name3: 'BN12345666' },
				{ id: 1, name1: 'XC_1234568', name2: 'BN12345666', name3: 'BN12345666' },
			],
			search: '',
			updateVersion: [
				{ id: 1, name: 'HHNK_l1258_20180806N' },
				{ id: 2, name: 'HHNK_l1258_20180806N' },
				{ id: 3, name: 'HHNK_l1258_20180806N' },
				{ id: 4, name: 'HHNK_l1258_20180806N' },
			],
			chooseVersion: '',
			showChooseVersion: false,
			showUpdating: false,
			tableData1: [
				{ id: 'XC_1234568', progress: '100%' },
				{ id: 'XC_1234567', progress: '65%' },
				{ id: 'XC_1234565', progress: '65%' },
				{ id: 'XC_1234564', progress: '65%' },
				{ id: 'XC_1234563', progress: '65%' },
			],
		};
	},
	methods: {
		update() {
			this.showChooseVersion = true;
		},
		confirmUpdate() {
			this.showChooseVersion = false;
			this.showUpdating = true;
		},
		restart() {},
		restoreDefault() {},
	},
};
</script>
<style lang='scss' scoped>
.deviceInfo-wrapper {
	background-color: #fff;
	height: 100%;
	// padding: 0 15px;
	.deviceInfo-title {
		line-height: 40px;
		font-size: 12px;
		text-indent: 1em;
	}
	.deviceInfo-content {
		padding: 0 15px;
	}
	.deviceInfo-section {
		border: 1px solid #f0f0f0;
		height: 500px;
		border-radius: 4px;
		.toolbar {
			margin: 10px 0 0 10px;
		}
		.deviceInfo-section-title {
			line-height: 30px;
			text-indent: 2em;
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
			padding: 10px 50px;
			overflow-y: scroll;
			background-color: #fff;
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
.table-text {
	width: 90px;
	text-align: left;
	padding-right: 20px;
	color: #99a9bf;
}
</style>  
  