<template>
    <div class="operate-wrap">
       <!-- 操作员管理 -->
     <div class="operate-content">
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
button{
    border: none;
}
.table-title{
    width: 100%;
    height:30px;
    line-height: 30px;
    font-size:14px;
font-weight:400;
color:rgba(51,51,51,1);
background:rgba(245,246,248,1);
box-shadow:0px 1px 1px 0px rgba(0, 0, 0, 0.1);
border-radius:4px 4px 0px 0px;
}
.title-left{
    float: left;
    padding-left: 9px;
}
.title-right{
    float: right;
}
.table-wrap{
    padding: 61px 0 34px 0;
    text-align: center;
}
.table-wrap li{
    font-size:14px;
font-weight:bold;
color:rgba(51,51,51,1);
}
.table-wrap input{
    width:380px;
height:33px;
background:rgba(255,255,255,1);
border:2px solid rgba(231,232,239,1);
border-radius:3px 3px 3px 3px;
font-size:12px;
font-weight:bold;
color:rgba(153,153,153,1);
}
.table-btn button:nth-child(1){
    width:129px;
height:39px;
line-height: 39px;
background:rgba(206,40,72,1);
border-radius:3px 3px 3px 3px;
font-size:14px;
font-weight:400;
color:rgba(255,255,255,1);
}
.table-btn button:nth-child(2){
width:129px;
height:39px;
line-height: 39px;
font-size:14px;
font-weight:400;
color:rgba(255,255,255,1);
background:rgba(155,112,65,1);
border-radius:3px;
}
.table-wrap ul{
    display: -webkit-box;
}
.operate-content{
    background-color: #fff;
     width: 95%;
    margin: 0 auto;
}
</style>