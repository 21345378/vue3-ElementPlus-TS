/* 导出封装的请求方法 */
//使用的时候就直接使用http.get 
import service from "@/utils/request"
import type {AxiosRequestConfig} from 'axios'
export const http = {
  get<T=any>(url: string, config?: AxiosRequestConfig) : Promise<T> {
    return service.get(url, config)
  },

  post<T=any>(url: string, data?: object, config?: AxiosRequestConfig) :Promise<T> {
    return service.post(url, data, config)
  },

  put<T=any>(url: string, data?: object, config?: AxiosRequestConfig) :Promise<T> {
    return service.put(url, data, config)
  },

  delete<T=any>(url: string, config?: AxiosRequestConfig) : Promise<T> {
    return service.delete(url, config)
  }
}