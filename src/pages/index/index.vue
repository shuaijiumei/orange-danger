<template>
    <view class="content">
      <ImgSwiper />
      <ToolCard />
      <view class="title">近期天气</view>
      <WeatherCard />
      <view class="title">近期热点</view>
      <ArticleCard />
    </view>
</template>

<script lang="ts">
import {
  defineComponent,
  ref
} from 'vue'
import WeatherCard from "@/components/WeatherCard/WeatherCard.vue";
import ImgSwiper from "@/components/ImgSwiper/ImgSwiper.vue";
import ToolCard from "@/components/ToolCard/ToolCard.vue";
import ArticleCard from "@/components/ArticleCard/ArticleCard.vue";
import { RequestOptionsBetter, useHttp } from '@/utils/http'

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
    WeatherCard,
    ImgSwiper,
    ToolCard,
    ArticleCard
  },
  setup() {

    const getArticlesConfig: RequestOptionsBetter<GetArticlesProps> = {
      url: '/articles',
      data: {
        pageNum: 5,
        pageSize: 10
      }
    }

    const { state, data } = useHttp<GetArticlesProps, ArticlesDataType>(getArticlesConfig)

    return {
      state,
      data
    }
  }
})
</script>

<style scoped>
@import "./index.css";
</style>
