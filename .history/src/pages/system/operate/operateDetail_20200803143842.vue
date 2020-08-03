<template>
    <div>
        <!-- 面包屑 -->
    <div class="operate-header">
      <ui-breadcrumb separator-class="ui-icon-arrow-right">
        <ui-breadcrumb-item :to="{ path: '/' }">您的位置:系统管理</ui-breadcrumb-item>
        <ui-breadcrumb-item>操作员管理</ui-breadcrumb-item>
        <ui-breadcrumb-item>操作员详情</ui-breadcrumb-item>
      </ui-breadcrumb>
    </div>
    </div>
</template>
<script>
export default {
    name:'operatedetail'
}
</script>
<style>
.ui-breadcrumb__inner a, .ui-breadcrumb__inner.is-link{
    font-size:12px;
font-family:SourceHanSansCN;
font-weight:400;
color:rgba(153,153,153,1);
}
</style>