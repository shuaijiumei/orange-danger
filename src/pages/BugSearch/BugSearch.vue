<template>
  <view class="problemSearch">
    <van-search 
            class="search-box"
            v-model="searchContent"
            placeholder="柑橘病虫害"
            show-action=true
            @search="onSearch"
            @cancel="onCancel"
            shape="round"
        ></van-search>
     <view class="history">
            <view class="history-header">
                <text class="history-header-title">搜索记录</text>
                <van-icon 
                    class="history-header-icon"
                    name="delete-o" 
                    @click='delete_history'
                    size='20px'
                    />
            </view>
            <view class="history-content">
                    <view  v-for="item in searchHistory" :key=item class="history-item">
                        {{item}}
                    </view>
            </view>
        </view>
    <top-ranking></top-ranking>
  </view>
</template>

<script lang="ts">
import {
    defineComponent,
    ref
} from 'vue'

import TopRanking from "@/components/TopRanking/TopRanking.vue"
export default defineComponent({
    name:'BugSearch',
    components:{
        TopRanking
    },
    setup(){
       // 搜索记录
        let searchHistory =ref<string[]>([])
        //搜索内容
        let searchContent =ref<string>("")
        // 搜索之后添加到搜索记录中
        //定义val接口
        interface searchVal{
            detail:string
        }
        const onSearch =(val:searchVal)=>{
            // 添加到搜索记录
            searchHistory.value.push(val.detail)
            // 清空搜索内容
            searchContent.value =''
        }

        // 取消搜索，清空搜索内容即可
        const onCancel =()=>{
            searchContent.value=''
        }

        // 删除历史记录
        const delete_history =()=>{
          searchHistory.value.pop()
        }

        return {
            searchHistory,
            searchContent,
            onSearch,
            onCancel,
            delete_history
        }
    }
})
</script>

<style scoped>
.problemSearch{
    height: 100%;
}
.history{
    height: 14.4%;
}
.history>.history-header{
  width:100%;
  height: 25%;
  position: relative;
}
.history-header>.history-header-title{
  position: absolute;
  left: 27rpx;
  top: 50%;
  transform: translateY(-50%);
  font-weight: bold;
}
.history-header>.history-header-icon{
  position: absolute;
  right: 30rpx;
  top: 50%;
  transform: translateY(-50%);
}
.history>.history-content{
  width: 100%;
  height: 75%;
  display: flex;
  flex-wrap: wrap;
}
.history-content>.history-item{
  /* 文字居于盒子正中，且盒子宽度随内容自适应增大 */
  height: 64rpx;
  padding: 0rpx 16rpx;
  border-radius: 32rpx;
  display: flex;
  align-items: center;
  /* 盒子定位 */
  margin-top: 25rpx;
  margin-left: 42px;
  margin-right: -18px;
  color: #666666;
  background-color: #e0e0e0;
}
</style>