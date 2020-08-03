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