/**
 * Author: TBY on 2021-11-24
 * note 笔记
 * tips 特别注意
 * example 例子
 */

// 为了傻逼 uniapp 没有给 Response 传泛型而补救的函数， 针对包裹了两层的 data
// 目前不考虑 ArrayBuffer类型
export const isResponseString = (data: string | AnyObject) => {
  if (typeof data === 'string') {
    return data
  } else {
    return data.data
  }
}

export const isResponseOk = (data: string | AnyObject) => {
  if (typeof data === 'string') {
    return false
  } else {
    return data.status
  }
}

// 抛出错误到 catch 里 处理
export const throwResponseError = (data: string | AnyObject) => {
  if (typeof data === 'string') {
    return Promise.reject({
      msg: '遇见未知错误，呜呜呜'
    })
  } else {
    return Promise.reject({
      msg: data.msg
    })
  }
}
