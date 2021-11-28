<template>
  <view class="container">
    <view class="top">
      <view class="top-left">

      </view>
      <view class="top-right">

      </view>
    </view>

    <view class="bottom">
      <view  v-for="item in weatherInfo" class="bottom-item" :key="item.fxDate">
        <text>{{item.fxDate}}</text>
        <i :class="'qi-'+item.iconDay"></i>
        <text>{{item.tempMin}}~{{item.tempMax}}℃</text>
      </view>
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
@import "./qweather-icons.css";
@import "./index.css";

</style>