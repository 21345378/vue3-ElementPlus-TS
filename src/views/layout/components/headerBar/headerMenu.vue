<template>
  <div class="header-menu">
    <el-icon :size="32" class="header-menu-closeBtn" @click="handleOpenMenu()">
      <Plus />
    </el-icon>
    <el-breadcrumb separator="/" class="header-menu-list">
      <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
      <el-breadcrumb-item>promotion list</el-breadcrumb-item>
      <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup nmae="headerMenu" lang="ts">
import { ElButton, ElBreadcrumb, ElBreadcrumbItem,ElIcon } from 'element-plus';
import { Plus } from '@element-plus/icons-vue'
import { useStore } from 'vuex';
//申明Store以便于vuex来通信
const store = useStore() 

//用于打开侧边的菜单
const handleOpenMenu = () => {
  store.commit('changeIsCollapse')
} 
</script>




<style lang="less" scoped>
.header-menu {
  display: flex;
  align-items: center;
  height: 48px;
  border-right: none;
  border-bottom: 1px solid #e6e6e6;
}
.header-menu-closeBtn{
  padding: 10px;
}
</style>