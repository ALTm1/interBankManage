<template>
    <div>
     <div class="operate-header">
      <ui-breadcrumb separator-class="ui-icon-arrow-right">
        <ui-breadcrumb-item :to="{ path: 'operatemanage' }">您的位置: 系统管理</ui-breadcrumb-item>
        <ui-breadcrumb-item>日志查询</ui-breadcrumb-item>
        <ui-breadcrumb-item>{{path}}</ui-breadcrumb-item>
      </ui-breadcrumb>
    </div>
    <div class="detail-content">
        <div class="table-title">
          <li class="title-left">操作日志详情</li>
           <li class="title-right" @click="back">
         <img src="~@/assets/image/back.png" alt=""> 
      </li>
        </div>
        <div class="content-wrap">
            <div>
                <ul class="content-left">
                    <li>流水号</li>
                    <li>{{number}}</li>
                </ul>
                <ul class="content-right">
                    <li>操作员ID</li>
                    <li>{{id}}</li>
                </ul>
            </div>
            <div>
                <ul class="content-left">
                    <li>操作员姓名</li>
                    <li>{{name}}</li>
                </ul>
                <ul class="content-right">
                    <li>所属机构</li>
                    <li>{{orgnization}}</li>
                </ul>
            </div>
            <div>
                <ul class="content-left">
                    <li>所属部门</li>
                    <li>{{department}}</li>
                </ul>
                <ul class="content-right">
                    <li>交易名称</li>
                    <li>{{tname}}</li>
                </ul>
            </div>
            <div>
                <ul class="content-left">
                    <li>交易时间</li>
                    <li>{{transtime}}</li>
                </ul>
                <ul class="content-right">
                    <li>审批时间</li>
                    <li>{{time}}</li>
                </ul>
            </div>
            <div>
                <ul class="content-left">
                    <li>审批结果</li>
                    <li>{{result}}</li>
                </ul>
                <ul class="content-right">
                    <li>交易状态</li>
                    <li>{{state}}</li>
                </ul>
            </div>
        
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name:'operatedetail',
    data(){
        return{
            path:'',
            time:"2020-09-09  19:00",
            transtime:"2020-09-09  19:00",
            role:"交易员",
            result:'通过',
            state:'交易成功',
            department:'金融同业部',
            orgnization:'江南农商银行总行',
            number:'3412353246',
            name:'张三',
            id:'11100',
            tname:'操作员新增'
        }
    },
    watch: {

    $route: {
      handler: function(route) {
        // console.log(route);
        //  console.log(route.meta.title);
         this.path=route.meta.title
      },
      immediate: true
    }
  },
  methods:{
      back(){
            this.$router.go(-1)
        }
  }
}
</script>
<style>
.ui-breadcrumb__inner a, .ui-breadcrumb__inner.is-link,.ui-breadcrumb__inner{
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
.ui-table .number {
  font-size: 14px;
  font-family: SourceHanSansCN;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
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
.detail-content{
    width: 96%;
    /* margin-left: 12px; */
    margin-top: 21px;
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
    padding: 30px 0 254px 0;
}
.content-wrap div{
    display: inline-block;
}
.content-wrap div ul{
     line-height: 33px;
    display: -webkit-box;
}
</style>