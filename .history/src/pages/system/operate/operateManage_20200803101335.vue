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
     <div class="operate-table">
         <div class="table-title">
             <li class="title-left">操作员查询</li>
             <li class="title-right"></li>
         </div>
         <div>
             <ul>
                 <li>操作员ID</li>
                 <input type="number" name="id" id="" placeholder="请输入操作员ID">
             </ul>
             <ul>
                 <li>操作员姓名</li>
                 <input type="text" name="name" id="" laceholder="请输入操作员姓名">
             </ul>
         </div>
         <div>
             <button></button>
             <button></button>
         </div>
         
     </div>
    </div>
</template>
<script>
export default {
    name:'operatemanage'
}
</script>
<style scoped>
.title-left{
    float: left;
}
.title-right{
    float: right;
}
.operate-table{
    width: 90%;
    margin: 0 auto;
}
</style>