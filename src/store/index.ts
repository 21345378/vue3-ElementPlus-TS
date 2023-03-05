import { createStore } from "vuex";
import hometab from './model/hometab/hometab'
//这里使用的module来进行模块管理，实际上就是将模块中的各个state等分别放置在其他的state中 
export default createStore({
  modules: {
    hometab,
  },
});
