<template>
  <div class="layou-main">
    <el-container class="heightAll">
      <!--左边到行栏的相关菜单-->
      <el-aside :width="isCollapseWidt ? '66px' : '200px'" class="layout-aside heightAll">
        <aside-menu />
      </el-aside>
      <!--右边的主体部分-->
      <el-container>
        <!--右边的顶部-->
        <el-header>
          <header-menu />
        </el-header>
        <!--右边的主题部分-->
        <el-main><router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts" name="layoutView">
import { ElContainer, ElAside, ElMain, ElHeader } from 'element-plus';
import { computed } from 'vue';
import AsideMenu from './components/AsideBar/AsideMenu.vue';
import headerMenu from './components/headerBar/headerMenu.vue';
import { useStore } from 'vuex'
//声明一个vuex的实例
const sotre = useStore()

//该计算属性是用来表示收缩时侧边栏展示的宽度 
const isCollapseWidt = computed(() => {
  return sotre.getters.getIsCollapse
})
</script>
<style scoped>
.layou-main {
  position: fixed;
  width: 100%;
  height: 100%;
}

.layout-aside {}

/*用来修改一些elementplus自带的相关样式*/
.el-header {
  padding: 0px;
}

.el-aside {
  overflow: auto;
  box-sizing: border-box;
  flex-shrink: 0;
  width: var(--el-aside-width, 300px);
}
</style>