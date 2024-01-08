/**
 * Author: TBY on 2021-11-24
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import RequestOptions = UniApp.RequestOptions;
import RequestSuccessCallbackResult = UniApp.RequestSuccessCallbackResult;
import { ref, Ref, UnwrapRef } from "vue";
import {
  isResponseOk,
  isResponseString,
  showError,
  throwResponseError,
} from "@/utils/index";

// APIFox 模拟地址
const apiUrl = "http://127.0.0.1:4523/m1/469263-0-default/api";

// 规定返回 data 类型的泛型 P
// state 请求中为 true 请求完成 为 false
export interface HttpResponse<P> {
  state: Ref<UnwrapRef<boolean>>;
  data: Ref<UnwrapRef<P>>;
}

// 对传入参数做出更严格的限制，根据接口文档编写接口， 哪些参数必传，哪些可选
export interface RequestOptionsBetter<T> extends Omit<RequestOptions, "data"> {
  data: T | T[];
}

// T 是传入参数的类型  P是返回参数的类型: 注：只考虑data 里面的 articleId 之类的细节类型
export const http = <T, P>(config: RequestOptionsBetter<T>) => {
  return new Promise<RequestSuccessCallbackResult>((resolve, reject) => {
    uni.request({
      url: apiUrl + config.url,
      data: config?.data,
      method: config?.method || "GET",
      timeout: config?.timeout || 60000,
      header: config?.header,
      dataType: config?.dataType || "json",
      responseType: config?.responseType || "text",
      sslVerify: config?.sslVerify || true,
      withCredentials: config?.withCredentials || false,
      firstIpv4: config?.firstIpv4 || false,

      // 注意： 只要服务器返回都会进入 success 回调
      success: (res) => resolve(res),
      fail: (err) => reject(err),
    });
  });
};

// vue hook 函数
export const useHttp = <T, P>(
  config: RequestOptionsBetter<T>,
  fun?: Function
): HttpResponse<P | null> => {
  const state = ref(true);
  const data = ref<P | null>(null);

  http(config)
    .then((res) => {
      console.log(res);
      if (isResponseOk(res.data)) {
        data.value = isResponseString(res.data);
        if (fun instanceof Function) {
          data.value = fun(data.value);
        }
      } else {
        // 处理响应成功 但 请求失败的错误
        throwResponseError(res.data).catch((err) => {
          console.log(err);
          // 弹出错误提示文案
          uni.showToast({
            title: err?.msg || "出错啦",
            icon: "error",
          });
        });
      }
    })
    .catch((err) => {
      // 处理响应失败的错误
      console.error(err);
      showError("数据请求失败");

      data.value = null;
    })
    .finally(() => {
      // 未得到服务端返回
      state.value = false;
    });

  return {
    state,
    data,
  };
};
