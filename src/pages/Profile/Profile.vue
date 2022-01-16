<template>
  <view class="content">
    <view class="person" @click="handleClickGetUserProfile">
      <view class="userImg" >
        <img :src="imgSrc" alt="img">
      </view>
      <view class="username">{{ userNickName }}</view>
    </view>
    <view class="tools">
      <view>
        <img src="../../static/icon/zaixianzixun.png" alt="icon">
      </view>
    </view>
    <view class="function">

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

    return {
      handleClickGetUserProfile,
      imgSrc,
      userNickName
    }
  }
})

</script>

<style scoped>
@import "./index.css";
</style>
