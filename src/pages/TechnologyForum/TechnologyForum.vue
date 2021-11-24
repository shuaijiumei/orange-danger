<template>
  <view>
    i am {{name}}
  </view>
</template>

<script lang="ts">
import {
    defineComponent,
    ref
} from 'vue'

export default defineComponent({
    name: "TechnologyForum",
    setup() {
    const name = ref("TechnologyForum")
    
    
    return {
        name
    }
    }
})

</script>

<style scoped>

</style>