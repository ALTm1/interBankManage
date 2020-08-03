<template>
    <div>
        <!-- <div>操作员管理</div> -->
        <!-- 面包屑 -->
     <div class="operate-header">
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
<style>
.ui-breadcrumb__inner{
    font-size:12px;
font-family:SourceHanSansCN;
font-weight:400;
color:#9B7041;
}
</style>
<style scoped>

.operate-header{
   
    font-size: 12px;
    padding: 19px 0 21px 11px;
}
</style>