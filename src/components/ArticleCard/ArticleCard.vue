<template>
  <view class="content" v-for="item in data" :key="item.articleId">
    <view class="article-img">
      <img class="title-img" :src="item.articleImg" alt="img">
    </view>
    <view class="info">
      <view class="title">
        {{ item.articleTitle }}
      </view>
      <view class="more-detail">
        <view class="time">
          {{ item.articlePubTime}}
        </view>
        <view class="source" v-if="item.articleType">{{item.articleSource}}</view>
        <view class="source" v-else>{{item.articleAuthor}}</view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import {
  defineComponent,
} from 'vue'
import {useGetHotArticles} from "@/utils/Article";
// todo 兼容多个地方


export default defineComponent({
  name: "ArticleCard",
  setup() {
    const {data, state} = useGetHotArticles()


    return {
      data,
      state
    }
  }
})

</script>

<style scoped>
@import "index.css";
</style>