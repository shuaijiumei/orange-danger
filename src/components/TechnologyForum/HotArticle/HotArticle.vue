<template>
    <view class="hot-article">
        <expert-list/>
       <expert-class/>
       <hot-paragraph/>
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
        
    },
})
</script>
