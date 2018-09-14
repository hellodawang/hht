<template>
    <div class="nav1">
        <div class="list" ref="list">
            <div v-for="(item,index) in data" :key='index' class="list-item"><div :data-en="item.name.slice(0, 1)" v-if="item.first"></div>{{item.name}}{{index}}</div>
        </div>
        <ul class="list-shortcut">
            <li v-for="(item,index) in ss" :key="index" @click="gotoChar(item,index)"  ref="item" :class="{current:current==index}">{{item}}</li>
        </ul>
    </div>
</template>
<script>
import data from "../../mock/s";
export default {
    data(){
        return{
            ss:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
            data:[],
            current:0,
            listHeight:0,
            dataCurrent:0,
            firstArr:[]
        }
    },
    mounted(){
        console.log(data)
        this.data = data.data.slice(0,50)
        this.listHeight = this.$refs.list.clientHeight;
        this.firstArr = data.firstArr
    },
    methods:{
        // index是指的是侧边字母的索引
        // index1是列表字母首次出现的索引
        gotoChar(char,index){
            let index1 = data.firstArr[char]
            // 字母列表选中字母变化
            this.current = index;
            this.dataCurrent = index1;
            if(index1){this.data = data.data.slice(index1,index1+50)}
        },
    }
};
</script>
<style lang='scss'>
.nav1{
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #fff; 
    .list{
        height: 100%;
        overflow-y: scroll;
        .list-item{
            line-height: 40px;
        }
    }
    .list-shortcut{
        position: absolute;
        top: 0;
        right: 10px;
        width: 20px;
        text-align: center;
        line-height: 1.8em;
        font-size: 14px;
        color: #999;
        li{
            width: 25px;
            height: 25px;
            cursor: pointer;
            &.current{
                border-radius: 50%;
                background-color: #ccc;
                color: #fff;
            }
        }
    }
}

</style>