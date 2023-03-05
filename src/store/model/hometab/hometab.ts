import { tabType } from './tabType'
//用于管理首页头部的相关信息
const hometab = {
  namespace:true,
  state:{
    isCollapse: false
  },
  mutations: {
    changeIsCollapse( state:tabType) {
      console.log(state.isCollapse);
      
      state.isCollapse = !state.isCollapse
    }
  },
  getters: {
    getIsCollapse(state:tabType) {
      return state.isCollapse
    }
  }
}
export default hometab