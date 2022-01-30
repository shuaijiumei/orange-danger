/**
 * Author: YZH on 2022-01-30
 * note 笔记
 * tips 特别注意
 * example 例子
 */

// 获取收藏的文章内容
import {useHttp} from "@/utils/http";


interface GetQuestionsProps {
    pageSize:number,
    pageNum:number
}

// 定义接口，以声明返回数据类型
interface Questions {
    questionTitle:string,
    questionContent:string,
    questionImg:Array<string>,
    questionId:number,
    questionAnswerNum:number,
    questionPubTime:string,
    openid:string
}

const config ={
    url:'/questions',
    data:{
       pageSize:1,
       pageNum:1
    }
}

export const useGetQuestions =()=>{
    const {data,state} =useHttp<GetQuestionsProps,Questions[]>(config)
    // const {data,state} =useHttp<{},CollectionArticle[]>(config,undefined)

    return {
        data,
        state
    }
}