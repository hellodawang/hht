<template>
    <div class="section online">
        <div class="section-title"> 
            <h3>在线统计</h3>
        </div>
        <div class="section-content">
            <div class="online-item clearfix">
                <h5>上线人数</h5>
                <div class="online-num">
                    <span class="onlines">{{account.online}}</span>
                    <span class="all">/{{account.all}}</span>
                </div>
            </div>
            <div class="online-item clearfix">
                <h5>上线设备</h5>
                <div class="online-num">
                    <span class="onlines">{{device.online}}</span>
                    <span class="all">/{{device.all}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ["account", "device"],
  data: function() {
    return {
      greeting: "Hello"
    };
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
  .online-item {
    height: 60px;
    line-height: 60px;
    h5 {
      font-weight: normal;
      font-size: 14px;
      width: 58px;
      float: left;
    }
    .online-num {
      text-align: center;
      .onlines {
        font-size: 28px;
        color: #1e87d0;
        font-weight: bold;
      }
      .all {
        font-size: 16px;
        color: #ccc;
      }
    }
  }
}
</style>
