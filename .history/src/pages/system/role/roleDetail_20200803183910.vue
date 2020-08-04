<template>
    <div>
        <!-- 面包屑 -->
     <div class="role-title">
      <!-- 面包屑 -->
      <ui-breadcrumb separator-class="ui-icon-arrow-right">
        <ui-breadcrumb-item :to="{ path: '/' }">您的位置: 系统管理</ui-breadcrumb-item>
        <ui-breadcrumb-item>角色查询</ui-breadcrumb-item>
  
      </ui-breadcrumb>
    </div>
    <div class="detail-content">
        <div class="table-title">
          <li class="title-left">操作员查询</li>
          <li class="title-right"></li>
        </div>
        
        <div class="content-wrap">
            <div>
                <ul class="content-left">
                    <li>角色ID</li>
                    <li>{{id}}</li>
                </ul>
                <ul class="content-right">
                    <li>角色名称</li>
                    <li>{{name}}</li>
                </ul>
            </div>
            <div>
                <ul class="content-left">
                    <li>角色状态</li>
                    <li>{{state}}</li>
                </ul>
                <ul class="content-right">
                    <li>修改时间</li>
                    <li>{{time}}</li>
                </ul>
            </div>
            <div>
                <ul class="content-left">
                    <li>备注</li>
                    <li>{{ps}}</li>
                </ul>
            </div>
           <div>
               
           </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name:'roledetail',
    data(){
        return{
            time:"2020-09-09  19:00",
            state:'有效',
            ps:'备注',
            name:'张三',
            id:'11100'
        }
    }
}
</script>
<style scoped>
.detail-content{
    margin-left: 12px;
}
.title-left{
    margin-left: 11px;
}
.content-left{
    float: left;
}
.content-right{
    float: right;
}
.content-left li:nth-child(2),.content-right li:nth-child(2){
    width:300px;
height:33px;
line-height: 33px;
background:rgba(255,255,255,1);
border:2px solid rgba(231,232,239,1);
border-radius:3px;
 text-align: center;
 margin-left: 42px;
}
.content-left li:nth-child(1),.content-right li:nth-child(1){
    text-align: right;
    width: 150px;
}
.content-wrap{
    width: 100%;
    background-color: #fff;
    padding: 30px 0 0 0;
}
.content-wrap div{
    display: inline-block;
}
.content-wrap div ul{
     line-height: 33px;
    display: -webkit-box;
}
.table-title {
    display: inline-block;
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
.title-left{
    float: left;
}
.title-right{
    float: right;
}
</style>