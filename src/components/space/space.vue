<template>
    <div class="space-wrapper">
        <h4>我的空间</h4>
        <div class="toolbar">
			<el-button type="primary" size="mini" icon="el-icon-upload2">上传</el-button>
			<el-button type="primary" size="mini" icon="el-icon-download">下载</el-button>
			<el-button type="primary" size="mini" icon="el-icon-share">分享</el-button>
			<el-button type="primary" size="mini" icon="el-icon-delete">删除</el-button>
			<el-button type="primary" size="mini" icon="el-icon-plus">新建文件夹</el-button>
			<el-input
				placeholder="请输入内容"
				v-model="input23" size="mini" style="width:300px">
				<i slot="suffix" class="el-input__icon el-icon-search"></i>
			</el-input>
		</div>
		<div class="path">
			<!-- <span v-if="path.length>1">返回上一级</span> -->
			<el-button v-if="path.length>1" size="mini" @click="back " icon="el-icon-back"> 返回上一级</el-button>
			<span v-for="item in path" :key="item.name" @click="go(item)" class="path-item">{{item.name}}></span>
		</div>
        <div class="file-wrapper">
            <el-table ref="multipleTable" :data="files" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55"> </el-table-column>
                <el-table-column label="文件名" width="120"> 
                    <template slot-scope="scope" > 
						<div @click="s(scope.row)">
							<i class="iconfont" :class="[{'icon-fileFolder':scope.row.type ==1},
							{'icon-pic':scope.row.type == 2},
							{'icon-word':scope.row.type == 3},
							{'icon-excel':scope.row.type == 4},
							{'icon-ppt':scope.row.type == 5},
							{'icon-zip':scope.row.type == 6},
							{'icon-video':scope.row.type == 7},
							{'icon-pdf':scope.row.type == 8},
							{'icon-unknown':scope.row.type == 9},]"></i> {{ scope.row.name }}	
						</div>                      
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
					files: [
						{
							id: 11,
							name: '图片2',
							type: 3,
							size: '65kb',
							updateTime: '2018-08-05',
						},
						{
							id: 12,
							name: '文件夹2',
							type: 1,
							size: '748kb',
							files: [{ id: 21, name: '图片3', type: 3, size: '1098kb', updateTime: '2018-08-19' }],
						},
					],
				},
			],
			input23: '',
			path: [],
		};
	},
	mounted() {
		this.path.push({
			name: '全部文件',
			files: this.files,
		});
	},
	methods: {
		handleSelectionChange() {},
		s(row) {
			if (row.files) {
				this.files = row.files;
				this.path.push({ name: row.name, files: row.files });
			}
		},
		back() {
			this.path.pop();
			this.files = this.path[this.path.length - 1].files;
		},
		go(item) {
			this.files = item.files;
			this.path = this.path.slice(0, this.path.indexOf(item) + 1);
		},
	},
};
</script>
<style lang='scss'>
.space-wrapper {
	background-color: #fff;
	height: 100%;
	h4 {
		font-weight: normal;
		font-size: 12px;
		line-height: 40px;
		border-bottom: 1px solid #f0f0f0;
		text-indent: 2em;
	}
	.toolbar {
		padding: 10px;
		margin-left: 30px;
		border-bottom: 1px solid #f0f0f0;
	}
	.path {
		margin-left: 30px;
		.path-item {
			display: inline-block;
			height: 36px;
			line-height: 36px;
			color: #666;
			cursor: pointer;
			font-size: 12px;
			margin-left: 10px;
			&:hover {
				color: #409eff;
			}
		}
	}
	.file-wrapper {
		padding: 10px 40px;
	}
}
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