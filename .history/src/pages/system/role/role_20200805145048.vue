<template>
  <div class="role-wrap">
      <!-- 面包屑 -->
    <div class="operate-header">
      <ui-breadcrumb separator-class="ui-icon-arrow-right">
        <ui-breadcrumb-item :to="{ path: 'operatemanage' }">您的位置: 系统管理</ui-breadcrumb-item>
        <ui-breadcrumb-item>角色管理</ui-breadcrumb-item>
        <ui-breadcrumb-item v-show="name!='角色管理'">{{name}}</ui-breadcrumb-item>
      </ui-breadcrumb>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: "role",
  data(){
    return{
      name:''
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        console.log(route);
         console.log(route.meta.title);
         this.name=route.meta.title
      },
      immediate: true
    }
  },
};
</script>
<style>
.ui-breadcrumb__inner a, .ui-breadcrumb__inner.is-link{
  font-size:12px;
font-weight:400;
color:rgba(153,153,153,1);
}
.ui-breadcrumb__item:last-child .ui-breadcrumb__inner, .ui-breadcrumb__item:last-child .ui-breadcrumb__inner a, .ui-breadcrumb__item:last-child .ui-breadcrumb__inner a:hover, .ui-breadcrumb__item:last-child .ui-breadcrumb__inner:hover{
  color: #9B7041;
  font-size:12px;
font-weight:400;
}
.role-wrap{
    width: 97%;
    background: #EFF0F4;
}
.role-title{
    height: 52px;
    line-height: 52px;
}
.table-title {
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  background: rgba(245, 246, 248, 1);
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.1);
  border-radius: 4px 4px 0px 0px;
}
</style>