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
  name: "BugSearch",
  setup() {
    const name = ref("BugSearch")


    return {
      name
    }
  }
})

</script>

<style scoped>

</style>