<template>
  <view class="content">
    <view class="person" @click="handleClickGetUserProfile">
      <view class="userImg" >
        <img :src="imgSrc" alt="img">
      </view>
      <view class="username">{{ userNickName }}</view>
    </view>
    <view class="tools">
      <view class="item" v-for="item in tool_list" :key="item.name">
        <img :src="item.img" alt="icon">
        <text class="name">{{item.name}}</text>
      </view>
    </view>
    <view class="function">
      <view class="collection">
        <img src="@/static/profile/collection.png" alt="">
        <text class="title">我的收藏</text>
        <text class="end">></text>
      </view>
      <view class="identification">
        <img src="@/static/profile/identification.png" alt="">
        <text class="title">我的识别记录</text>
        <text class="end">></text>
      </view>
    </view>
    <view class="to-be-added">
      <view class="added-item" v-for="item in function_list" :key="item.name">
        <img src="@/static/profile/personal.png" alt="">
        <text class="title">{{item.name}}</text>
        <text class="end">></text>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import {
  defineComponent,
  ref
} from 'vue'
import {getUserProfile} from "@/utils/User";

export default defineComponent({
  name: 'Profile',
  setup () {

    const imgSrc = ref<string>('../../static/icon/profile-selected.png')
    const userNickName = ref<string>('点击获取头像、昵称')

    const handleClickGetUserProfile = () => {
      getUserProfile().then(res => {
        console.log(res)
        imgSrc.value = res.userInfo.avatarUrl
        userNickName.value = res.userInfo.nickName
      }).catch(e => {
        console.log(e)
      })
    }

    // 工具栏列表
    const tool_list =[
      {
        img:require("@/static/icon/zaixianzixun.png"),
        name:"在线咨询"
      },{
        img:require("@/static/icon/jiShuKeTang.png"),
        name:"技术课堂"
      },{
        img:require("@/static/icon/binChongHai.png"),
        name:"病虫害识别"
      },{
        img:require("@/static/icon/nongYao.png"),
        name:"农药复配"
      },{
        img:require("@/static/icon/peiYaoFangAn.png"),
        name:"配药方案推荐"
      },{
        img:require("@/static/icon/zhuanJia.png"),
        name:"专家认证"
      }
    ]

    // 待补充功能列表
    const function_list =[
      {
        name:"个人信息"
      },
      {
        name:"其他功能"
      },
      {
        name:"其他功能"
      },
      {
        name:"其他功能"
      }
    ]

    return {
      handleClickGetUserProfile,
      imgSrc,
      userNickName,
      tool_list,
      function_list
    }
  }
})

</script>

<style scoped>
@import "./index.css";
</style>
