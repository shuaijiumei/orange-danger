<template>
    <swiper class="swiper" indicator-dots autoplay>
      <swiper-item>
        <img src="@/static/1.png"  mode='scaleToFill' alt="1">
      </swiper-item>
      <swiper-item>
        <img src="@/static/2.png" mode="scaleToFill" alt="2">
      </swiper-item>
      <swiper-item>
        <img src="@/static/3.png" mode="scaleToFill" alt="3">
      </swiper-item>
    </swiper>
</template>

<script lang="ts">
import {
  defineComponent,
  ref
} from 'vue'
import {useHttp} from "@/utils/http";

export default defineComponent({
  name: "ImgSwiper",
  setup() {
    // todo 改为向后端请求数据
    const {data, state} = useHttp<null,string[]>({
      url: '/imgs/carousel',
      data: null
    })


    const name = ref("Swiper")


    return {
      name,
      data,
      state
    }
  }
})

</script>

<style scoped>

.swiper{
  width: 95vw;
  height: 25vh;
  border-radius: 5px;
  box-shadow: 0 3px 3px lightgray;

  margin-top: 2vh;
  margin-bottom: 2vh;
}
</style>