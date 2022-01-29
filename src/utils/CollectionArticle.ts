/**
 * Author: YZH on 2022-01-29
 * note 笔记
 * tips 特别注意
 * example 例子
 */

// 获取收藏的文章内容
import {useHttp} from "@/utils/http";


interface GetCollectionArticlesProps {
    openid:number
}

// 定义接口，以声明返回数据类型
interface CollectionArticle {
    articleId:string,
    articleTitle:string,
    articleInfo:string,
    articleContent:string,    
    articleAuthor:string,    
    articlePubTime:string,    
    articleReadTimes:number,    
    articlePraise:string,
    articleImg:string 
}

const config ={
    url:'/collections/article',
    data:{
       openid:1
    }
}

export const useGotCollectionArticles =()=>{
    const {data,state} =useHttp<GetCollectionArticlesProps,CollectionArticle[]>(config)
    // const {data,state} =useHttp<{},CollectionArticle[]>(config,undefined)

    return {
        data,
        state
    }
}