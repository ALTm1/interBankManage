<template>
  <div>
    <!-- 面包屑 -->
    <div>
      <ui-breadcrumb separator-class="ui-icon-arrow-right">
        <ui-breadcrumb-item :to="{ path: '/' }">您的位置: 报表管理</ui-breadcrumb-item>
        <ui-breadcrumb-item>个人票据统计</ui-breadcrumb-item>
      </ui-breadcrumb>
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