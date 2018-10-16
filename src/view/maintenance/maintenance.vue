<template>
    <div class="maintenance-wrapper">
        <h3 class="maintenance-title">设备诊断</h3>
        <div class="maintenance-content">
            <el-row>
                <el-col :span='12'>
                    <div class="list">
                        <div class="toolbar">
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
                            <el-table-column label="云识别号" width="120" prop="name1"> </el-table-column> 
                            <el-table-column prop="name2" label="型号" width="120"> </el-table-column> 
                            <el-table-column prop="name3" label="产品类型" show-overflow-tooltip></el-table-column>
                            <el-table-column prop="customer" label="客户名称" show-overflow-tooltip></el-table-column>
                            <el-table-column prop="status" label="状态" show-overflow-tooltip></el-table-column>
                        </el-table>
                    </div>        
                </el-col>
                <el-col :span='12'>
                    <div class="maintenance-box">
                        <el-row>
                            <el-col :span='12'>
                                <img src="../../assets/2.jpg" alt="" style="width:283px">
                                <el-button type="primary" size='mini'>抓取远程图像</el-button>
                            </el-col>
                            <el-col :span='12'>
                                <img src="../../assets/2.jpg" alt=""  style="width:283px">
                                <el-button type="primary" size='mini'>抓取摄像机图像</el-button>
                            </el-col>
                        </el-row>
                        <div class="video-test">
                            <h5>音频环回测试</h5>
                            <img src="../../assets/1.jpg" alt="" style="width:570px">
                            <div class="stop">停止环回</div>
                        </div>
                    </div>         
                </el-col>
            </el-row> 
        </div>
		<upgrade :data="selected" v-if="showUpgrade"/>
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
				{ id: 1, name1: 'XC_1234568', name2: 'BN12345666', name3: '大屏', customer: '腾讯', status: '正常' },
				{ id: 1, name1: 'XC_1234568', name2: 'BN12345666', name3: '大屏', customer: '腾讯', status: '故障' },
				{ id: 1, name1: 'XC_1234568', name2: 'BN12345666', name3: '大屏', customer: '腾讯', status: '正常' },
				{ id: 1, name1: 'XC_1234568', name2: 'BN12345666', name3: '大屏', customer: '腾讯', status: '正常' },
				{ id: 1, name1: 'XC_1234568', name2: 'BN12345666', name3: '大屏', customer: '腾讯', status: '正常' },
				{ id: 1, name1: 'XC_1234568', name2: 'BN12345666', name3: '大屏', customer: '腾讯', status: '正常' },
				{ id: 1, name1: 'XC_1234568', name2: 'BN12345666', name3: '大屏', customer: '腾讯', status: '正常' },
				{ id: 1, name1: 'XC_1234568', name2: 'BN12345666', name3: '大屏', customer: '腾讯', status: '正常' },
			],
			search: '',
			// chooseVersion: '',
			// showChooseVersion: false,
			showUpgrade: false,
			selected: [],
		};
	},
	methods: {
		update() {
			this.showUpgrade = true;
			console.log('open upgrade dialog')
		},
		restart() {},
		restoreDefault() {},
		select() {
			this.selected = this.tableData
		}
	},
};
</script>
<style lang='scss' scoped>
.maintenance-wrapper {
	height: 100%;
	background-color: #fff;
	.maintenance-title {
		line-height: 40px;
		font-weight: normal;
		font-size: 12px;
		border-bottom: 1px solid #f0f0f0;
		text-indent: 2em;
	}
	.maintenance-content {
		padding: 10px 20px;
		.maintenance-box {
			text-align: center;
			.el-row {
				padding-top: 10px;
			}
			img {
				display: block;
				margin: 0 auto;
			}
			button {
				margin-top: 20px;
			}
			.video-test {
				margin-top: 50px;
				padding-left: 50px;

				h5 {
					text-align: left;
					font-size: 12px;
					font-weight: normal;
				}
				img {
					margin-top: 30px;
				}
				.stop {
					width: 110px;
					height: 110px;
					border-radius: 50%;
					border: 3px solid #3ba7ec;
					display: inline-block;
					// text-align: center;
					line-height: 110px;
					margin-top: 20px;
					color: #3ba7ec;
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
.table-td:first-child {
	// text-align: right;
	padding-right: 20px;
}
</style>