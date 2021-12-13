<template>
  <view>
    <u-parse :content="md" @preview="preview" @navigate="navigate"/>

  </view>
</template>

<script lang="ts">
import md from '../Article/user.md'
import uParse from '@/components/u-parse/u-parse.vue'
import {
  defineComponent,
  ref
} from 'vue'

export default defineComponent({
  name: 'Article',
  components:{
      uParse
  },
  setup () {
    const name = ref('a')
    function preview(src:any, e:any) {
      // do something
      console.log(src,e)
    }
    function navigate(href:any, e:any) {
      // do something
      console.log(href,e)
    }
    
    return {
      name,
      md,
      preview,
      navigate
      
    }
  }
})

</script>

<style>
@import url("@/components/u-parse/u-parse.css");
</style>
