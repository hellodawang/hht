<template>
    <div class="deviceInfo-wrapper">
        <h3 class="deviceInfo-title">设备信息</h3>
        <div class="deviceInfo-content">
            <el-row :gutter="20"> 
                <el-col :span='16' >
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
                        <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange"> 
                            <el-table-column type="selection" width="55"> </el-table-column> 
                            <el-table-column label="编码1" width="120" prop="name1"> </el-table-column> 
                            <el-table-column prop="name1" label="编码2" width="120"> </el-table-column> 
                            <el-table-column prop="name2" label="编码3" show-overflow-tooltip></el-table-column>
                        </el-table>
                    </div>
                </el-col>
                <el-col :span='8' > 
                    <div class="deviceInfo-section">
                        <h5 class="deviceInfo-section-title">信息</h5>
                        <div class="table">  
                            <div class="table-tr"> 
                                <div class="table-td">最近开机时间</div>  
                                <div class="table-td">2018/08/06 09:30:31</div>  
                            </div>  
                            <div class="table-tr">  
                                <div class="table-td">类型</div>
                                <div class="table-td">Hh48658555LKh520</div>  
                            </div>  
                            <div class="table-tr">  
                                <div class="table-td">id</div>  
                                <div class="table-td">Hh48658555LKh520</div>    
                            </div>
                            <div class="table-tr">  
                                <div class="table-td">规格</div>  
                                <div class="table-td">XXXXXX</div>    
                            </div>
                            <div class="table-tr">  
                                <div class="table-td">序列号</div>  
                                <div class="table-td">Hh48658555LKh520</div>    
                            </div>
                            <div class="table-tr">  
                                <div class="table-td">接口</div>  
                                <div class="table-td">Hh48658555LKh520</div>    
                            </div>
                            <div class="table-tr">  
                                <div class="table-td">宽带</div>  
                                <div class="table-td">Hh48658555LKh520</div>    
                            </div>
                            <div class="table-tr">  
                                <div class="table-td">数据库容量</div>  
                                <div class="table-td">Hh48658555LKh520</div>    
                            </div>
                            <div class="table-tr">  
                                <div class="table-td">最新版本</div>  
                                <div class="table-td">Hh48658555LKh520</div>    
                            </div>
                            <div class="table-tr">  
                                <div class="table-td">当前版本</div>  
                                <div class="table-td">Hh48658555LKh520</div>    
                            </div>  
                        </div>
                    </div>
                </el-col>
            </el-row>    
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
}
.table,
.table * {
	margin: 0 auto;
	padding: 0;
	font-size: 12px;
	// font-family: Arial, 宋体, Helvetica, sans-serif;
}
.table {
	display: table;
	width: 80%;
	border-collapse: collapse;
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
}
.table-td:first-child {
	text-align: right;
	padding-right: 20px;
}
</style>    