<template>
  <view class="my-consultation">
    <van-empty image="error" description="暂无记录" v-if="!flag"></van-empty>
    <view class="consultation">
      <view class="item" v-for="item in data" :key="item.question">
        <text class="question-name">{{item.question}}</text>
        <text class="question-time">{{item.answerTime}}</text>
        <text class="answer-num">23个回答</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { defineComponent,ref,onMounted} from "vue"
// 获取咨询记录（没找到相应接口，先拿收藏问题接口代替）
// import { useGetQuestions} from "@/utils/Question"
import {useGotCollectionAnswers} from "@/utils/CollectionAnswer"
export default defineComponent({
    name:"MyConsultation",
    setup(){
      // const {data,state} =useGetQuestions();
      const {data,state} =useGotCollectionAnswers();
      const flag =ref<boolean>(false)
      // 判断data是否为null，来确定渲染组件
      const IsDataEmpty =()=>{
        if (data.value!=null){
          flag.value=true
        }
      }
      onMounted(IsDataEmpty);
      return {
        data,state,
        flag
      }
    }
})
</script>

<style scoped>
.item{
  width: 700rpx;
    height: 180rpx;
    transform: translateX(25rpx);
    background-color: #ffffff;
    border-radius: 5rpx;
    position: relative;
    margin-top: 20rpx;
}
.question-name{
    width: 635rpx;
    position: absolute;
    top: 35rpx;
    left: 35rpx;
    font-weight: bold;
}
.question-time{
    position: absolute;
    top: 130rpx;
    left: 35rpx;
    color: #999999;
    font-size: 25rpx;
}
.answer-num{
    position: absolute;
    top: 130rpx;
    right: 32rpx;
    color: #999999;
    font-size: 25rpx;
}
</style>