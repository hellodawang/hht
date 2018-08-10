<template>
    <div class="hht_wrapper">
        <div class="hht_aside" v-if='showSideBar'>
            <div class="hht_logo">
                <img src="../../assets/logo.png" alt="">
            </div>
            <div class="hht_user">
                <img src="../../assets/图层 36@3x.png" alt="" class="avator">
                <div class="hht_user_text">
                    <div class="hht_user_name">杨文兴</div>
                    <div class="hht_user_role">超级管理员</div>
                </div>
            </div>
            <hht-tree :list='data'></hht-tree>
        </div>
        <div class="hht_content">
            <hht-header :showSideBar='showSideBar' ></hht-header>
            <div class="hht-content_content">
                <router-view to='/index/index'></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import hhtTree from '../../components/tree/tree';
import hhtHeader from '../../components/header/header';
export default {
	components: {
		hhtTree,
		hhtHeader,
	},
	data() {
		return {
			data: [
				{ id: 1, label: '管理驾驶舱', icon: 'driver' },
				{ id: 9, label: '系统设置', icon: 'setting', children: [{ id: 11, label: '用户管理', icon: 'user' }] },
				{ id: 5, label: '应用商城', icon: 'mall' },
				{ id: 3, label: '诊断维护', icon: 'maintenance' },
				{ id: 2, label: '统计报表', icon: 'statistics' },
			],
			showSideBar: true,
		};
	},
};
</script>
<style lang='scss' scoped>
.hht_wrapper {
	height: 100%;
	overflow-y: scroll;
	overflow-x: hidden;
	display: flex;
	.hht_aside {
		height: 100%;
		width: 197px;
		background-color: #292d30;
		.hht_logo {
			height: 75px;
			padding: 24px 0;
			img {
				width: 139px;
				height: 27px;
				display: block;
				margin: 0 auto;
			}
		}
		.hht_user {
			height: 117px;
			padding-top: 29px;
			padding-left: 21px;
			.avator {
				width: 57px;
				height: 57px;
				border-radius: 50%;
				display: inline-block;
				vertical-align: top;
			}
			.hht_user_text {
				display: inline-block;
				vertical-align: top;
				margin-top: 8px;
				line-height: 1.4em;
				margin-left: 18px;
				.hht_user_name {
					color: #fff;
					font-size: 12px;
				}
				.hht_user_role {
					color: #808080;
					font-size: 12px;
				}
			}
		}
		.hht_list {
			background-color: transparent;
			vertical-align: middle;
		}
	}
	.hht_content {
		flex: 1;
		height: 100%;
		background-color: #dbdce0;
		position: relative;

		.hht-content_content {
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			top: 52px;
		}
	}
}
</style>
