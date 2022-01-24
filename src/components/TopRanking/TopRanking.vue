<template>
    <view class="top-ranking">
        <view class="header">
            近期热门虫害
        </view>
        <view class="ranking">
            <view v-for="(item,index) in data" :key='item.bugId' class="item">
                <text class="ranking-text" v-if="index>=3">{{index+1}}</text>
                <img class="ranking-img" :src="topImg[index+1]" v-if="index<3"/>
                <img class="hot" :src='topImg[0]' v-if='index==0'/>
                <img class="img-pest" :src="item.bugImg[0]" v-if="index<3" mode="widthFix"/>
                <text class="pest">{{item.bugInfo}}</text>
            </view>
        </view>
    </view>
</template>

<script lang='ts'>
import {defineComponent,ref} from 'vue'
// 获取热门病虫害
import {useGetHotPests} from "@/utils/RecentPopularPests"
export default defineComponent({
    name:'TopRanking',
    setup(){
        // 获取热门病虫害信息
        const {data,state} =useGetHotPests()
        // 排行前三的图标以及第一的热门图标
        const topImg =[
            require('@/static/TopRanking/hot.png'),
            require('@/static/TopRanking/first.png'),
            require('@/static/TopRanking/second.png'),
            require('@/static/TopRanking/third.png')
        ]
        return {
            data,state,
            topImg
        }
    }
})
</script>

<style scoped>
.top-ranking{
    height: 78.42%;
    position: relative;
}
.top-ranking>.header{
    width: 100%;
    height: 75rpx;
    font-weight: bold;
    padding-left: 27rpx;
    line-height: 75rpx;
}
.top-ranking>.ranking{
   height: 92% !important; 
   margin-left: 27rpx;
   margin-right: 30rpx;
   background-color: #ffffff;
   box-shadow: 0 0 10rpx #e0e0e0;
   border-radius: 15rpx;
   /* 解决BFC问题 */
   overflow: hidden;
}
/* 前三个高100rpx，剩下的35rpx高度 */
.ranking>.item:nth-child(-n+3){
    height: 100rpx;
    margin-top: 40rpx;
    margin-bottom: -10rpx;
}
.ranking>.item:nth-child(n+4){
    height: 35rpx;
    margin-top: 52rpx;
}
.item{
    position: relative;
}
.item>.ranking-img{
    position: absolute;
    top: 50%;
    left: 35rpx;
    transform: translateY(-50%);
    width: 35rpx;
    height: 45rpx;
}
.item>.ranking-text{
    position: absolute;
    top: 50%;
    left: 35rpx;
    transform: translateY(-50%);
    width: 35rpx;
    height: 45rpx;
    color: green;
    font-weight: bold;
}
.item>.img-pest{
    position: absolute;
    top: 50%;
    left: 100rpx;
    transform: translateY(-50%);
    width: 92rpx;
    height: 95rpx;
    margin-right: 30rpx;
}
.item>.hot{
    position: absolute;
    top: 50%;
    right: 32rpx;
    width: 80rpx;
    height: 35rpx;
    transform: translateY(-50%);
}
.item:nth-child(-n+3)>.pest{
    position: absolute;
    top: 50%;
    left: 223rpx;
    transform: translateY(-50%);
}
.item:nth-child(n+4)>.pest{
    position: absolute;
    top: 50%;
    left: 100rpx;
    transform: translateY(-50%);
}
</style>