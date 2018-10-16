<template>
    <div>
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
    props: ['data'],
    data() {
        return {
            updateVersion: [
                { id: 1, name: 'HHNK_l1258_20180806N' },
                { id: 2, name: 'HHNK_l1258_20180806N' },
                { id: 3, name: 'HHNK_l1258_20180806N' },
                { id: 4, name: 'HHNK_l1258_20180806N' },
            ],
            tableData1: [
                { id: 'XC_1234568', progress: '100%' },
                { id: 'XC_1234567', progress: '65%' },
                { id: 'XC_1234565', progress: '65%' },
                { id: 'XC_1234564', progress: '65%' },
                { id: 'XC_1234563', progress: '65%' },
            ],
            showChooseVersion: true,
            showUpdating: false,
            chooseVersion: '',
        };
    },
    methods: {
        confirmUpdate() {
			this.showChooseVersion = false;
			this.showUpdating = true;
		},
    }
}
</script>

<style lang="scss">
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
</style>
