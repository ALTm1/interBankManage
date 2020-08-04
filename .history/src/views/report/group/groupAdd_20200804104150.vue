<template>
  <div class="add-wrap">
    <!-- 面包屑 -->
    <div class="operate-header">
      <ui-breadcrumb separator-class="ui-icon-arrow-right">
        <ui-breadcrumb-item :to="{ path: '/' }">您的位置:报表管理</ui-breadcrumb-item>
        <ui-breadcrumb-item>新增分组录入</ui-breadcrumb-item>
      </ui-breadcrumb>
    </div>
    <div class="table-title">
      <li class="title-left">新增分组录入</li>
      <li class="title-right"></li>
    </div>
    <div class="content-wrap">
      <div>
        <ul>
          <li>组长</li>
          <input type="text" name id placeholder="请输入组长名称" />
        </ul>
        <ul>
          <li>组员1</li>
          <input type="text" name id placeholder="请输入组员名称" />
        </ul>
        <ul>
          <li>组员2</li>
          <input type="text" name id placeholder="请输入组员名称" />
        </ul>
        <ul>
          <li>组员3</li>
          <input type="text" name id placeholder="请输入组员名称" />
        </ul>
         <ul>
          <li>组员4</li>
          <input type="text" name id placeholder="请输入组员名称" />
        </ul>
         <ul>
          <li>组员5</li>
          <input type="text" name id placeholder="请输入组员名称" />
        </ul>
      </div>
    
    
   
      
      <!-- 按钮 -->
      <div class="add-btn">
          <button @click="add">确认</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "operateAdd",
  data() {
    return {
     
     
    };
  },
  methods:{
      add(){
          this.$router.push('addconfirm')
      }
  }
};
</script>
<style>
.ui-input__prefix,
.ui-input__suffix {
  top: 37px;
}
.ui-input__inner {
  float: right;
  width: 300px;
  height: 33px;
  border: none;
}

input {
  outline: none;
}
.ui-breadcrumb__inner {
  font-size: 12px;
  font-family: SourceHanSansCN;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
}
</style>
<style scoped>
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
.title-left {
  float: left;
  margin-left: 11px;
}
.title-left {
  float: left;
  padding-left: 9px;
}
.title-right {
  float: right;
}
.content-wrap {
  padding: 40px 81px 81px 90px;
  background-color: #fff;
box-shadow:0px 1px 1px 0px rgba(0, 0, 0, 0.1);
border-radius:4px 4px 0px 0px;
}
.content-wrap div {
  width: 100%;
  display: inline-block;
}
.content-wrap ul{
    display: -webkit-box;
    border: 1px solid #999;
}
.content-wrap ul li{
    width: 80px;
    line-height: 33px;
}
.content-wrap div input,
.content-wrap div div{
    text-align: center;
  /* float: right; */
  width: 300px;
  height: 33px;
  border: none;
  /* background: rgba(255, 255, 255, 1);
  border: 2px solid rgba(231, 232, 239, 1); */
}
.add-btn{
    text-align: center;
   padding-bottom: 106px;
   padding-top: 71px;
}
.add-btn button{
    outline: none;
    border: none;
    cursor: pointer;
    width:129px;
height:39px;
font-size:14px;
font-weight:400;
color:rgba(255,255,255,1);
line-height: 39px;
background:rgba(152,36,61,1);
border-radius:3px 3px 3px 3px;
}
</style>