//返回的数据的相关格式（由于data是不一样的，因此使用泛型的格式来进行传入参数）
export interface ResultStype<T=any> {
  code:number,
  message:string,
  data:T
} 
