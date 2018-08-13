<template>
    <div class="space-wrapper">
        <h4>我的空间</h4>
        <div class="toolbar"></div>
        <div class="file-wrapper">
            <el-table ref="multipleTable" :data="files" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55"> </el-table-column>
                <el-table-column label="文件名" width="120"> 
                    <template slot-scope="scope"> 
                        <i class="iconfont" :class="[{'icon-fileFolder':scope.row.type ==1},
                        {'icon-pic':scope.row.type == 2},
                        {'icon-word':scope.row.type == 3},
                        {'icon-excel':scope.row.type == 4},
                        {'icon-ppt':scope.row.type == 5},
                        {'icon-zip':scope.row.type == 6},
                        {'icon-video':scope.row.type == 7},
                        {'icon-pdf':scope.row.type == 8},
                        {'icon-unknown':scope.row.type == 9},]"></i> {{ scope.row.name }}
                    </template> 
                </el-table-column> 
                <el-table-column prop="size" label="大小" width="120"> </el-table-column> 
                <el-table-column prop="updateTime" label="修改时间" show-overflow-tooltip> </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
export default {
	data() {
		return {
			// type为1是文件夹 为2是图片 为3是word 为4是excel 为5是ppt 为6是压缩文件 为7是视频 为8 是pdf 为9是其他
			files: [
				{ id: 1, name: '图片1', type: 2, size: '748kb', updateTime: '2018-09-01' },
				{ id: 3, name: 'word', type: 3, size: '748kb', updateTime: '2018-09-01' },
				{ id: 4, name: 'excel', type: 4, size: '748kb', updateTime: '2018-09-01' },
				{ id: 5, name: 'ppt', type: 5, size: '748kb', updateTime: '2018-09-01' },
				{ id: 6, name: '压缩文件', type: 6, size: '748kb', updateTime: '2018-09-01' },
				{ id: 7, name: '视频', type: 7, size: '748kb', updateTime: '2018-09-01' },
				{ id: 8, name: 'pdf', type: 8, size: '748kb', updateTime: '2018-09-01' },
				{ id: 9, name: 'test.txt', type: 9, size: '748kb', updateTime: '2018-09-01' },
				{
					id: 2,
					name: '文件夹1',
					type: 1,
					size: '748kb',
					updateTime: '2018-09-01',
					files: [{ id: 11, name: '图片2', type: 3, size: '65kb', updateTime: '2018-08-05' }],
				},
			],
		};
	},
	methods: {
		handleSelectionChange() {},
	},
};
</script>
<style lang='scss'>
.el-table__row {
	.cell {
		.iconfont {
			font-size: 18px;
		}
		.icon-video {
			color: #8183f1;
		}
		.icon-excel {
			// color:
		}
	}
}
</style>