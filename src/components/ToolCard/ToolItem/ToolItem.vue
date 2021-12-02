<template>
  <view class="content" @click="navigateToPage(navigateUrl)">
    <view> <img class="iconImg" :src="icon" alt="Icon"></view>
    <view>{{title}}</view>
    <view>点击进行识别</view>
  </view>
</template>

<script lang="ts">
import {
  defineComponent,
  ref
} from 'vue'

export default defineComponent({
  name: "ToolItem",
  props: {
    icon: String,
    title: String,
    navigateUrl: String
  },
  setup(props) {
    const {icon, title, navigateUrl} = props

    const navigateToPage = (navigateUrl: string) => {
      uni.navigateTo({
        url: navigateUrl
      })
    }

    return {
      icon,
      title,
      navigateToPage,
      navigateUrl
    }
  }
})

</script>

<style scoped>
.content {
  background-color: white;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  width: 45.7vw;
  height: 20vh;

  border-radius: 5px;

  box-shadow: 0 3px 3px lightgray;
}

.content>view:nth-child(2) {
  font-weight: bold;
  font-size: 30rpx;
}
.content>view:nth-child(3) {
  font-weight: lighter;
  font-size: 24rpx;
}

.iconImg {
  width: 150rpx;
  height: 150rpx;
}
</style>