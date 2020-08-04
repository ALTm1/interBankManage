<template>
    <div>
       <!-- 面包屑 -->
    <div class="operate-header">
      <ui-breadcrumb separator-class="ui-icon-arrow-right">
        <ui-breadcrumb-item :to="{ path: '/' }">您的位置:系统管理</ui-breadcrumb-item>
        <ui-breadcrumb-item>{{}}</ui-breadcrumb-item>
        <!-- <ui-breadcrumb-item>新增结果页</ui-breadcrumb-item> -->
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
.table-title {
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
.ui-breadcrumb__inner{
    font-size:12px;
font-family:SourceHanSansCN;
font-weight:400;
color:rgba(153,153,153,1);
}
.ui-breadcrumb__inner a, .ui-breadcrumb__inner.is-link{
    font-size:12px;
font-family:SourceHanSansCN;
font-weight:400;
color:rgba(153,153,153,1);
}
.ui-breadcrumb__item:last-child .ui-breadcrumb__inner, .ui-breadcrumb__item:last-child .ui-breadcrumb__inner a, .ui-breadcrumb__item:last-child .ui-breadcrumb__inner a:hover, .ui-breadcrumb__item:last-child .ui-breadcrumb__inner:hover{
    font-size:12px;
font-family:SourceHanSansCN;
font-weight:400;
color:#9B7041;
}
.operate-header{  
    font-size: 12px;
    /* padding-left: 11px; */
   
}
</style>
