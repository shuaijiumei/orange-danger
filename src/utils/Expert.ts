/**
 * Author: YZH on 2021-12-13
 * note 笔记
 * tips 特别注意
 * example 例子
 */

// 获取专家团队的信息
import {useHttp} from "@/utils/http";

// 查询相应分页的专家团队信息
interface GetExpertsProps {
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
    // 返回一页四个专家信息
    data:{
        pageNum:1,
        pageSize:4
    }
}

export const useGotProfessionTeam =()=>{
    const {data,state} =useHttp<GetExpertsProps,professionTeam[]>(config,undefined)

    return {
        data,
        state
    }
}