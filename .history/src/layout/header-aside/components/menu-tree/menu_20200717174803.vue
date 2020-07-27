<template>
  <div class="menu-list">
    <ui-menu
    text-color="#333333"
      class="menu-item"
      mode="horizontal"
      @select="handleSelect"
    >
      <ui-menu-item index="1">首页</ui-menu-item>
      <ui-submenu index="2">
        <template slot="title">行业动态</template>
        <ui-menu-item index="2-1">资讯</ui-menu-item>
        <ui-menu-item index="2-2">会议</ui-menu-item>
        <ui-menu-item index="2-3">培训</ui-menu-item>
        <ui-menu-item index="2-4">机构动态</ui-menu-item>
      </ui-submenu>
      <ui-menu-item index="3">金融市场</ui-menu-item>
      <ui-submenu index="4">
        <template slot="title">会员中心</template>
        <ui-submenu index="4-1">
          <template slot="title">我的资产</template>
          <ui-menu-item index="4-1-1">已发布资产</ui-menu-item>
          <ui-menu-item index="4-1-2">已关注资产</ui-menu-item>
          <ui-menu-item index="4-1-3">订阅资产查询</ui-menu-item>
          <ui-menu-item index="4-1-4">订阅偏好设置</ui-menu-item>
        </ui-submenu>
        <ui-menu-item index="4-2">我的意向</ui-menu-item>
        <ui-menu-item index="4-3">待确认意向</ui-menu-item>
        <ui-menu-item index="4-4">机构动态</ui-menu-item>
        <ui-menu-item index="4-4">授信管理</ui-menu-item>
        <ui-menu-item index="4-4">好友管理</ui-menu-item>
         <ui-menu-item index="4-4">对账查询</ui-menu-item>
          <ui-menu-item index="4-4">机构认证</ui-menu-item>
      </ui-submenu>
      <ui-menu-item index="5">基金通</ui-menu-item>
       <ui-submenu index="6">
        <template slot="title">联盟通</template>
        <ui-menu-item index="6-1">产品中心</ui-menu-item>
        <ui-menu-item index="6-2">会员中心</ui-menu-item>
      </ui-submenu>
       <ui-submenu index="7">
        <template slot="title">个人设置</template>
        <ui-menu-item index="7-1">个人信息修改</ui-menu-item>
        <ui-menu-item index="7-2">登录密码修改</ui-menu-item>
        <ui-menu-item index="7-2">注销</ui-menu-item>
      </ui-submenu>
       <ui-submenu index="8">
        <template slot="title">员工中心</template>
        <ui-menu-item index="8-1">团购产品管理</ui-menu-item>
        <ui-menu-item index="8-2">参团意向列表</ui-menu-item>
        <ui-menu-item index="8-3">对账文件下载</ui-menu-item>
         <ui-menu-item index="8-4">审批菜单</ui-menu-item>
      </ui-submenu>
      <ui-menu-item index="9">关于平台</ui-menu-item>
       <ui-menu-item index="10">消息中心</ui-menu-item>
      
    </ui-menu>
    <div class="line"></div>
  
  </div>
</template>
<script>
// import { tree } from '@csii/vx-mobile'
export default {
  name: "menuTree",
  components: {},
  data() {
    return {
      
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
.menu-list {
  /* width: 100%; */
  /* height: 500px; */
  font-size:16px;
}
.ui-submenu .ui-submenu__title .ui-menu-item{
     font-size:16px;
font-weight:400;
color:rgba(51,51,51,1);
}
.menu-item{
    height: 50px;
   line-height: 50px;
}
</style>