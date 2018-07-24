<template>
    <div class="hht_wrapper">
        <div class="hht_aside">
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
            <el-tree :data="data" node-key="id"  :render-content="renderContent" class="hht_list">
            </el-tree>
        </div>
        <div class="hht_content">
            <div class="hht_content_header">
                <i class="icon icon_menu"></i>
                <div class="menubar">
                    <div class="mail"><span class="mail-text">5</span></div>
                    <div class="message"><span class="message-text">3</span></div>
                    <div class="language">
                        <el-dropdown>
                            <span class="el-dropdown-link">
                                中文<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>英文</el-dropdown-item>                             
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                    <div class="role">
                        <el-dropdown>
                            <span class="el-dropdown-link">
                                超级管理员<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>其他角色1</el-dropdown-item>                             
                                <el-dropdown-item>其他角色2</el-dropdown-item>                             
                                <el-dropdown-item>其他角色3</el-dropdown-item>                             
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                    <div class="avator">
                        <img src="../../assets/图层 36@3x.png" alt="">
                    </div>
                    <div class="loginOut">退出</div>
                </div>
            </div>
            <div class="hht-content_content">
                <router-view to='/index/index'></router-view>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        renderContent(h, { node, data, store }) {
            return (
            <span class="custom-tree-node">
                <i class='icon icon_driver'  ></i>
                <span class='icon-text'>
                    {node.label}
                </span>
                <span></span>
            </span>);
      }
    },
    data(){
        return{
            data:[
                {id:1,label:'驾驶窗',children:[{id:11,label:'待定'}],icon:'driver'},
                {id:2,label:'统计报表',icon:'statistics'},
                {id:3,label:'诊断维护',},
                {id:4,label:'产品信息',},
                {id:5,label:'应用商城',},
                {id:6,label:'用户管理',},
                {id:7,label:'版本信息',},
                {id:8,label:'学习库',},
                {id:9,label:'系统设置',},
            ]
        }
    }
}
</script>
<style lang='scss' scoped>
    .hht_wrapper{
        height: 100%;
        overflow-y: scroll;
        .hht_aside{
            height: 100%;
            width:197px;
            background-color: #292d30;
            .hht_logo{
                height: 75px;
                padding: 24px 0;
                img{
                    width: 139px;
                    height: 27px;
                    display:  block;
                    margin: 0 auto;
                }
            }
            .hht_user{
                height: 117px;
                padding-top:29px;
                padding-left: 21px;
                .avator{
                    width: 57px;
                    height: 57px;
                    border-radius: 50%;
                    display: inline-block;
                    vertical-align: top;
                }
                .hht_user_text{
                    display: inline-block;
                    vertical-align: top;
                    margin-top: 8px;
                    line-height: 1.4em;
                    margin-left: 18px;
                    .hht_user_name{
                        color: #fff;
                        font-size: 12px;
                    }
                    .hht_user_role{
                        color: #808080;
                        font-size: 12px;
                    }
                }
            }
            .hht_list{
                background-color: transparent;
                vertical-align: middle
            }
        }
        .hht_content{
            // height: 100%;
            // overflow-y: scroll;
            position: fixed;
            left: 197px;
            right: 0;
            top: 0;
            bottom: 0;
            background-color: #DBDCE0;
            .hht_content_header{
                height: 52px;
                background-color: #eff3f4;
                .icon_menu{
                    float: left;
                    margin-left: 23px;
                    width: 15px;
                    height: 15px;
                    background: url("../../assets/icon_menu.png") center center no-repeat;
                    background-size: contain;
                    margin-top: 18px;
                }
                .menubar{
                    float: right;
                    margin:10px 50px;
                    font-size: 12px;
                    >div{
                        display: inline-block;
                        vertical-align: middle;
                    }
                    .mail{
                        position: relative;
                        width: 24px;
                        height: 24px;
                        background: url('../../assets/mail.png') center center no-repeat;
                        background-size: contain;
                        .mail-text{
                            position: absolute;
                            top:-5px;
                            left: -5px;
                            width: 18px;
                            height: 18px;
                            border-radius: 50%;
                            background-color: #f66;
                            text-align: center;
                            line-height: 18px;
                            color: #fff;
                        }
                    }
                    .message{
                        position: relative;
                        width: 24px;
                        height: 24px;
                        background: url('../../assets/message.png') center center no-repeat;
                        background-size: contain;
                        margin-left: 20px;
                        margin-right: 20px;
                        .message-text{
                            position: absolute;
                            top:-5px;
                            left: -5px;
                            width: 18px;
                            height: 18px;
                            border-radius: 50%;
                            background-color: #f66;
                            text-align: center;
                            line-height: 18px;
                            color: #fff;
                        }
                    }
                    .role{
                        margin: 0 20px;
                    }
                    .avator{
                        width: 32px;
                        height: 32px;
                        border-radius: 50%;
                        margin-right: 20px;
                        img{
                            width: 100%;
                        }
                    }
                }
            }
            .hht-content_content{
                position: fixed;
                left: 197px;
                right: 0;
                bottom: 0;
                top: 52px;
            }
        }
    }
</style>
<style lang='scss'>
.hht_list{
    .el-tree-node{
        color: #DBDCE0;
        &:focus>.el-tree-node__content{
            background-color: transparent;
        }
        .el-tree-node__content{
            height: 37px;
        }
        .el-tree-node__content:hover{
            background-color: #24272C;
            
        }
        .custom-tree-node{
            .icon{
                display: inline-block;
                width: 20px;
                height: 20px;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center center;
            }
            .icon_driver{
                background-image: url('../../assets/icon-driver.png')
            }
            .icon_statistics{
                 background-image: url('../../assets/icon-driver.png')
            }
            .icon-text{
                display: inline-block;
                vertical-align: top;
                margin-left: 16px;
                color:#DBDCE0
            }
        }
    }
}
</style>
