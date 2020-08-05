<template>
  <div>
    <!-- 面包屑 -->
    <div>
      <ui-breadcrumb separator-class="ui-icon-arrow-right">
        <ui-breadcrumb-item :to="{ path: '/paramManagement' }">您的位置: 参数管理</ui-breadcrumb-item>
        <ui-breadcrumb-item>参数管理</ui-breadcrumb-item>
        <ui-breadcrumb-item v-show="name!='参数管理'">{{name}}</ui-breadcrumb-item>
      </ui-breadcrumb>
    </div>
    <!-- 标题 -->
    <block-title :blockTitle="name"></block-title>
    <!-- 主题部分 -->
    <div>
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data() {
    return {
      name: '',
    }
  },
  watch: {
    $route: {
      handler: function (route) {
        console.log(route)
        console.log(route.meta.title)
        this.name = route.meta.title
      },
      immediate: true,
    },
  },
}
</script>
<style>
</style>
