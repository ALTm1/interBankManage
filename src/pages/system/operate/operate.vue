<template>
    <div>
        <!-- <div>操作员管理</div> -->
        <!-- 面包屑 -->
     <div>
          <ui-breadcrumb separator-class="ui-icon-arrow-right">
        <ui-breadcrumb-item :to="{ path: '/' }">您的位置: 系统管理</ui-breadcrumb-item>
        <ui-breadcrumb-item>操作员管理</ui-breadcrumb-item>
      </ui-breadcrumb>
     </div>
        <div>
            <router-view/>
        </div>
    </div>
</template>
<script>
export default {
    name:''
}
</script>
<style scoped>

</style>