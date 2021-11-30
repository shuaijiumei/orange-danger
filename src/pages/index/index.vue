<template>
    <view class="content">
        <swiper class="swiper" indicator-dots autoplay>
          <swiper-item>
            <img src="@/static/1.jpg" alt="1">
          </swiper-item>
          <swiper-item>
            <img src="@/static/2.png" alt="2">
          </swiper-item>
          <swiper-item>
            <img src="@/static/3.png" alt="3">
          </swiper-item>
        </swiper>
      <WeatherCard :weatherInfo="weatherInfo" :state="weatherInfoState" />
    </view>
</template>

<script lang="ts">
import {
  defineComponent,
  ref
} from 'vue'
import WeatherCard from "@/components/WeatherCard/WeatherCard.vue";
import { RequestOptionsBetter, useHttp } from '@/utils/http'
import {useGetWeatherInfo} from "@/utils/User";

interface GetArticlesProps {
      pageNum: number,
      pageSize: number,
    }

interface ArticlesDataType {
      articleAuthor: string,
      articleContent: string,
      articleId: string,
      articleInfo: string,
      articlePraise: number,
      articlePubTime: string,
      articleReadTimes: number,
      articleTitle: string
}

export default defineComponent({
  components: {
    WeatherCard
  },
  setup() {
    const {weatherInfo, state:weatherInfoState} = useGetWeatherInfo()

    const handleClick = ():void => {
      console.log('click')
    }

    const getArticlesConfig: RequestOptionsBetter<GetArticlesProps> = {
      url: '/articles',
      data: {
        pageNum: 5,
        pageSize: 10
      }
    }

    const { state, data } = useHttp<GetArticlesProps, ArticlesDataType>(getArticlesConfig)
    console.log(data)

    return {
      handleClick,
      state,
      data,
      weatherInfo,
      weatherInfoState
    }
  }
})
</script>

<style scoped>
@import "./index.css";
</style>
