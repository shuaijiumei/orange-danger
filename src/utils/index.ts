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

// 响应是否成功
export const isResponseOk = (data: string | AnyObject) => {
  if (typeof data === 'string') {
    return false
  } else {
    return data.status
  }
}

// 响应成功 但返回失败
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

// 解决时间戳上有一个0的问题
const dealOneZero = (time: number):string => {
  if ( time < 10) {
    return `0${time}`
  } else {
    return String(time)
  }
}

// Unix 时间戳到 正常时间
export const unixTimeToNormalTime = (time: string, formType: number = 0 ): string => {
  const d = new Date(Number.parseInt(time, 10) * 1000)

  let t : string

  switch (formType){
    // 年-月-日 格式字符串
    case 0: t = `${d.getFullYear()}-${dealOneZero(d.getMonth()+1)}-${dealOneZero(d.getDate())}`
          break
    // 小时:分钟:秒 格式字符串
    case 1: t = `${d.getHours()}:${dealOneZero(d.getMinutes())}:${dealOneZero(d.getSeconds())}`
          break
    default: t = '未成功识别'
  }

  return t

}

export const showError = (title: string) => {
  uni.showToast({
    title,
    icon: 'error'
  })
}
