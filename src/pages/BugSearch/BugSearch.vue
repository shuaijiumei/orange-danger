<template>
  <view class="problemSearch">
        <van-search 
            v-model="searchItem"
            placeholder="柑橘病虫害"
            show-action=true
            @search="onSearch"
            @cancel="onCancel"
            shape="round"
        ></van-search>
        <view class="search-history">
            <view class="history-header">
                <text>搜索记录</text>
                <van-icon 
                    name="delete-o" 
                    @click='delete_history'
                    size='20px'
                    />
            </view>
            <view class="history-items">
                <view class="history-item" v-for="item in history" :key="item">
                    <view class="item">
                        {{item}}
                    </view>
                </view>
            </view>
        </view>
        <view class="hot-problem">
            <view class="hot-header">近期热门病虫害</view>
            <view class="hot-list">
                <view :class="{'hotest':index<3}" v-for="(item,index) in hotProblem" :key='hotProblem[index]'>
                    <text class="order">{{index+1}}</text>
                    <image src="@/static/logo.png" v-if="index<3" mode="widthFix"/>
                    <text class="name">{{hotProblem[index]}}</text>
                    <text v-if='index==0' class="first">热门</text>
                </view>
            </view>
        </view>
  </view>
</template>

<script lang="ts">
import {
    defineComponent,
    ref
} from 'vue'
export default defineComponent({
    name:'BugSearch',
    setup(){
        // 搜索框搜素与取消功能
        let history =ref<string[]>([])
        let searchItem =ref<String>("")
        // 搜索之后添加到历史记录中
        const onSearch =(val:{detail:string})=>{
            history.value.push(val.detail)
            searchItem.value=''
        }
        const onCancel =()=>{
            searchItem.value=''
        }
        // 删除历史记录功能
        const delete_history =()=>{
            history.value =[]
        }

        // 请求近期热门病虫害的数据(请求先注释掉)
        const hotProblem =ref<string[]>([])
        // const getHotproblem = async ()=>{
        //     hotProblem.value =awiat ...
        // }
        // onMounted(getHotproblem)
        // 自己随便写点数据
        hotProblem.value =['白粉病','枯萎病','柑橘黄龙病','叶斑病','疫病','白绢病','灰霉病']
        return{
            searchItem,
            history,
            hotProblem,
            onSearch,
            onCancel,
            delete_history,
        }

    }
})
</script>

<style scoped>
.problemSearch{
    height: 100%;
}
/* 搜索历史部分 */
.search-history{
    position: relative;
    width: 100%;
    height: 15%;
}
.search-history>.history-header{
    position: absolute;
    top: 0;
    width: 100%;
    height: 20%;
}
.search-history>.history-header>text{
    position: absolute;
    top: 0;
    left: 5%;
    font-weight: bold;
}
.search-history>.history-header>van-icon{
    position: absolute;
    top: 0;
    right: 5%;
    height: 15%;
}
.history-items{
    position: absolute;
    top: 20%;
    width: 100%;
    height: 80%;
    display: flex;
    flex-wrap: wrap;
}
.history-items>.history-item{
    height: 20%;
    margin-left:5%   
}
.item{
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(133, 125, 125);
    border-radius: 5px;
}
.hot-problem{
    position: absolute;
    top: 25%;
    width: 100%;
    height: 75%;
}
.hot-problem>.hot-header{
    position: absolute;
    top: 0;
    left: 5%;
    width: 100%;
    height: 5%;
    font-weight: bold;
}
.hot-list{
    position: absolute;
    top: 5%;
    width: 100%;
    height: 95%;
}
.hot-list>view{
    position: relative;
    display: flex;
    justify-content:flex-start;
    align-items: center;
    margin-top: 5%;
}
.hotest{
    height: 10%;
}
image{
    margin-left: 5%;
    width: 10%;
}
.first{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 5%;
    color: white;
    background-color: red;
}
.hot-list .order{
    color: green;
    margin-left: 5%;
    font-weight: bold;
}
.hot-list .name{
    margin-left: 5%;
    font-weight: bold;
}

</style>