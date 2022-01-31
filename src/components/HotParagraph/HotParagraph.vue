<template>
  <view class="hot-paragraph">
      <view class="header">
          <text class="header-title">{{hot_paragraph_name}}</text>
          <text class="more">查看更多></text>
      </view>
      <view class="paragraph">
          <view class="item" v-for="item in data" :key="item.articleName">
              <img :src="item.articleImg" alt="">
              <text class="title">{{item.articleName}}</text>
              <text class="brief">{{item.articleInfo}}</text>
          </view>
      </view>
  </view>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {useGetHotArticles} from "@/utils/Article"
export default defineComponent({
    name:"HotParagraph",
    props:{
        hot_paragraph_name:String,
    },
    setup(props){
        // 获取热门文章
        const {data,state} =useGetHotArticles();

        const {hot_paragraph_name} =props
        return {
            data,
            state,
            hot_paragraph_name
        }
    }
})
</script>

<style scoped>
.hot-paragraph{
    margin-top: 20rpx;
    background-color: #ffffff;
}
.header{
    width: 100%;
    height: 90rpx;
    position: relative;
}
.header>.header-title{
    position: absolute;
    top: 50%;
    left: 52rpx;
    transform: translateY(-50%);
    font-weight: bold;
}
.header>.more{
    position: absolute;
    top: 50%;
    right: 40rpx;
    transform: translateY(-50%);
    color: #999999;
}
.item{
    width: 748rpx;
    height: 160rpx;
    margin-left: 52rpx;
    border-bottom: 1rpx solid #c8c8c8;
    position: relative;
    margin-bottom: 25rpx;
}
.item>img{
    width: 215rpx;
    height: 135rpx;
}
.item>.title{
    display: block;
    position: absolute;
    top: 16rpx;
    left: 240rpx;
    font-weight: bold;
}
.item>.brief{
    position: absolute;
    top: 75rpx;
    left: 240rpx;
    width: 405rpx;
    color: #999999;
}
</style>