/**
 * Author: YZH on 2022-01-29
 * note 笔记
 * tips 特别注意
 * example 例子
 */

// 获取收藏的回答
import {useHttp} from "@/utils/http";


interface GetCollectionAnswersProps {
    questionId:number,
    pageNum:number,
    pageSize:number
}

// 定义接口，以声明返回数据类型
interface CollectionAnswer {
    // 应该还要返回一个问题的内容
    question:string,
    answerId:number,
    answerContent:string,
    answerTime:string,
    answerPraise:string,
    openid:string,
    answerImg:string,
    answerName:string
    // 感觉差了回答者的头像和姓名信息（根据openid来获得吗？？）
}

const config ={
    url:'/answers',
    data:{
       questionId:1,
       pageNum:1,
       pageSize:1
    }
}

export const useGotCollectionAnswers =()=>{
    const {data,state} =useHttp<GetCollectionAnswersProps,CollectionAnswer[]>(config)
    // const {data,state} =useHttp<{},CollectionArticle[]>(config,undefined)

    return {
        data,
        state
    }
}