/**
 * Author: YZH on 2022-01-16
 * note 笔记
 * tips 特别注意
 * example 例子
 * function 获取解决措施搜索中的近期热门病虫害搜索记录
 */

 import {useHttp} from "@/utils/http";

 //返回的近期热门病虫害对象接口
 interface RecentPopularPests {
    bugType:string,
    bugInfo:string,
   // 接口给了一个数组，不是很明白，不过也不影响
    bugImg:Array<string>,
    bugId:number
 }
 //配置信息
 const config ={ 
    url:"/bugs/hot",
    data :{}
 }

 export const useGetHotPests =()=>{
    const {data,state} =useHttp<{},RecentPopularPests[]>(config)

    return {data,state}
 } 