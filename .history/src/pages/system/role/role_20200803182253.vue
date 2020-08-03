<template>
  <div class="role-wrap">
   
    <div>
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: "role"
};
</script>
<style>
.role-query li {
  font-size: 14px;
  font-family: SourceHanSansCN;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  height: 30px;
  line-height: 30px;
  background: rgba(245, 246, 248, 1);
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.1);
  border-radius: 4px 4px 0px 0px;
  padding-left: 11px;
}
.ui-breadcrumb__inner a, .ui-breadcrumb__inner.is-link{
  font-size:12px;
font-weight:400;
color:rgba(153,153,153,1);
}
.ui-breadcrumb__item:last-child .ui-breadcrumb__inner, .ui-breadcrumb__item:last-child .ui-breadcrumb__inner a, .ui-breadcrumb__item:last-child .ui-breadcrumb__inner a:hover, .ui-breadcrumb__item:last-child .ui-breadcrumb__inner:hover{
  color: #9B7041;
  font-size:12px;
font-weight:400;
}
.role-wrap{
    width: 100%;
    background: #EFF0F4;
}
.role-title{
    height: 52px;
    line-height: 52px;
}
.ui-breadcrumb{
    line-height: 52px;
}
</style>