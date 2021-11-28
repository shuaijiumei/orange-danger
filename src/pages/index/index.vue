<template>
    <view class="content">
        <view>
          <van-button type="default" :loading="state" @click="handleClick">
            你好
          </van-button>
        </view>
        <view v-for="item in data">
          <view :key="item.articleId">{{ item.articleAuthor }}</view>
        </view>
      <WeatherCard :weatherInfo="weatherInfo" />
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
    const weatherInfo = useGetWeatherInfo()

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
      weatherInfo
    }
  }
})
</script>

<style scoped>

</style>
