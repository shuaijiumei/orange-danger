<template>
    <view class="expert-list">
      <view class="expert-header">
        <view class="title">专家讲坛</view>
        <view class="see-more">查看更多></view>
      </view>
       <image class="expertImg" :src="data.expertImg" mode="widthFix"/>
        <text>{{data.expertName}}</text>
    </view>
</template>

<script lang="ts">
import { defineComponent} from 'vue'
import {useGotProfessionTeam} from "@/utils/expert"
export default defineComponent({
    name:'expertList',
    setup() {
        // 获取专家团队姓名及图像（这里只请求到一个)
      const {data,state} =useGotProfessionTeam()
      return {
        data,
        state
      }
    },
})
</script>

<style scoped>
.expert-list{
  width: 20%;
  height: 45%;
  margin-left: 5%;
}
.expert-list>.expert-header{
  position: relative;
  width: 100%;
  height: 10%;
}
.expert-header>.title{
  position: absolute;
  top: 50%;
  left: 5%;
  translate: translateX(-50%);
  font-size: 10upx;
  font-weight: bold;
}
.expert-header>.see-more{
  position: absolute;
  top: 50%;
  right: 5%;
  translate: translateX(-50%);
  font-size: 10upx;
}
.expert-list>image{
  border-radius: 50%;
  width: 100%;
}
.expert-list>text{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
}
</style>