<template>
  <div class="menu-list">
      <ui-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <ui-menu-item index="1">处理中心</ui-menu-item>
  <ui-submenu index="2">
    <template slot="title">我的工作台</template>
    <ui-menu-item index="2-1">选项1</ui-menu-item>
    <ui-menu-item index="2-2">选项2</ui-menu-item>
    <ui-menu-item index="2-3">选项3</ui-menu-item>
    <ui-submenu index="2-4">
      <template slot="title">选项4</template>
      <ui-menu-item index="2-4-1">选项1</ui-menu-item>
      <ui-menu-item index="2-4-2">选项2</ui-menu-item>
     
    </ui-submenu>
  </ui-submenu>
  <ui-menu-item index="3">消息中心</ui-menu-item>
  <ui-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></ui-menu-item>
</ui-menu>
<div class="line"></div>
<ui-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <ui-menu-item index="1">处理中心</ui-menu-item>
  <ui-submenu index="2">
    <template slot="title">我的工作台</template>
    <ui-menu-item index="2-1">选项1</ui-menu-item>
    <ui-menu-item index="2-2">选项2</ui-menu-item>
    <ui-menu-item index="2-3">选项3</ui-menu-item>
    <ui-submenu index="2-4">
      <template slot="title">选项4</template>
      <ui-menu-item index="2-4-1">选项1</ui-menu-item>
      <ui-menu-item index="2-4-2">选项2</ui-menu-item>
      <ui-menu-item index="2-4-3">选项3</ui-menu-item>
    </ui-submenu>
  </ui-submenu>
  <ui-menu-item index="3">消息中心</ui-menu-item>
  <ui-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></ui-menu-item>
</ui-menu>
  </div>
</template>
<script>
// import { tree } from '@csii/vx-mobile'
export default {
  name: "menuTree",
  components:{
      
  },
  data() {
    return {
       activeIndex: '1',
        activeIndex2: '1'
    };
  },
   methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
};
</script>
<style scoped>
.menu-list{
    width: 100%;
    height: 500px;
}
</style>