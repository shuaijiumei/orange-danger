/**
 * Author: YZH on 2021-12-13
 * note 笔记
 * tips 特别注意
 * example 例子
 */

// 获取专家团队的信息
import {useHttp} from "@/utils/http";

// 请求参数接口，但不是很明白有什么用
interface GetExpertProps {
    pageNum: number,
    pageSize: number
}


// 定义接口，以声明返回数据类型
interface professionTeam {
    expertImg:string,
    expertAuthld:number,
    expertName:string,
    expertBrief:string,
    expertInfo:string,
    authEvidence:string
}

const config ={
    url:'/admin/expert/exam',
    // 不是很明白这个data内容有什么用
    data:{
        pageNum:5,
        pageSize:5
    }
}

export const useGotProfessionTeam =()=>{
    const {data,state} =useHttp<GetExpertProps,professionTeam[]>(config)

    return {
        data,
        state
    }
}