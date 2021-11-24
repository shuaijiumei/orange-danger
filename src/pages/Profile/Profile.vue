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
    name: "Profile",
    setup() {
    const name = ref("Profile")

    return {
        name
    }
    }
})

</script>

<style scoped>

</style>