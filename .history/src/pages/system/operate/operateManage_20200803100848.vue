<template>
    <div class="operate-wrap">
       <!-- 操作员管理 -->
     <!-- 面包屑 -->
     <div>
          <ui-breadcrumb separator-class="ui-icon-arrow-right">
        <ui-breadcrumb-item :to="{ path: '/' }">您的位置: 系统管理</ui-breadcrumb-item>
        <ui-breadcrumb-item>角色查询</ui-breadcrumb-item>
        <!-- <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
      </ui-breadcrumb>
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