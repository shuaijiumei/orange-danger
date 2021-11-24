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
        <view v-for="item in articleList">
          {{ item.articleAuthor }}
        </view>
    </view>
</template>

<script lang="ts">
import {
  defineComponent,
  ref, watch
} from "vue";
    import {RequestOptionsBetter, useHttp} from "@/utils/http";

    interface GetArticlesProps {
      pageNum?: number,
      pageSize?: number,
      apifoxResponseId?: number
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
        setup() {
            const title = ref('hello world')
            const articleList = ref<ArticlesDataType | null>()

            const handleClick = ():void => {
              console.log('click')
            }

            const getArticlesConfig: RequestOptionsBetter<GetArticlesProps> = {
              url: '/articles',
              data: {
                apifoxResponseId: 9751052
              }
            }

            const {state, data} = useHttp<GetArticlesProps,ArticlesDataType>(getArticlesConfig)

            watch(data, () => {
              console.log(data.value)
              articleList.value = data.value
            })

            return {
                title,
              handleClick,
              state,
              articleList
            };
        },
    });
</script>

<style scoped>

</style>
