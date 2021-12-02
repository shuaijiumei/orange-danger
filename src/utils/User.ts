/**
 * Author: TBY on 2021-11-25
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import GetUserProfileRes = UniApp.GetUserProfileRes;
import {isResponseString, showError, yearTime2Month} from "@/utils/index";
import GetLocationSuccess = UniApp.GetLocationSuccess;
import {Ref, ref, UnwrapRef} from "vue";
import RequestSuccessCallbackResult = UniApp.RequestSuccessCallbackResult;
import {http} from "@/utils/http";

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
    uvIndex: string,
    color?: string,
    name?: string,
    now?: string
}


// todo 更改为真实后台
const api = 'http://47.113.188.14:10086'

const weatherApi = 'https://devapi.qweather.com/v7/weather/'

const mockKey = '17c47d633f504ce5afc1217010e42fed'

const weatherColorMap = new Map([
    ['多云', '#2980b9'],
    ['晴', 'gold'],
    ['阴', 'grey'],
    ['雨', 'white']
])

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
export const getWeather = (longitude: number,latitude:number, now=false ):any => {
    return new Promise((resolve, reject) => {
        uni.request({
            url: `${weatherApi}${now ? 'now':'7d'}?key=${mockKey}&location=${longitude},${latitude}`,
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

                // todo 存入 app 全局变量
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

// 通过longitude latitude 获得地址信息
export const getLocationMoreDetail = (longitude: number, latitude: number):Promise<RequestSuccessCallbackResult> => {
    return new Promise((resolve, reject) => {
        uni.request({
            url: `https://geoapi.qweather.com/v2/city/lookup?location=${longitude},${latitude}&key=${mockKey}`,

            success: res => resolve(res),
            fail: err => reject(err)
        })
    })
}

// 获得实时天气信息


// 获得天气信息
export const getWeatherInfo = async (): Promise<WeatherDataType[] | null> => {

    try {
        // 获得用户授权
        await userAuthorize()
        const {longitude, latitude} = await getUserLocation()
        // 获得地址信息， 存入数组
        // todo 修改获得数据数组的第一个元素，增加实时天气
        const addressData = isResponseString(await getLocationMoreDetail(longitude,latitude))

        // 获得天气信息
        const data = isResponseString(await getWeather(longitude, latitude))
        // 获得当前天气信息
        const nowData = isResponseString(await getWeather(longitude, latitude, true))

        data.daily[0].name = addressData.location[0].name
        data.daily[0].now = nowData.now.temp
        data.daily[0].text = nowData.now.text

        return data.daily

    } catch (e) {
        return Promise.reject(e)
    }

}

export const useGetWeatherInfo = () => {
    const weatherInfo = ref<WeatherDataType[]>()
    const state = ref(false)

    getWeatherInfo().then(res => {
        // 只有数组第一个元素有地址信息
        weatherInfo.value = res?.map(item => {
            item.fxDate = yearTime2Month(item.fxDate)
            item.color = weatherColorMap.get(item.textDay)
            return item
        } )
    }).catch(e => {
        console.log(e)
        showError('获取天气失败')
    }).finally(() => {
        state.value = true
    })

    return {weatherInfo, state}
}