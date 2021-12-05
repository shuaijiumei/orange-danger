/**
 * Author: TBY on 2021-12-02
 * note 笔记
 * tips 特别注意
 * example 例子
 */

import {useHttp} from "@/utils/http";
import {unixTime2NormalTime} from "@/utils/index";

interface GetArticlesProps {
    pageNum: number,
    pageSize: number
}

interface ArticleHotDataType {
    articleAuthor: string,
    articleContent: string,
    articleId: string,
    articleInfo: string,
    articlePraise: number,
    articlePubTime: string,
    articleReadTimes: number,
    articleTitle: string,
    articleType: boolean,
    articleSource: string,
    articleImg: string
}

const config = {
    url: '/articles/hot',
    data: {
        pageNum: 5,
        pageSize: 5
    }
}
const handleData = (data: ArticleHotDataType[]) => {
    return data.map(item => {
       item.articlePubTime = unixTime2NormalTime(item.articlePubTime, 2)
    return item
    })
}

export const useGetHotArticles = () => {
    const {data, state} = useHttp<GetArticlesProps,ArticleHotDataType[]>(config, handleData)

    return {
        data,
        state
    }
}