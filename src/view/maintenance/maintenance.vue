<template>
    <div class="maintenance-wrapper">
        <div class="list">
            <div class="toolbar"></div>
            <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange"> 
                <el-table-column type="selection" width="55"> </el-table-column> 
                <el-table-column label="编码1" width="120" prop="name1"> </el-table-column> 
                <el-table-column prop="name1" label="编码2" width="120"> </el-table-column> 
                <el-table-column prop="name2" label="编码3" show-overflow-tooltip></el-table-column>
            </el-table>
        </div>
        <div class="maintenance-box">

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
			],
		};
	},
};
</script>
<style lang='scss' scoped>
</style>