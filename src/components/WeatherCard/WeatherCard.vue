<template>
  <view class="container">

    <view class="top">
      <view class="top-left">
        <view>
            <img style="width: 30rpx; height: 30rpx" src="@/static/icon/location.png" alt=""> {{weatherInfo[0].name || '位置'}}
        </view>
        <view>
          {{weatherInfo[0].now || ''}}
          <text>
            ℃
          </text>
        </view>
      </view>
      <view class="top-right">
        <i :class="'qi-'+ weatherInfo[0].iconDay+ '-fill'" :style="'color:'+ weatherInfo[0].color"></i>
        <view>
          {{weatherInfo[0].text || ''}}
        </view>
        <view>
          最高温度：{{weatherInfo[0].tempMax || ''}}℃ 最低：{{weatherInfo[0].tempMin || ''}}℃
        </view>
      </view>
    </view>

    <view class="bottom">
<!--      展示五天的天气预报，布局上较为合理  -->
      <view  v-for="(item, index) in weatherInfo" v-if="index > 0 && index < 6" class="bottom-item" :key="item.fxDate">
        <text>{{item.fxDate}}</text>
        <i :class="'qi-'+item.iconDay+'-fill'" :style="'color:'+item.color"></i>
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
import {useGetWeatherInfo} from "@/utils/User";

export default defineComponent({
  name: "WeatherCard",

  setup() {
    const {weatherInfo, state:weatherInfoState} = useGetWeatherInfo()

    return {
      weatherInfo,
      weatherInfoState
    }
  }
})

</script>


<style scoped>
@import "./qweather-icons.css";
@import "./index.css";

</style>