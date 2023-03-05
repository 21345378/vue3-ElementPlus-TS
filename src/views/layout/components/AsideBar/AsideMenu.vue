<template>
  <div class="aside-menu">
    <el-menu default-active="2" :show-timeout="200" :collapse="isCollapse" :collapse-transition="true" active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo">
      <h3 class="menu-title">{{ isCollapse ? '系统' : '后台管理系统' }}</h3>
      <el-sub-menu v-for="fatherItem in routerList" :key="fatherItem.path" :index="'1'">
        <template #title>
          <el-icon>
            <Plus />
          </el-icon>
          <span>{{ fatherItem.meta ? fatherItem.meta.name : '' }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-for="(childrenItem) in fatherItem.children" :key="childrenItem.path" :index="'1'"> 
            {{ childrenItem.meta ? childrenItem.meta.name : '' }}
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </div>
</template>


<script setup lang="ts" name="AsideMenu">
import { ElMenu, ElSubMenu, ElIcon, ElMenuItemGroup, ElMenuItem } from 'element-plus';
import { Plus } from '@element-plus/icons-vue';
import { useStore } from 'vuex';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

//创建一个vuex的实例
const store = useStore()
//创建一个route的实例
const router = useRouter()



const isCollapse = computed(() => {
  return store.getters.getIsCollapse
})
//获取对应的子路由中的相关元素 
const routerList = computed(() => {
  let list = router.options.routes.map((item) => {
    return item.path
  })
  let index = 0
  for (let i = 0; i < list.length; i++) {
    if (list[i] === '/layout') {
      index = i;
      break;
    }
  }
  console.log(router.options.routes[index].children);
  
  return router.options.routes[index].children
})


</script>


<style lang="less" scoped>
.aside-menu {
  height: 100%;
  background: #545c64;
  border: 0;
}

.menu-title {
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 18px;
}

//下面是修改elementplus自带的样式 
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
}

.el-menu {
  border: 0px;
}
</style>