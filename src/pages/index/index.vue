<template>
    <view class="content">
      <ImgSwiper />
      <ToolCard />
      <view class="title">近期天气</view>
      <WeatherCard @weatherDone="weatherDone" />
      <view class="title">近期热点</view>
      <ArticleCard />
      <LoadingAll :state="state" />
    </view>
</template>

<script lang="ts">
import {
  defineComponent, Ref,
  ref, UnwrapRef
} from 'vue'
import WeatherCard from "@/components/WeatherCard/WeatherCard.vue";
import ImgSwiper from "@/components/ImgSwiper/ImgSwiper.vue";
import ToolCard from "@/components/ToolCard/ToolCard.vue";
import ArticleCard from "@/components/ArticleCard/ArticleCard.vue";
import LoadingAll from "@/components/LoadingAll/LoadingAll.vue";

export default defineComponent({
  components: {
    WeatherCard,
    ImgSwiper,
    ToolCard,
    ArticleCard,
    LoadingAll
  },
  setup() {
    const state = ref<Boolean>(true)

    const weatherDone = (val: Ref<UnwrapRef<Boolean>>) => {
      console.log('i am state')
      state.value = !val.value
    }

    return {
      weatherDone,
      state,
    }
  }
})
</script>

<style scoped>
@import "./index.css";
</style>
