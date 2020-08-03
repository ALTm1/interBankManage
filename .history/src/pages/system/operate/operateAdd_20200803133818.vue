<template>
    <div>   
         <!-- 面包屑 -->
     <div class="operate-header">
          <ui-breadcrumb separator-class="ui-icon-arrow-right">
        <ui-breadcrumb-item :to="{ path: '/' }">您的位置:系统管理</ui-breadcrumb-item>
        <ui-breadcrumb-item>操作员管理</ui-breadcrumb-item>
        <ui-breadcrumb-item>新增录入页</ui-breadcrumb-item>
      </ui-breadcrumb>
     </div>
        <div class="table-title">
          <li class="title-left">操作员新增录入页</li>
          <li class="title-right"></li>
        </div>
        <div class="content-wrap">
            <div>
                <ul class="content-left">
                    <li>操作员ID</li>
                    <input type="text" name="" id="">
                </ul>
                <ul class="content-right">
                    <li>操作员姓名</li>
                    <input type="text" name="" id="">
                </ul>
            </div>
            <div>
                <ul class="content-left">
                    <li>证件号</li>
                    <input type="text" name="" id="">
                </ul>
                <ul class="content-right">
                    <li>工号</li>
                    <input type="text" name="" id="">
                </ul>
            </div>
            <div>
                <ul class="content-left">
                    <li>联系电话</li>
                    <input type="text" name="" id="">
                </ul>
                <ul class="content-right">
                    <li>邮箱</li>
                    <input type="text" name="" id="">
                </ul>
            </div>
            <div>
                <ul class="content-left">
                    <li>所属机构</li>
                    <input type="text" name="" id="">
                </ul>
                <ul class="content-right">
                    <li>所属部门</li>
                    <input type="text" name="" id="">
                </ul>
            </div>
            <div>
                <ul class="content-right">
                    <li>操作角色</li>
                    <input type="text" name="" id="">
                </ul>
               
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'operateAdd'
}
</script>
<style>
.ui-breadcrumb__inner{
    font-size:12px;
font-family:SourceHanSansCN;
font-weight:400;
color:rgba(153,153,153,1);
}
</style>
<style scoped>
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
.title-left {
  float: left;
  padding-left: 9px;
}
.title-right {
  float: right;
}
.content-left{
    float: left;
}
.content-right{
    float: right;
}
.content-wrap{
    margin: ;
}
</style>