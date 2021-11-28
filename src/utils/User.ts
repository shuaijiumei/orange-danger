/**
 * Author: TBY on 2021-11-25
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import GetUserProfileRes = UniApp.GetUserProfileRes;
import {showError, yearTime2Month} from "@/utils/index";
import GetLocationSuccess = UniApp.GetLocationSuccess;
import {Ref, ref, UnwrapRef} from "vue";
import RequestSuccessCallbackResult = UniApp.RequestSuccessCallbackResult;

// 天气接口返回结果
export interface WeatherDataType {
    fxDate: string,
    sunrise: string,
    sunset: string,
    moonrise: string,
    moonset: string,
    moonPhase: string,
    moonPhaseIcon: string,
    tempMax: string,
    tempMin: string,
    iconDay: string,
    textDay: string,
    iconNight: string,
    textNight: string,
    wind360Day: string,
    windDirDay: string,
    windScaleDay: string,
    windSpeedDay: string,
    wind360Night: string,
    windDirNight: string,
    windScaleNight: string,
    windSpeedNight: string,
    humidity: string,
    precip: string,
    pressure: string,
    vis: string,
    cloud: string,
    uvIndex: string
}


// todo 更改为真实后台
const api = 'http://47.113.188.14:10086'
// todo 审核完成更改为 7d
const weatherApi = 'https://devapi.qweather.com/v7/weather/3d'

const mockKey = '17c47d633f504ce5afc1217010e42fed'

export interface UserAuthorizeData {confirm: boolean, cancel: boolean}

export interface UserCodeData { errMsg: string; code: string }

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
export const getUserOpenId = (res: UserCodeData) => {
    return new Promise<RequestSuccessCallbackResult>( (resolve, reject) => {
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
export const userAuthorize = (): Promise<any> => {
    return  new Promise<UserAuthorizeData>((resolve, reject) => {
        // todo 判断是否授权
        uni.getSetting({
            success(res) {
                console.log('授权情况')
                console.log(res)
            }
        })

        uni.authorize({
            scope: 'scope.userLocation',

            success: res => resolve(res),
            fail: err => reject(err)
        })

    })
}

// todo 在我的页面点击调用授权信息
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

// 获取用户位置
export const getUserLocation = () => {
    return new Promise<GetLocationSuccess>((resolve, reject) => {
        uni.getLocation({
            success: res => resolve(res),
            fail: err => reject(err)
        })
    } )
}

// 封装天气预报api 返回值不确定， 可能是 403， 所以给any类型
export const getWeather = (longitude: number,latitude:number ):any => {
    return new Promise((resolve, reject) => {
        uni.request({
            url: `${weatherApi}?key=${mockKey}&location=${longitude},${latitude}`,
            method: 'GET',

            success: res => resolve(res),
            fail: err =>  reject(err)
        })
    })
}

//  先check有没有失效，再从微信获取 code ，发送给服务端， 获得 openid和用户数据
export const useGetOpenId = () => {
    // 获得用户的code
    getUserCode()
        .then(async res => {
            try {
                // 获取 openId
                const {data} = await getUserOpenId(res)

                // 存入 app 全局变量
                const app = getApp()
                app.globalData.openId = data
            } catch (e) {
                return  Promise.reject(e)
            }
    }).catch(e => {
        console.log(e)

        showError('获取用户openId失败')
    })

}

// 获得天气信息
export const getWeatherInfo = async (): Promise<WeatherDataType[] | null> => {

    try {
        // 获得用户授权
        await userAuthorize()
        console.log('i am position')
        const {longitude, latitude} = await getUserLocation()
        const { data } = await getWeather(longitude, latitude)

        return data.daily

    } catch (e) {
        return Promise.reject(e)
    }

}

export const useGetWeatherInfo = (): Ref<UnwrapRef<WeatherDataType[] | undefined>> => {
    const weatherInfo = ref<WeatherDataType[]>()

    getWeatherInfo().then(res => {
        weatherInfo.value = res?.map(item => {
            item.fxDate = yearTime2Month(item.fxDate)
            return item
        } )
    }).catch(e => {
        console.log(e)
        showError('获取天气信息失败')
    })

    return weatherInfo
}