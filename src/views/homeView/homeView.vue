<template>
  <div class="app-container">
    <div class="total-layout">
      <el-row :gutter="24">
        <el-col :span="6" style="padding:0px,margin:0px">
          <div class="total-frame">
            <span class="iconfont mall-wode" />
            <div class="tital-frame-infomation">
              <div class="total-title">
                今日访问总数
              </div>
              <div class="total-value">
                1000
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="6" style="padding:0px,margin:0px">
          <div class="total-frame">
            <span class="iconfont mall-a-dianpushangdian" />
            <div class="tital-frame-infomation">
              <div class="total-title">
                今日订单总数
              </div>
              <div class="total-value">
                200
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="6" style="padding:0px,margin:0px">
          <div class="total-frame">
            <span class="iconfont mall-a-fapiaoxiaopiao" />
            <div class="tital-frame-infomation">
              <div class="total-title">
                今日订单总数
              </div>
              <div class="total-value">
                200
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="6" style="padding:0px,margin:0px">
          <div class="total-frame">
            <span class="iconfont mall-shangchuan" />
            <div class="tital-frame-infomation">
              <div class="total-title">
                今日订单总数
              </div>
              <div class="total-value">
                200
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts" name="homeView" setup>
import { ElRow, ElCol, } from 'element-plus';
</script>

<style scoped lang="less">
.total-title {
  margin-top: 10px;
  text-align: center;
  font-weight: 700
}

.total-value {
  margin-top: 10px;
  text-align: center;
  font-weight: 700
}

.total-frame {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff
}

.tital-frame-infomation {
  margin: 24px 24px 24px 0;
  font-size: 20px;
  color: #8c8c8c;
}

.mall-wode,
.mall-a-dianpushangdian,
.mall-a-fapiaoxiaopiao,
.mall-shangchuan {
  margin: 14px 0 0 14px;
  padding: 16px;
  font-size: 64px;
}

.mall-wode {
  color: #40c9c6;
}

.mall-wode:hover {
  color: #ffffff;
  background: #40c9c6;
  border-radius: 8px;
}

.mall-a-dianpushangdian {
  color: #36a3f7;
}

.mall-a-dianpushangdian:hover{
  color: #ffffff;
  background: #36a3f7;
  border-radius: 8px;
}
.mall-a-fapiaoxiaopiao {
  color: #f4516c;
}
.mall-a-fapiaoxiaopiao:hover{
  color: #ffffff;
  background: #f4516c;
  border-radius: 8px;
}
.mall-shangchuan {
  color: #34bfa3;
}
.mall-shangchuan:hover {
  color: #ffffff;
  background: #40c9c6;
  border-radius: 8px;
}



//修改ElementPlus自带的样式 
.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 8px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}</style>
