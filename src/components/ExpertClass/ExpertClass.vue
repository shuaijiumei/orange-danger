<template>
      <view class="expert-article">
          <view class="article" v-for="index of 2" :key="index">
                <img :src="data[index].articleImg" alt=""/>
                <text class="title">课堂：{{data[index].articleTitle}}</text>
                <text class="brief">{{data[index].articleInfo}}</text>      
          </view> 
      </view>
</template>

<script lang="ts">
import { defineComponent} from 'vue'
import {useGetHotArticles} from "@/utils/Article"
export default defineComponent({
    name:'ExpertClass',
    setup() {
        // 获取专家课堂文章信息
     const {data,state} =useGetHotArticles()
      return {
        data,
        state
      }
    },
})
</script>

<style scoped>
.expert-article{
    width: 100%;
    height: 373rpx;
    background-color: #ffffff;
}
.expert-article>.article{
    position: relative;
    width: 700rpx;
    height: 50%;
    margin-left: 50rpx;
    border-top: 1rpx solid #c8c8c8;
}
.article>img{
    width: 215rpx;
    height: 135rpx;
    position: absolute;
    top: 50%;
    right: 42rpx;
    transform: translateY(-50%);
}
.article>.title{
    position: absolute;
    top: 36rpx;
    left: 0;
    font-weight: bold;
}
.article>.brief{
    position: absolute;
    top: 95rpx;
    left: 0;
    color: #999999;
    width: 405rpx;
}
</style>