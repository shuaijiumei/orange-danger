<template>
  <view>
    i am {{ name}}
    <view v-for="item in weatherInfo">
      {{item.fxDate}}
      {{item.sunrise}}
      {{item.moonPhase}}
    </view>
  </view>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
} from 'vue'

export default defineComponent({
  name: "WeatherCard",
  props: {
    // 动态数据, 直接使用, 类型参考 WeatherDataType
    weatherInfo: Object,
  },

  setup(props) {
    const name = ref("WeatherCard")

    return {
      name,
    }
  }
})

</script>

<style scoped>

</style>