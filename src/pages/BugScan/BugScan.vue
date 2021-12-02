<template>
  <view>
    i am {{ name}}
  </view>
</template>

<script lang="ts">
import {
  defineComponent,
  ref
} from 'vue'

export default defineComponent({
  name: "BugScan",
  setup() {
    const name = ref("BugScan")


    return {
      name
    }
  }
})

</script>

<style scoped>

</style>