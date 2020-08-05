<template>
  <div>
    <!-- 面包屑 -->
    <div>
      <ui-breadcrumb separator-class="ui-icon-arrow-right">
        <ui-breadcrumb-item :to="{ path: '/' }">您的位置: 报表管理</ui-breadcrumb-item>
        <ui-breadcrumb-item>个人票据统计</ui-breadcrumb-item>
      </ui-breadcrumb>
    </div>
    <div>
        <div class="table-title">
      <li class="title-left">操作员新增录入页</li>
      <li class="title-right"></li>
    </div>
    </div>
    
  </div>
</template>
<script>
export default {
  name: "bill"
};
</script>
<style scoped>
</style>