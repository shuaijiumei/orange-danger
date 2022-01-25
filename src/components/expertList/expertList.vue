<template>
    <view class="expert-list">
      <view class="expert-header">
        <view class="title">专家讲坛</view>
        <view class="more">查看更多></view>
      </view>
      <view class="expert-content">
        <view  class="expert-info" v-for="item in data" :key="item.expertName">
          <img class="expert-img" :src="item.expertImg" />
          <text class="expert-name">{{item.expertName}}</text>
        </view>
      </view>
    </view>
</template>

<script lang="ts">
import { defineComponent,onMounted} from 'vue'
import {useGotProfessionTeam} from "@/utils/Expert"
export default defineComponent({
    name:'ExpertList',
    setup() {
        // 获取专家团队信息
      const {data,state} =useGotProfessionTeam()
      const consoleData =()=>{console.log(data)}
      onMounted(consoleData)

      return {
        data,
        state
      }
    },
})
</script>

<style scoped>
.expert-list{
  width: 100%;
  height: 21.6%;
}
.expert-header{
  width: 100%;
  height: 80rpx;
  position: relative;
  background-color: #ffffff;
}
.expert-header>.title{
  position: absolute;
  top: 50%;
  left: 52rpx;
  transform: translateY(-50%);
  font-weight: bold;
}
.expert-header>.more{
  position: absolute;
  top: 50%;
  right: 40rpx;
  transform: translateY(-50%);
  color: #999999;
}

.expert-content{
  width: 100%;
  height: 220rpx;
  background-color: #ffffff;
  overflow: hidden;
}
.expert-info{
  display: inline-block;
  width: 120rpx;
  height: 160rpx;
  margin-top: 15rpx;
  margin-left: 52rpx;
  margin-right: 6rpx;
}
.expert-info>.expert-img{
  width: 120rpx;
  height: 120rpx;
  border-radius: 60rpx;
}
.expert-info>.expert-name{
  height: 25rpx;
  font-size: 20rpx;
  color: black;
  margin: 0 auto;
  padding: 0 2rpx;
  line-height: 25rpx;
  white-space: nowrap;
}
</style>