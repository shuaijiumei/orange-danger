<template>
  <view>
    <camera device-position="back" flash="off" @error="error" style="width: 100%; height: 300px;"></camera>
    <button type="primary" @click="takePhoto">拍照</button>
    <view>预览</view>
    <img mode="widthFix" :src="src"  alt="123"/>
  </view>
</template>

<script lang="ts">
import {
  defineComponent,
  ref
} from 'vue'

export default defineComponent({
  name: "BugScan",
  setup() {
    const src = ref("")

    const takePhoto = () => {
      const ctx = uni.createCameraContext()
      ctx.takePhoto({
        quality:'high',
        success: (res) => {
          console.log(res)
          src.value = res.tempImagePath
        }
      })
    }
    const error = (e: unknown) => {
      console.log(e)
    }


    return {
      takePhoto,
      error,
      src
    }
  }
})

</script>

<style scoped>

</style>