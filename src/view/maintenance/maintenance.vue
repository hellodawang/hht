<template>
    <div class="maintenance-wrapper">
        <h3 class="maintenance-title">设备诊断</h3>
        <div class="maintenance-content">
            <el-row>
                <el-col :span='12'>
                    <div class="list">
                        <div class="toolbar"></div>
                        <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange"> 
                            <el-table-column type="selection" width="55"> </el-table-column> 
                            <el-table-column label="编码1" width="120" prop="name1"> </el-table-column> 
                            <el-table-column prop="name1" label="编码2" width="120"> </el-table-column> 
                            <el-table-column prop="name2" label="编码3" show-overflow-tooltip></el-table-column>
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
		};
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
}
</style>