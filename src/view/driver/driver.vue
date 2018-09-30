<template>
    <el-row class="driver-wrapper" :gutter="10" ref="driver">
      <el-col :span="6" class="col-one" >
        <div class="section online">
            <div class="section-title"> 
                <h3>在线统计</h3>
            </div>
            <div class="section-content">
                <online-stats :account="accountStats" :device="deviceStats"/>
            </div>
        </div>
        <div class="section online-distribution" >
          <!-- <div class="section-title"> 
            <h3>在线数据分布</h3>
          </div> -->
          <div class="section-content">
            <distribution-bar-chart :data="barChartData" />
            <activity-chart/>
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
            <chinese-map :stats="chineseMapData" @setProvinceData="setProvinceData" v-if="mapType==1"/>
            <world-map :stats="worldMapData"  v-if="mapType==2"/>
            <div class="device-text">
              <div class="device-text-item">
                <span class="device-num">{{terminalTotal}}</span>
                <span class="device-num-text">设备总数</span>
              </div>
              <div class="device-text-item">
                <span class="device-num">{{onlineTerminalTotal}}</span>
                <span class="device-num-text">当前设备运行总数</span>
              </div>
              <div class="device-text-item alarm" v-if="!stats[1].hideWarning">
                <span class="device-num">{{stats[mapType].warningTotal}}</span>
                <span class="device-num-text">设备告警总数</span>
              </div>
            </div>
          </div>
        </div>
        <div class="section" style="padding:20px 0 0">
          <!-- <div class="section-title"> 
              <h3>TOP应用/客户汇总</h3> 
          </div> -->
          <div class="section-content" style="height:200px;">
              <el-col :span='12'>
                  <top-app :data="topAppData" style="height:200px"/>   
              </el-col>
              <el-col :span='12'>
                  <top-client :data="topClientData" style="height:200px"/>  
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
import provinceMap from '../../utils/provinceList'

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
  created() {
    this.$axios   // 在线用户统计
      .post("/userapi/userReport/findOnlineUser", {}, { responseType: "json" })
      .then(res => {
        if (res.data.code != '0000') {
          return console.log("get data error: ", res.data.message);
        }
        this.account = res.data.data;
      })
      .catch(function(error) {
        console.log(error);
      });
    this.$axios   // 在线终端统计
      .post("/terminalweb/terminalReport/findOnlineStatistical", {}, { responseType: "json" })
      .then(res => {
        if (res.data.code != '0000') {
          return console.log("get data error: ", res.data.message);
        }
        this.device = res.data.data;
      })
      .catch(function(error) {
        console.log(error);
      });
    this.getMapData('0')
    // this.$axios   // 国内地图数据
    //   .post("/terminalweb/terminalReport/findAllTerminalMap", { responseType: "json",mapType:1 })
    //   .then(res => {
    //     if (res.data.code != 0) {
    //       return console.log("get data error: ", res.message);
    //     }
    //     this.china = res.data.data.areaTerminalList;
    //     this.stats['2'] = {
    //       terminalTotal: res.data.data.terminalTotal, 
    //       onlineTerminalTotal: res.data.data.onlineTerminalTotal,
    //       warningTotal: res.data.data.warningTotal,
    //     }
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
    // this.$axios   // todo 合并到上一个请求中，国外地图数据
    //   .post("/terminalweb/terminalReport/findAllTerminalMap", { responseType: "json",mapType:2 })
    //   .then(res => {
    //     if (res.data.code != 0) {
    //       return console.log("get data error: ", res.message);
    //     }
    //     this.world = res.data.data.areaTerminalList;
    //     this.stats['1'] = {
    //       terminalTotal: res.data.data.terminalTotal, 
    //       onlineTerminalTotal: res.data.data.onlineTerminalTotal,
    //       warningTotal: res.data.data.warningTotal,
    //     }
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
    this.$axios   // top 应用排行
      .post('/logweb/logserver/appbehavior', { responseType: "json" })
      .then(res => {
        if (res.data.code != '0000') {
          return console.log("get data error: ", res.data.message);
        }
        this.topData.app = res.data.data.applicationList.slice(0,5).reverse();
      })
      .catch(function(error) {
        console.log(error);
      });
    this.$axios   // 终端用户规模排行
      .post('/terminalweb/terminalReport/findTerminalTop', { responseType: "json" })
      .then(res => {
        if (res.data.code != '0000') {
          return console.log("get data error: ", res.data.message);
        }
        this.topData.client = res.data.data.topList.slice(0,5).reverse()
      })
      .catch(function(error) {
        console.log(error);
      });
    this.$axios   // 云端设备监控信息
      .post('/cloudplatinfo/cloudplat/clouddevicemonitort', { responseType: "json" })
      .then(res => {
        if (res.data.code != '0000') {
          return console.log("get data error: ", res.data.message);
        }
        this.cloudStats= res.data.data
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  data() {
    return {
      map: {},
      mapType: "1",
      period: {num:1},
      device: { online: 0, all: 1, terminalTypeList: []},
      account: { online: 0, all: 1, accountTypeList: []},
      stats: {
        '1': {terminalTotal: 0, onlineTerminalTotal: 0, warningTotal: 0},
        '2': {terminalTotal: 0, onlineTerminalTotal: 0, warningTotal: 0},
      },
      terminalTotal: 0,
      onlineTerminalTotal: 0,
      cloudStats: {},
      topData: {app: [], client: []},
      col1:null,
    };
  },
  computed: {
    accountStats() {
      return {
           online: this.account && this.account.onlineTotal || 0, 
           all: this.account && this.account.accountTotal || 1
      };
    },
    deviceStats() {
      return {
          online: this.device && this.device.onlineTotal || 0, 
          all: this.device && this.device.terminalTotal || 1
      }
    },
    barChartData() {
      return {
        title1:'上线人数排序',
        title2:'上线设备排序',
        data1: this.account.accountTypeList.map((v) => {
          return {xAxis: v.accountType, value: v.typeOnline}
        }),
        data2: this.device.terminalTypeList.map((v) => {
          return {xAxis: v.terminalType, value: v.onlineTotal}
        }),
      };
    },
    chineseMapData() {
      if (!this.stats['1'].mapData) return {}
      let stats = this.stats['1'].mapData
      let data = []
      // console.log('china map data: ', stats)
      stats.forEach((v) => {
        let area = v.subList.map((u) => {
          return {
            name: u.areaName,
            value: u.areaValue,
            online: u.areaOnlineValue,
          }
        })
        // console.log('province data: ', v.areaName, provinceMap[v.areaName])

        data[provinceMap[v.areaName]] = area
      })
      let china = stats.map((v) => {
        return {
          name: provinceMap[v.areaName],
          value: v.areaValue,
          online: v.areaOnlineValue,
        }
      })
      data.china = china
      this.china = china
      // console.log('china map format data: ', data)
      return data
    },
    worldMapData() {
      if (!this.stats['2'].mapData) return {}
      let stats = this.stats['2'].mapData
      let world = stats.map((v) => {
        return {
          name: v.areaName,
          value: v.areaValue,
          online: v.areaOnlineValue,
        }
      })
      // console.log('world map format data: ', world)
      return world
      // return this.world.areaTerminalList
    },
    topAppData() {
      let count = []
      let yAxis = []
      this.topData.app.forEach((v) => {
        count.push(v.useTimes)
        yAxis.push(v.applicationName)
      })
      return {
        count: count,
        yAxis: yAxis,
      }
    },
    topClientData() {
      let client = this.topData.client
      return {
        count: client.map(v => v.topStockValue),
        yAxis: client.map(v => v.topStockName)
      }
      return {
        count: [],
        yAxis: []
      };
    },
    storage() {
      let data = this.cloudStats.cloudInfoList 
      if (!data) {
        return [
          {name:'集群一',cloudCondition:100,all:100,level:'优秀'},
          {name:'集群二',cloudCondition:100,all:100,level:'优秀'},
          {name:'集群三',cloudCondition:100,all:100,level:'优秀'},
        ]
      }
      return data.map((v) => {
        v.cloudCondition = parseInt(v.cloudCondition)
        return {
          name: v.cloudLocation,
          all: 100, 
          available: v.cloudCondition,
          level: v.cloudCondition >= 90 ? '优秀' : (v.cloudCondition < 90 && v.cloudCondition >= 80 ? '良好' :( v.cloudCondition <= 80 && v.cloudCondition >= 60 ? '差' :'很差'))
        }
      })
    },
    cloudStatus() {
      return this.cloudStats.cloudIntegrality
    },
    bendwidth() {
      let data = this.cloudStats.cloudInfoList
      if (!data) {
        return {
          data: [
            {
              name: "北京最高值",
              data: [], // [0, 50, 70, 90, 65, 69, 0]
            },
            {
              name: "北京平均值",
              data: [], // [0, 38, 56, 74, 59, 58, 0]
            },
            {
              name: "广州最高值",
              data: [], // [0, 10, 20, 40, 30, 48, 0]
            },
            {
              name: "广州平均值",
              data: [], // [0, 8, 14, 50, 34, 26, 0]
            },
            {
              name: "成都最高值",
              data: [], // [0, 57, 23, 48, 12, 8, 0]
            },
            {
              name: "成都平均值",
              data: [], // [0, 25, 18, 30, 48, 24, 0]
            }
          ],
          xAxis: [], // ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00"]
        };
      }
      let d = []
      data.forEach((v) => {
        d.push({
          name: v.cloudLocation + 'max',
          data: v.messList.map(u => u.bandwidthMax)
        })
        d.push({
          name: v.cloudLocation + 'avg',
          data: v.messList.map(v => v.bandwidthAvr)
        })
      })
      let xAxis = [];
      data[0].messList.forEach((item,index)=>{
        xAxis.push(item.gatherTime.substring(10))
      })
      return {data: d, xAxis: xAxis}
    },
    cpuAndRamStatus() {
      let data = this.cloudStats.cloudInfoList
      if (!data) {
        return {
          data: [
            {
              name: "北京CPU",
              data: [], //[30, 50, 70, 40, 65, 69, 70]
            },
            {
              name: "北京内存",
              data: [], // [0, 50, 2, 35, 5, 80, 18]
            },
            {
              name: "广州CPU",
              data: [], // [1, 5, 2, 30, 80, 2, 10]
            },
            {
              name: "广州内存",
              data: [], // [5, 5, 40, 20, 60, 0, 15]
            },
            {
              name: "成都CPU",
              data: [], // [2, 90, 60, 4, 50, 21, 7]
            },
            {
              name: "成都内存",
              data: [], // [90, 5, 20, 0, 40, 10, 17]
            },

          ],
          xAxis: [], // ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00"]
        }
      }
      let d = []
      data.forEach((v) => {
        d.push({
          name: v.cloudLocation + 'CPU',
          data: v.messList.map(u => u.cpuRate)
        })
        d.push({
          name: v.cloudLocation + 'MEM',
          data: v.messList.map(v => v.memoryRate)
        })
      })
      let xAxis = [];
      data[0].messList.forEach((item,index)=>{
        xAxis.push(item.gatherTime.substring(10))
      })
      return {data: d, xAxis: xAxis}
    },
    getShowSidebar(){
      return this.$store.state.showSideBar
    }
  },
  watch: {
    mapType: function(n, o) {
      this.stats['1'].hideWarning = false
      this.stats['2'].hideWarning = false
      this.getMapData()
      if (o != '1' && n == '1') return this.setProvinceData('china')
      if (n != '2') return
      this.terminalTotal = this.stats['2'].terminalTotal
      this.onlineTerminalTotal = this.stats['2'].onlineTerminalTotal
    }
  },
  methods: {
    setProvinceData(d) {
      this.stats['1'].hideWarning = d != 'china'
      if (d == 'china') {
        this.terminalTotal = this.stats['1'].terminalTotal
        this.onlineTerminalTotal = this.stats['1'].onlineTerminalTotal
        return
      }
      let count = this.stats['1'].mapData.filter(v => v.areaName.indexOf(d) == 0)[0]
      this.terminalTotal = count.areaValue
      this.onlineTerminalTotal = count.areaOnlineValue
    },
    getMapData(mapType) {
      // type=1为国内地图，type=2为世界地图
      let type = mapType || this.mapType
      // console.log('mapType: ', type)
      if (this.stats[type] && this.stats[type].mapData) return

      this.$axios
        .post("/terminalweb/terminalReport/findAllTerminalMap", {mapType: type}, { responseType: "json" })
        .then(res => {
          if (res.data.code != '0000') {
            return console.log("get data error: ", res.data.message);
          }
          // if (res.data.data.mapType == '1') { // 国内地图
          //   this.china = res.data.data.areaTerminalList;
          // } else if (res.data.data.mapType == '2') { // 国外地图
          //   this.world = res.data.data.areaTerminalList;
          // }
          this.mapType = res.data.data.mapType

          this.stats[res.data.data.mapType] = {
            mapData: res.data.data.areaTerminalList,
            terminalTotal: res.data.data.terminalTotal, 
            onlineTerminalTotal: res.data.data.onlineTerminalTotal,
            warningTotal: res.data.data.warningTotal,
          }

          if (this.mapType == '1') return this.setProvinceData('china')
          // 处理世界地图底部统计数据
          this.terminalTotal = this.stats['2'].terminalTotal
          this.onlineTerminalTotal = this.stats['2'].onlineTerminalTotal
          // console.log('this.stats: ', this.stats)
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    date2Axis(date) {
      if (!date) return []
      return date.map((v) => {
        let d = new Date(v)
        let m = d.getMinutes()
        m = m < 10 ? '0' + m : m
        let h = d.getHours()
        h = h < 10 ? '0' + h : h
        return h + ':' + m
      })
    }
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
      &:last-child{
        margin-bottom: 0;
      }
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
          padding: 0 30px;
          .device-text-item {
            // display: inline-block;
            float: left;
            margin-right: 20px;
            text-align: center;
            > span {
              display: block;
            }
            &.alarm{
              float: right;
              .device-num{
                font-size: 18px;
                color: #FF6C00;
                line-height: 24px;
                margin: 20px 0 10px 0;
              }
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
      &.online-distribution{
        padding: 20px 0 0
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