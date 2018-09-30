<template>
    <div class="user-management">
        <h3 class="user-management-title">用户管理</h3>
        <div class="toolbar">
             <el-button  plain size="mini">新增</el-button>
             <el-button  plain size="mini">停用</el-button>
             <el-button  plain size="mini">启用</el-button>
             <el-button  plain size="mini">导入</el-button>
             <el-button  plain size="mini">导出</el-button>
             <el-button  plain size="mini">删除</el-button>
             <el-select v-model="value" placeholder="请选择部门" size="mini">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="value1" placeholder="请选择地域" size="mini">
                <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <el-input
                placeholder="请输入内容"
                v-model="search" size="mini" style="width:200px">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
        </div>
        <div class="user-content">
            <el-table :data="tableData" style="width: 100%"> 
                <el-table-column  prop="name" label="用户名"   width="180"> </el-table-column> 
                <el-table-column  prop="account"  label="账号"   width="180"> </el-table-column> 
                <el-table-column  prop="email" label="邮箱"> </el-table-column> 
                <el-table-column  prop="registerTime" label="注册时间"> </el-table-column> 
                <el-table-column  prop="tel" label="手机"> </el-table-column>
                <el-table-column label="操作" width="120">
                    <template slot-scope="scope">
						<i class="iconfont icon-search"></i>               
						<i class="iconfont icon-bianji"></i>
                    </template>
                </el-table-column> 
            </el-table>
        </div>
    </div>
</template>
<script>
export default {
	data() {
		return {
			tableData: [
				{
					name: 'HHTAdmin',
					account: 'HHTAdmin',
					email: '',
					registerTime: '2018/6/28 14:55',
					tel: '',
				},
				{
					name: 'EAdmin1',
					account: 'EAdmin1',
					email: '',
					registerTime: '2018/6/28 14:55',
					tel: '',
				},
				{
					name: 'Staff1',
					account: 'Staff1',
					email: '',
					registerTime: '2018/6/28 14:55',
					tel: '',
				},
				{
					name: 'EAdmin2',
					account: 'EAdmin2',
					email: '',
					registerTime: '2018/6/28 14:55',
					tel: '',
				},
				{
					name: 'EAdmin3',
					account: 'EAdmin3',
					email: '',
					registerTime: '2018/6/28 14:55',
					tel: '',
				},
				{
					name: 'EAdmin4',
					account: 'EAdmin4',
					email: '',
					registerTime: '2018/6/28 14:55',
					tel: '',
				},
				{
					name: 'EAdmin5',
					account: 'EAdmin5',
					email: '',
					registerTime: '2018/6/28 14:55',
					tel: '',
				},
				{
					name: 'EAdmin6',
					account: 'EAdmin6',
					email: '',
					registerTime: '2018/6/28 14:55',
					tel: '',
				},
				{
					name: 'EAdmin7',
					account: 'EAdmin7',
					email: '',
					registerTime: '2018/6/28 14:55',
					tel: '',
				},
				{
					name: 'Staff2',
					account: 'Staff2',
					email: '',
					registerTime: '2018/6/28 14:55',
					tel: '',
				},
				{
					name: 'Staff12',
					account: 'Staff12',
					email: '',
					registerTime: '2018/6/28 14:55',
					tel: '',
				},
				{
					name: 'Staff13',
					account: 'Staff13',
					email: '',
					registerTime: '2018/6/28 14:55',
					tel: '',
				},
				{
					name: 'Staff14',
					account: 'Staff14',
					email: '',
					registerTime: '2018/6/28 14:55',
					tel: '',
				},
				{
					name: 'Staff15',
					account: 'Staff15',
					email: '',
					registerTime: '2018/6/28 14:55',
					tel: '',
				},
				{
					name: 'Staff16',
					account: 'Staff17',
					email: '',
					registerTime: '2018/6/28 14:55',
					tel: '',
				},
				{
					name: 'Staff17',
					account: 'Staff17',
					email: '',
					registerTime: '2018/6/28 14:55',
					tel: '',
				},
				{
					name: 'Staff18',
					account: 'Staff18',
					email: '',
					registerTime: '2018/6/28 14:55',
					tel: '',
				},
				{
					name: 'Staff19',
					account: 'Staff19',
					email: '',
					registerTime: '2018/6/28 14:55',
					tel: '',
				},
				{
					name: 'Staff20',
					account: 'Staff20',
					email: '',
					registerTime: '2018/6/28 14:55',
					tel: '',
				},

			],
			options: [{ value: 1, label: '部门1' }, { value: 2, label: '部门2' }, { value: 3, label: '部门3' }],
			options1: [{ value: 1, label: '地域1' }, { value: 2, label: '地域2' }, { value: 3, label: '地域3' }],
			value: '',
			value1: '',
			search: '',
		};
	},
};
</script>
<style lang='scss' scoped>
.user-management {
	background-color: #fff;
	height: 100%;
	overflow: hidden;
	padding-bottom: 10px;
	.user-management-title {
		line-height: 40px;
		font-size: 12px;
		font-weight: normal;
		text-indent: 2em;
		border-bottom: 1px solid #f0f0f0;
	}
	.toolbar {
		margin-left: 20px;
		padding: 10px;
	}
	.user-content {
		padding-left: 40px;
		height: 100%;
		overflow-y: scroll;
		.iconfont{
			font-size: 20px;
			color: #409EFF;
			display: inline-block;
			width: 30px;
			text-align: center;
			cursor: pointer;

		}
	}
}
</style>