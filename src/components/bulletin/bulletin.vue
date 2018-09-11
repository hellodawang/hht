
<template>
    <div class="bulletin-wrapper">
        <div class="bulletin-item clearfix" v-for="item in bulletinList" :key="item.id">  
            <div class="bulletin-tag">{{item.tag}}</div>
            <div class="bulletin-head"></div>
            <div class="bulletin-main">
                <div class="bulletin-time">{{item.time}}</div>
                <div class="bulletin-content">{{item.content}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import Date from '../../utils/date.js'
export default {
    data(){
        return{
            bulletins:[
                {id:1,time:'2018-09-11',content:'公司放假通知：放假3天 庆祝中秋'},
                {id:2,time:'2018-08-01',content:'公司放假通知：放假3天 庆祝中秋'},
                {id:3,time:'2018-06-31',content:'公司放假通知：放假3天 庆祝中秋'},
                {id:4,time:'2018-06-12',content:'公司放假通知：放假3天 庆祝中秋'},
            ]    
        }    
    },
    computed:{
        bulletinList(){
            var obj={};
            return this.bulletins.map((item,index)=>{
                // 每条数据对应的月份
                let month = item.time.substring(5,7)
                //   当前时间
                var date = new Date().Format('yyyy-MM-dd')
                if(!obj[month]){
                   obj[month] = month
                   item.tag = month.replace(/\b(0+)/gi,"")+'月'
                }
                if(date == item.time){
                    item.tag = '今天'
                }
               return item
            })
        }
    }

};
</script>
<style lang='scss'>
    .bulletin-wrapper{
        padding: 10px 20px;
        height: 100%;
        .bulletin-item{
            height: 80px;
            .bulletin-tag{
                width: 40px;
                float: left;
                margin-top: 9px;
                text-align: center;
            }
            .bulletin-head{
                height: 100%;
                position: relative;
                float: left;
                width: 4px;
                background-color: #f0f0f0;
                &::after{
                    content: "";
                    position: absolute;
                    box-sizing: border-box;
                    left: -4px;
                    top:9px;
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    border:3px solid #aaa;                 
                }
                
            }
            .bulletin-main{
                margin-left: 20px;
                float: left;
                .bulletin-time{
                    font-size: 12px;
                    color: #333;
                    line-height: 30px;
                }
            }
            &:last-child{
                height: 50px;      
            }
        }
        

    }
</style>