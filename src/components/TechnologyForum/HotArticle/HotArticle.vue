<template>
    <view class="hot-article">
       <expert-list :expert_list_name="expert_list_name"/>
       <expert-class/>
       <hot-paragraph :hot_paragraph_name="hot_paragraph_name"/>
    </view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import HotParagraph from "@/components/HotParagraph/HotParagraph.vue"
import ExpertList from "@/components/ExpertList/ExpertList.vue"
import ExpertClass from "@/components/ExpertClass/ExpertClass.vue"
export default defineComponent({
    name:'HostArticle',
    components:{
        HotParagraph,
        ExpertClass,
        ExpertList
    },
    setup() {
        const expert_list_name ="专家课堂"
        const hot_paragraph_name="热门文章"
        return {
            expert_list_name,
            hot_paragraph_name
        }
    },
})
</script>
