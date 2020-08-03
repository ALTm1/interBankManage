<template>
    <div>
        <!-- 面包屑 -->
    <div class="operate-header">
      <ui-breadcrumb separator-class="ui-icon-arrow-right">
        <ui-breadcrumb-item :to="{ path: '/' }">您的位置:系统管理</ui-breadcrumb-item>
        <ui-breadcrumb-item>操作员管理</ui-breadcrumb-item>
        <ui-breadcrumb-item>修改结果页</ui-breadcrumb-item>
      </ui-breadcrumb>
    </div>
        <div class="table-title">
      <li class="title-left">操作员修改结果页</li>
      <li class="title-right"></li>
    </div>
        <div>
            <div class="result-header">
                <img src="" alt="">
                <li>交易已提交</li>
                <li>交易流水号：{{batch}}</li>
            </div>
            <div>
                <div>
                    <ul class="result-left">
                        <li>操作员ID</li>
                        <li>{{id}}</li>
                    </ul>
                    <ul class="result-right">
                        <li>操作员姓名</li>
                        <li>{{name}}</li>
                    </ul>
                </div>
                <div>
                     <ul class="result-left">
                        <li>证件号</li>
                        <li>{{znumber}}</li>
                    </ul>
                    <ul class="result-right">
                        <li>工号</li>
                        <li>{{number}}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="result-btn">
            <button>继续</button>
            <button>返回</button>
        </div>
    </div>
</template>
<script>
export default {
    name:'modifyresult',
    data(){
        return{
            batch:'124122331434',
            id:'111000',
            name:'张三',
            znumber:'江南农商银行总行',
            number:'111000'
        }
    }
}
</script>
<style scoped>
button{
    border: none;
    outline: none;
}
.result-header{
    text-align: center;
}
.result-left{
    float: left;
}
.result-right{
    float: right;
}
.result-left li:nth-child(2),.result-right li:nth-child(2){
    width:330px;
height:33px;
border:2px solid rgba(231,232,239,1);
border-radius:3px 3px 3px 3px;font-size:12px;
font-family:SourceHanSansCN;
font-weight:bold;
color:rgba(51,51,51,1);
}
.result-btn button:nth-child(1){
    width:129px;
height:39px;
line-height: 39px;
background:rgba(155,112,65,1);
border-radius:3px 3px 3px 3px;
font-size:14px;
font-weight:400;
color:rgba(255,255,255,1);
}
.result-btn button:nth-child(2){
width:129px;
height:39px;
background:rgba(152,36,61,1);
border-radius:3px 3px 3px 3px;
font-size:14px;
font-weight:400;
color:rgba(255,255,255,1);
}
</style>