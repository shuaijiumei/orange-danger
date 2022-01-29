<template>
  <view class="collection-article">
     <view class="item" v-for="item in data" :key="item.articleId">
         <img :src="item.articleImg" alt="">
         <text class="title">{{item.articleTitle}}</text>
         <text class="pub-time">{{item.articlePubTime}}</text>
         <view class="collection-choice">
             <img src="@/static/MyCollection/collection-on.png" alt="">
             <text>已收藏</text>
         </view>
         <view class="praise-choice">
             <img src="@/static/MyCollection/praise-on.png" alt="">
             <text>9998</text>
         </view>
     </view>
  </view>
</template>

<script lang="ts">
import {defineComponent, onMounted} from "vue"
import {useGotCollectionArticles} from "@/utils/CollectionArticle"
export default defineComponent({
    name:"CollectionArticle",
    setup(){
        // 获取收藏的文章信息
        const {data,state} =useGotCollectionArticles()
        // const consoleData =()=>{console.log(data)};
        // onMounted(consoleData)

        return {
            data,state
        }    
    }
})
</script>

<style scoped>
.collection-article{
    width: 700rpx;
    height: 100%;
    transform: translateX(25rpx);
    background-color: #ffffff;
    border-radius: 5rpx;
}
.item{
    width: 100%;
    height: 180rpx;
    position: relative;
}
.item>img{
    width: 190rpx;
    height: 132rpx;
    position: absolute;
    top: 25rpx;
    left: 27rpx;
}
.item>.title{
    width: 430rpx;
    position: absolute;
    top: 35rpx;
    left: 245rpx;
    font-weight: bold;
}
.item>.pub-time{
    position: absolute;
    top: 130rpx;
    left: 245rpx;
    color: #999999;
    font-size: 20rpx;
}
.item>.collection-choice{
    width: 95rpx;
    height: 30rpx;
    position: absolute;
    top: 120rpx;
    left: 475rpx;
}
.collection-choice>img{
    width: 30rpx;
    height: 30rpx;
    position: absolute;
    top: 0;
    left: 0;
}
.collection-choice>text{
    font-size: 20rpx;
    white-space: nowrap;
    position: absolute;
    top: 50%;
    right: 0rpx;
    transform: translateY(-50%);
}

.item>.praise-choice{
    width: 95rpx;
    height: 30rpx;
    position: absolute;
    top: 120rpx;
    left: 588rpx;
}
.praise-choice>img{
    width: 30rpx;
    height: 30rpx;
    position: absolute;
    top: 0;
    left: 0;
}
.praise-choice>text{
    font-size: 20rpx;
    white-space: nowrap;
    position: absolute;
    top: 50%;
    right: 0rpx;
    transform: translateY(-50%);
}
</style>