<template>
    <div class="info-wrapper">
        <div class="info-title">
            <div class="hht-logo"><img src="./图层 3@3x.png" alt=""></div>
            <h3>项目看板</h3>
            <div class="other">
                <div>项目名称：鸿合云</div>
                <div>项目经理：濮晓明</div>
                <div>当前迭代版本：七月份版本</div>
            </div>
        </div>
        <div class="general">
            <div class="general-health">
                <h3 class="title">项目健康度</h3>  
                <div class="health-content">
                    <div class="health-circle-wrapper">
                        <div class="health-circle">
                            <span class="health-text">100</span>
                        </div>
                    </div>
                    <p class="health-rule">这里是健康度规则</p >
                </div>                                  
            </div>
            <div class="general-progress">
                <h3 class="title">项目进度偏差率</h3>
                <el-row>
                    <el-col :span="14" >
                        <div class='progress-circle' @mouseover="progressTip=true" @mouseout="progressTip=false">
                            <el-progress type="circle" :percentage="80" :width='110' :stroke-width='8' ></el-progress>
                            <div class="progress-tip" v-if='progressTip'>
                                项目进度偏差率计算规则：已完工程实际时间-已完工程计划时间
                            </div>   
                        </div>                       
                    </el-col>
                    <el-col :span="10">
                        <div>当前项目进度：</div>
                        <div>计划项目进度：</div>
                        <div>查看更多></div>
                    </el-col>
                </el-row> 
            </div>
            <div class="general-defect">
                <h3 class="title">缺陷率</h3>
                <el-row>
                    <el-col :span="14">
                       <div class='progress-circle' @mouseover="defectTip=true" @mouseout="defectTip=false">
                            <el-progress type="circle" :percentage="80" :width='110' :stroke-width='8' ></el-progress>
                            <div class="progress-tip" v-if='defectTip'>
                                项目进度偏差率计算规则：已完工程实际时间-已完工程计划时间
                            </div>   
                        </div> 
                    </el-col>
                    <el-col :span="10">
                        <div>总缺陷数：10</div>
                        <div>已关闭缺陷：6</div>
                        <div>未关闭缺陷：4</div>
                    </el-col>
                </el-row> 
            </div>
            <div class="general-risk">
                <h3 class="title">风险</h3>
                <el-row>
                    <el-col :span="14">
                       <div class='progress-circle' @mouseover="riskTip=true" @mouseout="riskTip=false">
                            <el-progress type="circle" :percentage="80" :width='110' :stroke-width='8' ></el-progress>
                            <div class="progress-tip" v-if='riskTip'>
                                项目进度偏差率计算规则：已完工程实际时间-已完工程计划时间
                            </div>   
                        </div> 
                    </el-col>
                    <el-col :span="10">
                        <div>总风险数：10</div>
                        <div>已关闭风险：6</div>
                        <div>未关闭风险：4</div>
                    </el-col>
                </el-row> 
            </div>
        </div>
        <div class="schedule">里程碑</div>
        <div class="info">
            <div class="program">
                <h3 class="title">项目概述</h3>
                <table width="100%">
                    <tr>
                        <td width='50%'>当前版本</td>
                        <td width='50%'>6月份版本</td>
                    </tr>
                    <tr>
                        <td>项目进度</td>
                        <td><el-progress :percentage="80" color="#8e71c7" ></el-progress></td>
                    </tr>
                    <tr>
                        <td>开始日期</td>
                        <td>2018-06-01</td>
                    </tr>
                    <tr>
                        <td>预计结束日期</td>
                        <td>2018-06-01</td>
                    </tr>
                    <tr>
                        <td>需求数</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>缺陷数</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>风险数</td>
                        <td>6</td>
                    </tr>
                </table>
            </div>
            <div class="member">
                <h3 class="title">项目成员</h3>
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column prop="name" label="成员"><template slot-scope="scope"> <img src="../../assets/66.jpg" alt="" class="member-avator"><span style="margin-left: 10px">{{ scope.row.name }}</span></template></el-table-column>
                    <el-table-column prop="address" label="角色"></el-table-column>
                </el-table>
            </div>
            <div class="huanj" style="flex:2">环境</div>     
        </div>
        <div style="margin-top: 10px;background-color:#fff;padding:0 20px 10px">
            <h3 style="height:40px;line-height:40px;margin-right:10px;margin-bottom:10px;font-size:18px;font-weight:bold">需求分配一览</h3>
            <div class="feature">       
                <div class="feature-item" v-for="item in arr" :key="item.id">
                    <img src="../../assets/66.jpg" alt="" class="avator">                   
                    <div class="box">
                        <p  style='text-align:center;padding-bottom:20px'>王小虎</p>
                        <div class="box-item" v-for="item1 in item.feature" :key="item1.id">
                            <p>{{item1.name}}</p>
                            <el-tag type="success" v-if='item1.status==1' class="tag">closed</el-tag>
                            <el-tag type="warning" v-if='item1.status==2' class="tag">open</el-tag>
                        </div>
                    </div>
                </div>
            </div> 
        </div>    
    </div>
</template>
<script>
import {Button} from 'element-ui'
import Vue from 'vue';
Vue.use(Button)
export default {
    mounted() {
        this.$nextTick(() => { 
        })      
    },
    data(){
        return{
            arr:[
                {id:1,name:2,feature:[{id:11,name:'哈哈哈哈哈哈哈哈哈哈哈哈哈',status:1},{id:12,name:'需求2',status:2},{id:13,name:'需求3'},{id:14,name:'需求4'},{id:15,name:'需求4'},{id:16,name:'需求4'},{id:17,name:'需求4'}]},
                {id:2,name:2,feature:[{id:21,name:'需求5',status:2},{id:22,name:'需求9',status:1},{id:23,name:'需求13',status:2},{id:24,name:'需求17',status:2}]},
                {id:3,name:2,feature:[{id:31,name:'需求6',status:2},{id:32,name:'需求10',status:2},{id:33,name:'需求14',status:2},{id:34,name:'需求18',status:2}]},
                {id:4,name:2,feature:[{id:41,name:'需求7',status:2},{id:42,name:'需求11',status:1},{id:43,name:'需求15',status:1},{id:44,name:'需求19',status:2}]},
                {id:5,name:2,feature:[{id:51,name:'需求8',status:2},{id:52,name:'需求12',status:1},{id:53,name:'需求16',status:1},{id:54,name:'需求20',status:2}]},
            ],
            tableData:[{
                    name: '王小虎',
                    address: 'java'
                }, {
                    name: '王小虎',
                    address: 'java'
                }, {
                    name: '王小虎',
                    address: '前端'
                }, {
                    name: '王小虎',
                    address: 'java'
                }
            ],
            progressTip:false,
            defectTip:false,
            riskTip:false,
        }
        
    }
}
</script>
<style lang='scss' scoped>
.info-wrapper{
    padding: 10px;
    padding-top: 90px;
    >.info-title{
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        height: 80px;
        background-color: #409eff;
        color: #fff;         
        width: 100%;
        z-index: 9999;
        >.hht-logo{
            flex: 1;
            margin-left: 20px;
            margin-top: 20px;
        }
        >h3{
            flex: 1;
            text-align: center;
            line-height: 80px;
            font-weight: 500;
            font-size: 20px;
        }
        .other{
            flex: 1;
            text-align: right;
            margin-right: 30px;
            line-height: 25px;
            font-size: 14px;
        }
    }
}
.progress-tip{
    width: 150px;
    padding: 10px;
    background-color: #ff0;
    position: absolute;
    left: 50px;
    top:60px;
    background-color: #fff;
    box-shadow: 0 0 5px #c0c0c0
}
    .general{
        display: flex;
        height: 230px;
        // margin-top: 50px;
    }
    .general>div{
        flex: 1;
        background-color: #fff;
        margin: 0 10px 10px 0;
        border-radius: 4px;
        padding: 10px 20px;
    }
    .health-circle-wrapper{
        width: 120px;
        height: 120px;
        border:4px dashed green;
        border-radius: 50%;
        margin-top: 20px;
        margin-left: 20px;
    }
    .health-content{
        display: flex;
    }
    .health-rule{
        flex: 1;
        margin-left: 40px;
    }
    .health-circle{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: green;
        line-height: 100px;
        color: #fff;
        text-align: center;
        font-size: 40px;
        margin: 10px auto;
    }
    .feature{
        display: flex;
    }
    .feature-item{
        flex:1;
        border-radius: 4px;
        padding: 20px;
        position: relative;
        background-color: #fff;
        
    }
    .feature-item+.feature-item{
        border-left: 1px dashed #c0c0c0;
    }
    .avator{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        position: absolute;
        top: 20px;
        z-index: 50;
        left: 50%;
        margin-left: -20px;
    }
    .box{
        margin-top: 60px;
    }
    .box-item{
        box-shadow: 0 0 5px #ccc;
        margin-bottom: 20px;
        height: 60px;
        padding: 10px 70px 10px 10px;
        position: relative;
    }
    .tag{
        position: absolute;
        top:10px;
        right: 10px;
    }
    .member{
        background-color: #fff;
        flex:2;
        padding: 10px 20px;
    }
    .member-avator{
        width: 27px;
        height: 27px;
        border-radius: 50%;
        vertical-align: middle;
    }
    .info{
        display: flex;
    }
    .program{
        flex: 2;
        background-color: #fff;
        margin-right: 10px;
        padding: 10px 20px;
    }
    .title{
        font-size: 18px;
        color: #333;
        line-height: 1.8em;
        font-weight: bold;
    }
    .program tr{
        font-size: 14px;
        line-height: 36px;
        color: #666;
    }
    .licheng{
        background-color: #fff;
    }
    .progress-circle{
        width: 110px;
        margin: 20px auto;
        position: relative;
    }
</style>