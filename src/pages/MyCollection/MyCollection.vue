<template>
  <view class="my-collection">
      <van-tabs v-model:active="active" 
        @click="onClickTab" 
        sticky swipeable
        ellipsis=false
        title-active-color="black">
          <van-tab v-for="item in data" :title="item.title" 
          :key='item.title' :index="item.index">
            <collection-article v-if="isActive==1"/>
            <collection-answer v-if="isActive==2"/>
         </van-tab>
    </van-tabs>
  </view>
</template>

<script lang="ts">
import {defineComponent,ref} from "vue"
import CollectionArticle from "@/components/MyCollection/CollectionArticle.vue"
import CollectionAnswer from "@/components/MyCollection/CollectionAnswer.vue"
export default defineComponent({
    name:"MyCollection",
    components:{
        CollectionArticle,
        CollectionAnswer
    },
    setup(){
         // 头部导航栏数据
        const data =[{
          title:'收藏的文章',
          index:1
        },{
          title:'收藏的回答',
          index:2
        }]
        // 选中标志，用于切换内容组件
        let isActive =ref(1);
        interface ChangeData {
          detail:{
            index:number
          }
        }
        // 切换内容组件函数
        const onClickTab =(data:ChangeData)=>{
          isActive.value =data.detail.index+1
            // console.log(data)
        }
        return {
          data,
          isActive,
          onClickTab
        }
    }
})
</script>

<style scoped>
/deep/.van-ellipsis{
    background-color: #f1f1f1;
}
</style>