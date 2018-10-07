<template>
    <div class="wrapper">
        <el-row>
            <el-col :span='18' >
                <div class="section history" >
                    <el-collapse accordion>
                        <el-collapse-item :title="downloadHistory">
                             <div class="section-content" >
                                <el-row v-if="downloadHistory=='历史纪录'" >
                                    <el-col :span="20">
                                        <div class="downloadApp-wrapper">
                                            <div class="download-item" v-for="(item,index) in downloadApp" :key="index">
                                                <img :src='item.url'  alt="">
                                            </div>
                                        </div>         
                                    </el-col>
                                    <el-col :span="4">
                                        <div class="arrow">
                                                <i class="icon iconfont icon-jiantou" @click="goAppStore"></i><p>进入应用商城</p>
                                        </div>
                                        </el-col>
                                </el-row>
                                <el-row  v-if="downloadHistory=='应用商城'" >
                                    <el-col :span="20">
                                        <el-tabs v-model="activeName" @tab-click="handleClick" class="appStore-content" >
                                                <el-tab-pane label="应用" name="first">
                                                    <div class="pane-wrapper">
                                                        <hht-app v-for="(item,index) in apps" :key="index" :item='item'> </hht-app>
                                                    </div>
                                                </el-tab-pane>
                                                <el-tab-pane label="教学资源" name="second">
                                                    <div class="pane-wrapper">
                                                        <hht-app v-for="(item, index) in resource" :key="index" :item='item'> </hht-app>
                                                    </div>
                                                </el-tab-pane>
                                                <el-tab-pane label="工具" name="third">
                                                    <div class="pane-wrapper">
                                                        <hht-app v-for="(item, index) in tools" :key="index" :item='item'> </hht-app>
                                                    </div>
                                                </el-tab-pane>
                                            </el-tabs>
                                    </el-col>
                                    <el-col :span="4"><div class="arrow"><i class="icon el-icon-back" @click="goAppHistory"></i><p>返回历史记录</p></div></el-col>
                                </el-row>
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                </div>
                <div class="section" style="height:466px;overflow-y:scroll;background-color:#fff">
                    <my-zone></my-zone>                    
                </div>
            </el-col>
            <el-col :span='6' style="height:100%">
                <div class="section" style="margin-left:10px;height:100%">
                    <h3 class="section-title">公告</h3>
                    <div class="section-content" style="height:815px">
                       <bulletin :op='bulletinData'></bulletin> 
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import myZone from '../../components/space/space';
import bulletin from '../../components/bulletin/bulletin';
import hhtApp from '../../components/app/app';
import {apps, tools, resource} from '../../mock/appStore'

export default {
	created() {
        this.$store.commit('hide');
        this.$axios   // 获取事件通知与公告
		.post("/movement/movement/importevent", {}, { responseType: "json" })
		.then(res => {
			if (res.data.code != '0000') {
			return console.log("get data error: ", res.message);
			}
			this.rawBulletinData = res.data.data.noticeList
		})
		.catch(function(error) {
			console.log(error);
		});
    },
    data(){
        return {
            rawBulletinData:[],
            downloadApp:[{url:'/static/appIcon/360.png'},
                {url:'/static/appIcon/AdobeReader.png'},
                {url:'/static/appIcon/Chrome浏览器.png'},
                {url:'/static/appIcon/FIFA足球世界.png'},
                {url:'/static/appIcon/PolarisOffice.png'},
                {url:'/static/appIcon/WPSOffice.png'},
                {url:'/static/appIcon/书旗小说.png'},
                {url:'/static/appIcon/今日头条.png'},
                {url:'/static/appIcon/割绳子.png'},
                {url:'/static/appIcon/古诗词分类赏析.png'},
                {url:'/static/appIcon/墨迹天气.png'},
                {url:'/static/appIcon/小猿搜题.png'},
                {url:'/static/appIcon/开心消消乐.png'},
                {url:'/static/appIcon/我的世界.png'},
                {url:'/static/appIcon/我的实验室.png'},
                {url:'/static/appIcon/推箱子.png'},
                {url:'/static/appIcon/教育+.png'},
                {url:'/static/appIcon/数据恢复精灵.png'},
                {url:'/static/appIcon/新概念英语.png'},
                {url:'/static/appIcon/方块拼凑.png'},
			],
			apps: apps,
			tools: tools,
			resource: resource,
            downloadHistory:'历史纪录',
			activeName: 'first',
		}
    },
    computed:{
        bulletinData() {
			return this.rawBulletinData.map((v) => {
				return {
					time: v.noticeTime,
					content: v.noticeDetail,
				}
			})
		}
    },
	components: {
        myZone,
        bulletin,
		hhtApp,
    },
    methods:{
        goAppStore(){
            this.downloadHistory = '应用商城'
        },
        goAppHistory(){
            this.downloadHistory = '历史纪录'
        },
        handleClick(){}
    }
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
    &.history{
        margin-bottom:10px;
        .section-content{
            .el-row{
                height: 100%;
                .el-col{
                    height: 100%;
                    .arrow{
                        width: 125px;
                        height: 125px;
                        border-radius: 50%;                      
                        background-color: #3BA7EC;
                        margin-top: 100px;
                        text-align: center;
                        .icon{
                            font-size: 60px;
                            line-height: 125px;
                            color: #fff;
                        }
                    }
                }
                h5{
                    color: #808080;
                    font-size: 12px;
                    font-weight: normal;
                    text-indent: 4em;
                }
                .downloadApp-wrapper{
                    padding: 0px 20px 10px 40px;
                    overflow-y: scroll;
                    height: 260px;
                    .download-item{
                        display: inline-block;
                        width: 100px;
                        height: 100px;
                        border:1px solid #D7D7D7;
                        text-align: center;
                        border-radius: 4px;
                        padding: 10px;
                        margin: 10px 0 0 8px;
                        img{
                            display: inline-block;
                            width:80px;
                        }
                    }
                }
                .appStore-content{
                    padding: 10px 20px 10px 40px;
                    overflow-y: scroll;
                    height: 300px;
                }
            }
        }
    }
}
</style>
<style lang="scss">
.history{
    .el-collapse-item__header{
        height: 40px;
        line-height:40px;
        border-bottom: 1px solid #f0f0f0;
        // text-indent:2em;
        padding-left:20px;
        .el-collapse-item__arrow{
            line-height:40px;
        }
    }
}
    
</style>
