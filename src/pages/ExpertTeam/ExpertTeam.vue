<template>
    <view class="expert-team">
        <expert-list :expert_list_name="expert_list_name"/>
        <hot-paragraph :hot_paragraph_name="hot_paragraph_name"/>
    </view>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import ExpertList from "@/components/ExpertList/ExpertList.vue"
import HotParagraph from "@/components/HotParagraph/HotParagraph.vue"
export default defineComponent({
    name:"ExpertTeam",
    components:{
        ExpertList,
        HotParagraph
    },
    setup(){
        const expert_list_name ='专家团队'
        const hot_paragraph_name="专家课堂"
        return {
            expert_list_name,
            hot_paragraph_name
        }
    }
})
</script>

<style>

</style>