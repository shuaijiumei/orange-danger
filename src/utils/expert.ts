/**
 * Author: YZH on 2021-12-13
 * note 笔记
 * tips 特别注意
 * example 例子
 */

// 获取专家团队的信息
import {useHttp} from "@/utils/http";


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
    data:{}
}

export const useGotProfessionTeam =()=>{
    const {data,state} =useHttp<{},professionTeam[]>(config)

    return {
        data,
        state
    }
}