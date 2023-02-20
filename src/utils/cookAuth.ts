import Cookies from 'js-cookie'

const TokenKey = 'loginToken'



export const getToken = () => {
  return Cookies.get(TokenKey)
}

export const setToken = ( loginToken : string) =>{
  return Cookies.set(TokenKey,loginToken)
}

export const removeToken = () =>{
  return Cookies.remove(TokenKey)
}
