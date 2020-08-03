<template>
    <div class="operate-wrap">
       <!-- 操作员管理 -->
     
     <!-- 查询表格 -->
     <div class="operate-table">
         <div class="table-title">
             <li class="title-left">操作员查询</li>
             <li class="title-right"></li>
         </div>
         <div class="table-wrap">
             <ul>
                 <li>操作员ID</li>
                 <input type="number" name="id" id="" placeholder="请输入操作员ID">
             </ul>
             <ul>
                 <li>操作员姓名</li>
                 <input type="text" name="name" id="" placeholder="请输入操作员姓名">
             </ul>
         </div>
         <div class="table-btn">
             <button>重置</button>
             <button>查询</button>
         </div>
         
     </div>
    </div>
</template>
<script>
export default {
    name:'operatemanage',
    data(){
        return{
            
        }
    }
}
</script>
<style scoped>
.table-title{
    width: 100%;
    height:30px;
    line-height: 30px;
background:rgba(245,246,248,1);
box-shadow:0px 1px 1px 0px rgba(0, 0, 0, 0.1);
border-radius:4px 4px 0px 0px;
}
.title-left{
    float: left;
}
.title-right{
    float: right;
}
.operate-table{
    width: 95%;
    margin: 0 auto;
}
.table-wrap ul{
    display: -webkit-box;
}
</style>