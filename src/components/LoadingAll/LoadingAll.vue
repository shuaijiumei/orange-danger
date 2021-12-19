<template>
  <van-overlay :show="state" bind:click="onClickHide">
    <van-loading class="loading" size="80rpx" vertical v-show="state">加载中...</van-loading>
  </van-overlay>
</template>

<script lang="ts">
import {
  defineComponent,
  ref
} from 'vue'

export default defineComponent({
  name: "LoadingAll",
  props: {
    state: Boolean
  },
})

</script>

<style scoped>
.loading {
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
}
</style>