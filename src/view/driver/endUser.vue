<template>
    <div class="wrapper">
        <el-row>
            <el-col :span='18' >
                <div class="section" style="height:520px;margin-bottom:10px">
                   <app-store></app-store> 
                </div>
                <div class="section" style="height:350px;overflow-y:scroll;background-color:#fff">
                    <my-zone></my-zone>                    
                </div>
            </el-col>
            <el-col :span='6'>
                <div class="section" style="margin-left:10px">
                    <h3 class="section-title">系统信息</h3>
                    <div class="section-content">

                    </div>
                </div>
                <div class="section" style="margin-left:10px;margin-top:10px">
                    <h3 class="section-title">公告</h3>
                    <div class="section-content">
                        
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import appStore from '../appStore/appStore';
import myZone from '../../components/space/space';
export default {
	created() {
		this.$store.commit('hide');
	},
	components: {
		appStore,
		myZone,
	},
};
</script>
<style lang='scss' scoped>
.section {
	background-color: #fff;
	.section-title {
		font-weight: normal;
		font-size: 12px;
		line-height: 40px;
		border-bottom: 1px solid #f0f0f0;
		text-indent: 2em;
	}
}
</style>