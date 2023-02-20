import { http } from "@/utils/http";
import type { loginData } from './types'
//接口返回的相关类型结构 
import type {ResultStype} from '@/utils/request/ResultCode'


//用户登录
export const userLogin = (data: loginData) => {
  return http.post<ResultStype>('/admin/login', data)
} 