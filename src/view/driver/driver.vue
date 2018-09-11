<template>
    <el-row class="driver-wrapper" :gutter="10" ref="driver">
      <el-col :span="6" class="col-one">
        <online-stats :account="onlineStats.account" :device="onlineStats.device"/>
        <div class="section online-distribution">
          <div class="section-title"> 
            <h3>在线数据分布</h3>
          </div>
          <div class="section-content">
            <distribution-bar-chart :data="barChartData" style="height:325px"/>
                <!-- <div ref="myEchart" style="height:325px"></div> -->
            <div>
              <activity-chart style="height:220px"/>

              <!-- <div ref='myEchart1' style="height:220px"></div> -->
              <!-- <div class="period" style="height:50px;text-align:center;margin-top:15px">
                <el-radio-group v-model="period"   size="small" @change='handleChange'>
                  <el-radio-button label="week">本周</el-radio-button>
                  <el-radio-button label="month">本月</el-radio-button>
                  <el-radio-button label="year">本年</el-radio-button>
                </el-radio-group>
              </div>	 -->
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="12" class="col-two">
			  <div class="section device-distribution">
          <div class="section-title"> 
            <h3 >全景图</h3>
            <div style="float:right;line-height:38px;margin-right:20px">
              <el-radio v-model="mapType" label="1">国内</el-radio>
              <el-radio v-model="mapType" label="2">海外</el-radio>	
            </div>				
          </div>
          <div class="section-content">
            <!-- <div ref="myEchart3" id='chart-panel' style="height:500px"></div> -->
            <chinese-map :stats="chineseMapData" style="height:500px" v-if="mapType==1"/>
            <world-map :stats="worldMapData" style="height:500px" v-if="mapType==2"/>
            <div class="device-text">
              <div class="device-text-item">
                <span class="device-num">15558</span>
                <span class="device-num-text">今日设备运行总数</span>
              </div>
              <div class="device-text-item">
                <span class="device-num">15558</span>
                <span class="device-num-text">当前设备运行总数</span>
              </div>
            </div>
          </div>
        </div>
          <div class="section">
            <div class="section-title"> 
                <h3>TOP应用/客户汇总</h3> 
            </div>
            <div class="section-content" style="height:180px">
                <el-col :span='12'>
                    <top-app :data="topAppData" style="height:180px"/>   
                </el-col>
                <el-col :span='12'>
                    <top-client :data="topClientData" style="height:180px"/>  
                </el-col>
            </div>
          </div>
      </el-col>
      <el-col :span="6">
          <cloud-status :data="cloudStatus"/>
          <storage-stats :data="storage"/>
          <bendwidth-chart :data="bendwidth"/>
          <cpu-and-ram :data="cpuAndRamStatus"/>
      </el-col>
    </el-row>
</template>
<script>
// import mapchart from '../../utils/map.js';
// import { value, nameMap } from '../../utils/worldmap.js';
import echarts from "echarts";

import onlineStats from "./onlineStats";
import barChart from "../../components/chart/barChart";
import distributionBarChart from "./distBarChart";
import activityChart from "./activity";
import cloudStatus from './cloudStatus'
import storageStats from './storageStats'
import topApp from "./topApp";
import topClient from "./topClient";
import bendwidthChart from "./bendwidthChart";
import cpuAndRam from "./cpuAndRam";

import chineseMap from "../../components/map/chineseMap";
import worldMap from "../../components/map/worldMap";

import mapData from "../../mock/mapData";

export default {
  components: {
    onlineStats,
    barChart,
    chineseMap,
    worldMap,
    distributionBarChart,
    activityChart,
    topApp,
    topClient,
    cloudStatus,
    storageStats,
    bendwidthChart,
    cpuAndRam,
  },
  beforeCreate() {
    this.$axios
      .get("/report/term/stats/district", { responseType: "json" })
      .then(res => {
        if (res.data.code != 0) {
          return console.log("get data error: ", res.message);
        }
        this.china = res.data.data;
        // console.log('stats data: ', res.data)
      })
      .catch(function(error) {
        console.log(error);
      });
    this.$axios
      .get("/report/term/stats/district?district=1", { responseType: "json" })
      .then(res => {
        if (res.data.code != 0) {
          return console.log("get data error: ", res.message);
        }
        this.world = res.data.data;
        // console.log('world data: ', this.world)
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  data() {
    return {
      map: {},
      chart1: {},
      mapType: "1",
      period: "",
      stats: {},
      china: {},
      world: {},
    };
  },
  computed: {
    getShowSidebar() {
      return this.$store.state.showSideBar;
    },
    onlineStats() {
      return {
        // todo 假数据
        account: { online: 34551, all: 82342 },
        device: { online: 321243, all: 912341 }
      };
    },
    barChartData() {
      return {
        account: [2342, 3213, 1242, 455],
        device: [22342, 32113, 41242, 8455]
      };
      // return distributionData4BarChart; // todo 假数据
    },
    chineseMapData() {
      //   return mapData.chineseData; // todo 假数据
      // let china = this.stats.sumByArea;
      let stats = this.china.detail
      if (!stats) return [];
      // console.log('all data: ', this.stats)

      let china = Object.keys(stats).map((v) => {
        let province = stats[v]
        let data = {name: v, value: 0, online: 0}
        Object.keys(province).forEach((u) => {
          let area = province[u]
        
          let value = 0
          let online = 0
          Object.keys(area).forEach((t) => {
            value += area[t].total
            online += area[t].online
            if (!data[t]) data[t] = {online: 0, total: 0}
            data[t].online += area[t].online
            data[t].total += area[t].total
          })
          area.value = value
          area.online = online
          data.value += value
          data.online += online
        })

        return data // 省数据
      })

      Object.keys(stats).forEach((v) => {
        let province = stats[v]
        stats[v] = Object.keys(province).map((u) => {
          return Object.assign({name: u}, province[u])
        })
      })

      stats.china = china
      // console.log('china detail: ', stats)
      return stats
      ///////////////////////////

      // let data = Object.keys(stats).map(v => ({
      //   name: v,
      //   value: stats[v].total,
      //   online: stats[v].online
      // }));
      // console.log("data: ", data);
      // return data;
    },
    worldMapData() {
      // console.log('world data: ', this.world)
      return this.world
    },
    // activityData() {
    //   return {
    //     account: [379, 468, 496, 574, 589, 548, 584],
    //     device: [22342, 32113, 41242, 8455, 2345, 2356, 4734],
    //     xAxis: ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00"]
    //   };
    //   // return activityData; // todo 假数据
    // },
    topAppData() {
      return {
        count: [578, 673, 708, 921, 1126],
        yAxis: ["OA办公", "UC业务", "魔兽世界", "i学", "电子书包"]
      };
      // return topAppData; // todo 假数据
    },
    topClientData() {
      return {
        count: [320, 332, 301, 334, 390],
        yAxis: [
          "上海精锐教育培训",
          "深圳市海陵生物科技",
          "中国铝业",
          "昆明工口科技有限公司",
          "深圳市超网科技有限公司"
        ]
      };
      // return topClientData; // todo 假数据
    },
    storage() {
      return [32, 53, 43]
    },
    cloudStatus() {
      return 55
      // return deviceStatus; // todo 假数据
    },
    bendwidth() {
      return {
        data: [
          {
            name: "最高值",
            data: [80, 50, 70, 90, 65, 69, 90]
          },
          {
            name: "最低值",
            data: [20, 5, 30, 45, 23, 38, 17]
          },
          {
            name: "平均值",
            data: [39, 38, 56, 74, 59, 58, 54]
          }
        ],
        xAxis: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00"]
      };
      // return bendwidth; // todo 假数据
    },
    cpuAndRamStatus() {
      return {
        data: [
          {
            name: "CPU",
            data: [30, 50, 70, 40, 65, 69, 70]
          },
          {
            name: "内存",
            data: [20, 5, 30, 45, 23, 38, 17]
          }
        ],
        xAxis: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00"]
      };
      // return cpuAndRamStatus; // todo 假数据
    }
  },
  watch: {
    // 如果 `getShowSidebar` 发生改变，这个函数就会运行
    getShowSidebar: function(newQuestion, oldQuestion) {
      this.map.resize();
    }
  },
  methods: {

  }
};
</script>
<style lang='scss' scoped>
.driver-wrapper {
  height: 100%;
  overflow-y: scroll;
  > .el-col {
    height: 100%;
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
        .detail {
          text-decoration: none;
          color: #333;
          display: block;
          text-align: right;
          margin-right: 20px;
          line-height: 1.8em;
          font-size: 12px;
          &:hover {
            color: #f66;
          }
        }
        .device-text {
          height: 80px;
          padding: 0 60px;
          .device-text-item {
            display: inline-block;
            margin-right: 20px;
            text-align: center;
            > span {
              display: block;
            }
            .device-num {
              font-size: 28px;
              color: #1a8034;
              line-height: 54px;
              font-weight: 500;
            }
          }
        }
      }
      &.device-distribution {
        .section-content {
          padding: 0;
        }
      }
    }
  }
}
.current-btn {
  background-color: #f66;
  color: #fff;
}
</style>