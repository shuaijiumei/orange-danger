<template>
    <view class="host-article">
       <expert-list/>
       <article-card/>
    </view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ArticleCard from "@/components/ArticleCard/ArticleCard.vue"
import expertList from "@/components/expertList/expertList.vue"
export default defineComponent({
    name:'HostArticle',
    components:{
        ArticleCard,
        expertList
    },
    setup() {
        
    },
})
</script>