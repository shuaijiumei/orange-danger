<template>
  <view class="forum">
    <van-tabs v-model:active="active" @click="onClickTab">
      <van-tab v-for="item in data" :title="item.title" :key='item.title' :index="item.index">
        <HotArticle v-if="isActive==1"/>
        <PestIdentify v-if="isActive==2"/>
        <Pesticide v-if="isActive==3"/>
        <DosageCommend v-if="isActive==4"/>
     </van-tab>
    </van-tabs>
  </view>
</template>

<script lang="ts">
import {
  defineComponent,
  ref
} from 'vue'
// 导入需要用到的组件
import HotArticle from "@/components/TechnologyForum/HotArticle/HotArticle.vue"
import PestIdentify from "@/components/TechnologyForum/PestIdentify/Pestidentify.vue"
import Pesticide from "@/components/TechnologyForum/Pesticide/Pesticide.vue"
import DosageCommend from "@/components/TechnologyForum/DosageCommend/DosageCommend.vue"
export default defineComponent({
  name: 'TechnologyForum',
  components:{
    HotArticle,
    PestIdentify,
    Pesticide,
    DosageCommend
  },
  setup () {
    const name = ref('TechnologyForum');
    // 头部导航栏数据
    const data =[{
      title:'热门文章',
      index:1
    },{
      title:'病虫害识别',
      index:2
    },{
      title:'农药复配',
      index:3
    },{
      title:"配药方案推荐",
      index:4
    }]
    // 选中标志，用于切换内容组件
    let isActive =ref(1);
    // 切换内容组件函数(这个接口写的好奇怪，后面改)
    const onClickTab =(data:{detail:{index:number}})=>{
      isActive.value =data.detail.index+1
    }
    return {
      name,
      data,
      isActive,
      onClickTab
    }
  }
})

</script>

<style scoped>

</style>
