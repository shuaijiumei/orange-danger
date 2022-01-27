/**
 * Author: YZH on 2022-01-27
 * note 笔记
 * tips 特别注意
 * example 例子
 * functions 获取某一专家详情信息
 */

 import {useHttp} from "@/utils/http";

// 查询某一expertId的专家信息
interface GetExpertsProps {
// 需要注意的是，由于使用apifox返回数据，即使这里指定了expertId，返回的仍是随机数据（即不止一个专家）
    expertId:number,
    pageNum: number,
    pageSize: number
}

// 定义接口，以声明返回数据类型
interface professionTeam {
    expertId:string,
    expertName:string,
    expertBrief:string,
    expertInfo:string,
    expertImg:string
}

const config ={
    url:'/experts',
    data:{
        expertId:2,
        pageNum:1,
        pageSize:4
    }
}

export const useGotProfessionTeam =()=>{
    // 这里借助泛型进行限制，即返回的data数据不是一个数组（professionTeam[],而是professionTeam）
    // emmm，虽然不知道为什么这样有用（ts学的不好）
    const {data,state} =useHttp<GetExpertsProps,professionTeam[]>(config,undefined)

    return {
        data,
        state
    }
}