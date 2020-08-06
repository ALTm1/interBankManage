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
        // console.log(route);
        //  console.log(route.meta.title);
         this.name=route.meta.title
      },
      immediate: true
    }
  },
};
</script>
<style>
.ui-tree-node__content:first-of-type{
  /* height: 61px;
  line-height: 61px; */
}
.ui-checkbox__inner{
  width:20px;
height:20px;
background:rgba(255,255,255,1);
border:2px solid rgba(254,145,102,1);
border-radius:50%;
}
.title-left{
    display: inline-block;
}
.title-right{
    float: right;
      cursor: pointer;
}
.title-right img{
  width: 14px;
  margin-right: 12px;
}
.ui-table__header-wrapper th{
  background-color: #fff;
  height: 50px;
  line-height: 50px;
  height:12px;
font-size:12px;
font-family:SourceHanSansCN;
font-weight:bold;
color:rgba(189,194,202,1);
}
.ui-breadcrumb__inner a, .ui-breadcrumb__inner.is-link,.ui-breadcrumb__inner{
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