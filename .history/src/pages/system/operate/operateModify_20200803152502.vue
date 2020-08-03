<template>
    <div>
         <!-- 面包屑 -->
     <div class="operate-header">
          <ui-breadcrumb separator-class="ui-icon-arrow-right">
        <ui-breadcrumb-item :to="{ path: '/' }">您的位置: 系统管理</ui-breadcrumb-item>
        <ui-breadcrumb-item>修改录入页</ui-breadcrumb-item>
      </ui-breadcrumb>
     </div>
     
    </div>
</template>
<script>
export default {
    name:'operatemodify'
}
</script>
<style scoped>

</style>