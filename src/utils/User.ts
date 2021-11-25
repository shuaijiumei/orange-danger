/**
 * Author: TBY on 2021-11-25
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import GetUserProfileRes = UniApp.GetUserProfileRes;
import {showError} from "@/utils/index";

// todo 更改为真实后台
const api = 'http://47.113.188.14:10086'

interface UserAuthorizeData {confirm: boolean, cancel: boolean}

interface UserCodeData { errMsg: string; code: string }

// 获得用户的code
export const getUserCode = (): Promise<UserCodeData> => {
    return new Promise<{errMsg: string, code: string}>((resolve, reject) => {
        // 拿到 临时凭证code
        uni.login({
            provider: "weixin",

            success: res => resolve(res),
            fail: err => reject(err)
        })
    })
}

// 向后台拿到 openid 并且存储到 全局变量中
export const getUserOpenId = (res: UserCodeData)=> {
    return new Promise( (resolve, reject) => {
        uni.request({

            url: `${api}/login`,
            data: {
                code: res.code
            },
            dataType: 'text',
            method: 'POST',
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },

            success: res => resolve(res),
            fail: err => reject(err)
        })
    })
}

// 获取用户授权
export const userAuthorize = (): Promise<boolean> => {
    return  new Promise<UserAuthorizeData>((resolve, reject) => {
        // todo 判断是否授权

       // todo 用 uni.authorize 代替
        uni.showModal({
            title: '授权使用',
            content: '请授权使用小程序',
            confirmText: '确认',
            cancelText: '取消',

            success: res => resolve(res),
            fail: err => reject(err)
        })

    }).then(res => {
        if (res.confirm) {
            return true
        } else if (res.cancel) {
            return false
        } else {
            return false
        }
    })
}

// 获得用户信息， 返回一个 promise
export const getUserProfile = (): Promise<GetUserProfileRes>=> {
    return  new Promise<GetUserProfileRes>((resolve, reject) => {
        uni.getUserProfile({
            desc: '获取用户信息',

            success: res => resolve(res),
            fail: err => reject(err)
        })
    })
}

// 将数据传到后台获取解密后的数据
export const getUserProfileDetail = (iv: string, encryptedData: string) => {

    return  new Promise((resolve, reject) => {
        uni.request({
            url: `${api}/info`,
            method: 'POST',
            data: {
                iv,
                encryptedData
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },

            success: res => resolve(res),
            fail: err => reject(err)
        })
    })
}

//  先check有没有失效，再从微信获取 code ，发送给服务端， 获得 openid和用户数据
export const userLogin = (): void => {
    // 获得用户的code
    getUserCode()
        .then(async res => {
        // 获取 openId
            try {
                await getUserOpenId(res)
            } catch (e) {
                return  Promise.reject(e)
            }
        // 获得用户授权
        return userAuthorize()
    }).then(async res => {
        // 获取用户信息， 在点击事件之后调用
        if (res) {
            // todo 判断用户信息是否还有效
            return await getUserProfile()
        } else {
            return  Promise.reject(1)
        }
    }).then(async res => {
        // 将 res 里的 iv encryptedData传给后台 获得解密后的数据
        const {iv, encryptedData} = res
        try {
            return await getUserProfileDetail(iv,encryptedData)
        } catch (e) {
            return Promise.reject(e)
        }
    }).then(res => {
        console.log('i am detail')

        console.log(res)
    }).catch(e => {
        const title = e === 1 ? '请授权使用' : '网络错误'
        showError(title)
    })

}