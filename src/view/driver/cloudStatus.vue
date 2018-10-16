<template>
<div class="section">
    <div class="section-title"> 
        <h3>云整体状态</h3> 
    </div>
    <div class="section-content">                 
        <el-col :span='16'>
            <div class="cloudStatus"><bar-chart :data="config" /> </div>  
        </el-col>
        <el-col :span='8'>   
            <div class="status" :style="color">{{comment}}</div>
        </el-col>              
    </div>
</div>
</template>

<script>
import echarts from "echarts";
import barChart from "../../components/chart/barChart";
let baseConfig = {
    tooltip: {
        formatter: '{a} <br/>{c} {b}',
    },
    series: [
        {
            name: '健康度',
            type: 'gauge',
            center: ['50%', '80%'], // 默认全局居中
            radius: '130%',
            min: 0,
            max: 100,
            startAngle: 180,
            endAngle: 0,
            splitNumber: 4,
            axisLine: {
                // 坐标轴线
                lineStyle: {
                    // 属性lineStyle控制线条样式
                    width: 8,
                    // color:'#f66'
                    color: [
                        [0.6, '#F56C6C'],
                        [0.8, '#FFBD84'],
                        [0.9, '#409EFF'],
                        [1, '#67C23A']
                    ],
                },
            },
            axisTick: {
                // 坐标轴小标记
                length: 12, // 属性length控制线长
                lineStyle: {
                    // 属性lineStyle控制线条样式
                    color: 'auto',
                },
            },
            splitLine: {
                // 分隔线
                length: 10, // 属性length控制线长
                lineStyle: {
                    // 属性lineStyle（详见lineStyle）控制线条样式
                    color: '#eee',
                },
            },
            pointer: {
                width: 5,
            },
            title: {
                offsetCenter: [0, 0], // x, y，单位px
            },
            detail: { formatter: '{value}%', show: false },
            data: [{ value: 80, name: '' }],
        },
    ],
}

export default {
  components: {
    barChart
  },
  props: ["data"],
  data: function() {
    return {};
  },
  computed: {
    config() {
      let cfg = Object.assign({}, baseConfig);
      cfg.series[0].data = [{value: this.data, name: ''}]
      return cfg;
    },
    comment() {
        if (this.data >= 90) {
            return '优'
        } else if (this.data >= 80) {
            return '良'
        } else if (this.data >= 60) {
            return '正常'
        } else {
            return '预警'
        }
    },
    color() {
        if (this.data >= 90) {
            return 'border-color: #67C23A; color: #67C23A;'
        } else if (this.data >= 80) {
            return 'border-color: #409EFF; color: #409EFF;'
        } else if (this.data >= 60) {
            return 'border-color: #FFBD84; color: #FFBD84;'
        } else {
            return 'border-color: #F56C6C; color: #F56C6C;'
        }
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 10px;
  display: inline-block;
  width: 100%;
  font-size: 12px;
  position: relative;
  vertical-align: middle;
  .section-title {
    border-bottom: 1px solid #e0e0e0;
    height: 38px;
    h3 {
      font-size: 12px;
      font-weight: 500;
      text-indent: 1em;
      line-height: 38px;
      color: #0b0b0b;
      float: left;
    }
  }
  .section-content {
    padding: 10px;
    height: 148px;
    @media screen and (max-width: 1400px){
			height: 133px;
		}
    .cloudStatus{
        height: 130px;
        @media screen and (max-width: 1400px){
			height: 115px;
		}
    }
  }
  .status {
      width:54px;
      height:54px;
      border-radius:50%;
      border:4px solid green;
      text-align:center;
      line-height:46px;
      color:green;
      margin-top:20px;
  }
}
</style>
