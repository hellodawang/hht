<template>
    <el-tree :data="list"  node-key="id" :expand-on-click-node="true" class="hht_list">
        <span class="custom-tree-node" slot-scope="{ node, data }" >
            <i class='icon' :class="[{ icon_driver: (node.icon=='driver')},
                                    {icon_statistics:(node.icon=='statistics')},
                                    {icon_maintenance:(node.icon=='maintenance')},
                                    {icon_mall:(node.icon=='mall')},
                                    {icon_user:(node.icon=='user')},
                                    {icon_study:(node.icon=='study')},
                                    {icon_setting:(node.icon=='setting')}
                                    ]"  ></i>
            <span class='icon-text '>
                {{node.label}}
            </span>
            <span class="down " v-if='data.children' :class="[!node.expanded ? 'el-icon-arrow-right' : '', 'el-icon-arrow-down']"></span>
        </span>
    </el-tree>
</template>
<script>
export default {
    props:['list']
}
</script>
<style lang='scss'>
.hht_list{
    background-color: transparent;
    vertical-align: middle;
    .el-tree-node{
        color: #DBDCE0;
        &:focus>.el-tree-node__content{
            background-color: transparent;
        }
        .el-tree-node__content{
            position: relative;
            height: 37px;
            .el-tree-node__expand-icon{
                display: none;
            }
        }
        .el-tree-node__content:hover{
            background-color: #24272C;
            
        }
        .custom-tree-node{
            .down{
                position: absolute;
                right: 20px;
            }
            .icon{
                display: inline-block;
                width: 20px;
                height: 20px;
                margin-left: 20px;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center center;
            }
            .icon_driver{
                background-image: url('../../assets/icon-driver.png')
            }
            .icon_statistics{
                 background-image: url('../../assets/icon-statistics.png')
            }
            .icon_maintenance{
                 background-image: url('../../assets/icon-maintenance.png')
            }
            .icon_product{
                 background-image: url('../../assets/icon-product.png')
            }
            .icon_mall{
                 background-image: url('../../assets/icon-mall.png')
            }
            .icon_user{
                 background-image: url('../../assets/icon-user.png')
            }
            .icon_version{
                 background-image: url('../../assets/icon-version.png')
            }
            .icon_study{
                 background-image: url('../../assets/icon-study.png')
            }
            .icon_setting{
                 background-image: url('../../assets/icon-setting.png')
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