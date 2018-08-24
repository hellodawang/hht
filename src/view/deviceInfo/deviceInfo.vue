<template>
    <div class="deviceInfo-wrapper">
        <h3 class="deviceInfo-title">设备信息</h3>
        <div class="deviceInfo-content">
            <div class="deviceInfo-section">
                <div class="toolbar">
                    <el-button size="mini">日志导出</el-button>
                    <el-button size="mini">配置导入</el-button>
                    <el-button size="mini">配置导出</el-button>
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
		};
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
  