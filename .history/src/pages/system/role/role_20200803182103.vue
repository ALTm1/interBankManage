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
.ui-breadcrumb__inner a, .ui-breadcrumb__inner.is-link{
  font-size:12px;
font-family:SourceHanSansCN;
font-weight:400;
color:rgba(153,153,153,1);
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