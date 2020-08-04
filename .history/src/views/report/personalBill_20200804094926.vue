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
        <li class="title-left">个人票据统计</li>
        <li class="title-right"></li>
      </div>
      <!-- 表格 -->
      <div>

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
.table-title {
  display: inline-block;
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
.title-left {
  float: left;
  margin-left: 11px;
}
</style>