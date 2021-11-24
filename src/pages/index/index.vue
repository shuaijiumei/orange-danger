<template>
    <view class="content">
        <view>
            <text class="title">{{ title }}</text>
        </view>
        <view>
          <van-button type="default" :loading="state" @click="handleClick">
            你好
          </van-button>
        </view>
        <view v-for="item in data">
          <view :key="item.articleId">{{ item.articleAuthor }}</view>
        </view>
    </view>
</template>

<script lang="ts">
import {
  defineComponent,
  ref, watch
} from 'vue'
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
  setup () {
    const title = ref('hello world')

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

    return {
      title,
      handleClick,
      state,
      data
    }
  }
})
</script>

<style scoped>

</style>
