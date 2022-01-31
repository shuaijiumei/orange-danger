<template>
  <view class="collection-answer">
      <view class="item" v-for="item in data" :key="item.answerId">
        <text class="title">{{item.question}}</text>
        <view class="answer">
          <img :src="item.answerImg" alt="">
          <text class="name">{{item.answerName}}</text>
          <text class="end">的回答</text>
        </view>
        <view class="collection-choice">
          <img src="@/static/MyCollection/collection-on.png" alt="">
          <text>已收藏</text>
        </view>
      </view>
  </view>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {useGotCollectionAnswers} from "@/utils/CollectionAnswer"
export default defineComponent({
    name:"CollectionAnswer",
    setup(){
      // 获取收藏的回答信息
      const {data,state} =useGotCollectionAnswers();

      return{
        data,state
      }
    }
})
</script>

<style scoped>
.item{
  width: 700rpx;
  height: 210rpx;
  position: relative;
  margin-top: 20rpx;
  border-radius: 5rpx;
  background-color: #ffffff;
}
.item>.title{
  width: 635rpx;
  font-weight: bold;
  position: absolute;
  top: 35rpx;
  left: 35rpx;
}
.item>.answer{
  width: 240rpx;
  height: 44rpx;
  position: absolute;
  bottom: 20rpx;
  left: 35rpx;
}
.answer>img{
  width: 44rpx;
  height: 44rpx;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 22rpx;
}
.answer>.name{
  position: absolute;
  top: 50%;
  left: 50rpx;
  transform: translateY(-50%);
  font-size: 20rpx;
  color: #999999;
}
.answer>.end{
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  font-size: 20rpx;
  color: #11aa67;
}
.collection-choice{
  width: 95rpx;
  height: 30rpx;
  position: absolute;
  bottom: 20rpx;
  right: 40rpx;
}
.collection-choice>img{
    width: 30rpx;
    height: 30rpx;
    position: absolute;
    top: 0;
    left: 0;
}
.collection-choice>text{
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  font-size: 20rpx;
}
</style>