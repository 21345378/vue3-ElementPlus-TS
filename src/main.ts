import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'element-plus/dist/index.css'

//引入incofont样式
import './icon/iconfont.css' 
import { Setting,Tickets } from "@element-plus/icons-vue"; //看自己需求取
createApp(App).use(store).use(router).mount("#app");
App.component('Setting',Setting);
App.component('Tickets',Tickets);//如果数据太多可以做个循环去挂载


