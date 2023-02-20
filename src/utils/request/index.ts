import axios from 'axios'

//引入相对应的Result即接口返回的相关格式

//引入TS中的axios来创建axios实例 
//其中从左到右依次引入的是创建实例，报错，请求拦截器，相应拦截器 
import type { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'


// 创建axios实例
const service: AxiosInstance = axios.create({
  baseURL: 'https://admin-api.macrozheng.com', // api的base_url
  timeout: 15000 // 请求超时时间
})


//创建请求拦截器
service.interceptors.request.use((config) => {
  return config
}, (error: AxiosError) => {
  return Promise.reject(error)
})



service.interceptors.response.use((response: AxiosResponse) => {
  return response
}, (error: AxiosError) => {
  //   // 处理 HTTP 网络错误
  //  let message = ''
  //   // HTTP 状态码
  //   const status = error.response?.status
  //   switch (status) {
  //     case 401:
  //       message = 'token 失效，请重新登录'
  //       // 这里可以触发退出的 action
  //       break;
  //     case 403:
  //       message = '拒绝访问'
  //       break;
  //     case 404:
  //       message = '请求地址错误'
  //       break;
  //     case 500:
  //       message = '服务器故障'
  //       break;
  //     default:
  //       message = '网络连接故障'
  //   }

  return Promise.reject(error)
})

export default service
