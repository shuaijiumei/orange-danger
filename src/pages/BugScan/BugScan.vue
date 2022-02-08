<template>
  <view class="content">
    <button class="button" @click="openAlbum">上传照片</button>
    <LoadingAll :state="loadingState" />
  </view>
</template>

<script lang="ts">
import {
  defineComponent,
  ref
} from 'vue'
import {http, useHttp} from "@/utils/http";
import {showError} from "@/utils";
import LoadingAll from "@/components/LoadingAll/LoadingAll.vue";

export default defineComponent({
  name: "BugScan",
  components: {
    LoadingAll
  },
  setup() {
    const loadingState = ref(false)
    const openHistory = () => {
      // todo 跳转至历史记录页面
      console.log('open history')
    }

    const openAlbum = () => {
      console.log('open')

      uni.chooseImage({
        sizeType: 'compressed',
        count: 1,
        success: async (res) => {
          console.log(res)
          const imgURL = res.tempFilePaths[0]
          loadingState.value = true
          http<{imgUrl: string}, any>({
            url: '/upload/img/bug',
            data: {
              imgUrl: imgURL
            },
            method: 'POST'
          }).then(() => {
            console.log('scan')
            const { data } = useHttp<{scanImg: string}, any>({
              url: '/bugs/scan',
              data: {
                scanImg: imgURL
              },
             method: 'POST'
            })
            // todo go to next page to show Data
            console.log(data)
          }).catch(e => {
            showError(e.msg)
          }).finally(() => {
            loadingState.value = false
          })
        },
        fail: (err) => {
          console.log(err)
        }

      })
    }

    const error = (e: unknown) => {
      console.log(e)
    }


    return {
      openAlbum,
      openHistory,
      error,
      loadingState
    }
  }
})

</script>

<style scoped>
@import "index.css";
</style>