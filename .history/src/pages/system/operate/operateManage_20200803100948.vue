<template>
    <div class="operate-wrap">
       <!-- 操作员管理 -->
     <!-- 面包屑 -->
     <div>
          <ui-breadcrumb separator-class="ui-icon-arrow-right">
        <ui-breadcrumb-item :to="{ path: '/' }">您的位置: 系统管理</ui-breadcrumb-item>
        <ui-breadcrumb-item>操作员管理</ui-breadcrumb-item>
      </ui-breadcrumb>
     </div>
     <!-- 查询表格 -->
     <div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
     </div>
    </div>
</template>
<script>
export default {
    name:'operatemanage'
}
</script>
<style scoped>

</style>