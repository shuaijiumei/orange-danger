<template>
  <view class="expert-details">
       <view class="header">
          <text class="header-title">专家简介</text>
      </view>
      <view class="expert-brief">
          <text class="expert-name">{{data[0].expertName}}</text>
          <img :src="data[0].expertImg" alt="">
          <text class="expert-info">{{data[0].expertInfo}}</text>
      </view>
      <hot-paragraph :hot_paragraph_name="hot_paragraph_name"/>
  </view>
</template>

<script lang="ts">
import {defineComponent,onMounted} from "vue"
import {useGotProfessionTeam} from "@/utils/ExpertDetails"
// emmm......HotParagraph这个组件可以在此处复用（但是data数据仍然使用的获取热门文章的data，回头改一下，毕竟随机数据看不出区别）
import HotParagraph from "@/components/HotParagraph/HotParagraph.vue"
export default defineComponent({
    name:"ExpertDetails",
    components:{
        HotParagraph
    },
    setup(){
        const {data,state} =useGotProfessionTeam()
        const hot_paragraph_name ="他的课堂"

        // 打印出data数据（debug）
        const consoleData =()=>{console.log(data)}
        onMounted(consoleData)
        return {    
            data,state,
            hot_paragraph_name
        }
    }
})
</script>

<style scoped>
.expert-details{
    margin-top: 20rpx;
    width: 100%;
    height: 350rpx;
    background-color: #ffffff;
}
.header{
    width: 100%;
    height: 85rpx;
    position: relative;
}
.header>.header-title{
    position: absolute;
    top: 50%;
    left: 52rpx;
    transform: translateY(-50%);
    color: black;
    font-weight: bold;
}
.expert-brief{
    width: 100%;
    height: 265rpx;
    position: relative;
}
.expert-brief>img{
    width: 180rpx;
    height: 235rpx;
    position: absolute;
    top: 0;
    left: 52rpx;
}
.expert-brief>.expert-name{
    position: absolute;
    top: 0;
    left: 265rpx;
    color: black;
    font-weight: bold;
}
.expert-brief>.expert-info{
    position: absolute;
    top: 44rpx;
    left: 265rpx;
    height: 450rpx;
    color: #999999;
}

</style>