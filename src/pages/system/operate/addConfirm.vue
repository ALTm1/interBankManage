<template>
    <div>
    <div class="detail-content">
        <div class="table-title">
          <li class="title-left">操作员新增确认页</li>
          <li class="title-right"></li>
        </div>
        <div class="content-wrap">
            <div>
                <ul class="content-left">
                    <li>操作员ID</li>
                    <li>{{id}}</li>
                </ul>
                <ul class="content-right">
                    <li>操作员姓名</li>
                    <li>{{name}}</li>
                </ul>
            </div>
            <div>
                <ul class="content-left">
                    <li>证件号</li>
                    <li>{{znumber}}</li>
                </ul>
                <ul class="content-right">
                    <li>工号</li>
                    <li>{{number}}</li>
                </ul>
            </div>
            <div>
                <ul class="content-left">
                    <li>联系电话</li>
                    <li>{{phone}}</li>
                </ul>
                <ul class="content-right">
                    <li>邮箱</li>
                    <li>{{email}}</li>
                </ul>
            </div>
            <div>
                <ul class="content-left">
                    <li>所属机构</li>
                    <li>{{orgnization}}</li>
                </ul>
                <ul class="content-right">
                    <li>所属部门</li>
                    <li>{{department}}</li>
                </ul>
            </div>
            <div>
                <ul class="content-left">
                    <li>状态</li>
                    <li>{{state}}</li>
                </ul>
                <ul class="content-right">
                    <li>操作员角色</li>
                    <li>{{role}}</li>
                </ul>
            </div>
            <div>
                <ul class="content-left">
                    <li>创建时间</li>
                    <li>{{estime}}</li>
                </ul>
                <ul class="content-right">
                    <li>上次登录时间</li>
                    <li>{{time}}</li>
                </ul>
            </div>
            <div class="confirm-btn">
                <button @click="confirm">确认</button>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name:'addconfirm',
    data(){
        return{
            time:"2020-09-09  19:00",
            estime:"2020-09-09  19:00",
            role:"交易员",
            state:'正常',
            department:'金融同业部',
            orgnization:'江南农商银行总行',
            email:'128739812@jdf.cn',
            phone:'18888888888',
            number:'11100',
            znumber:'12345678909876543',
            name:'张三',
            id:'11100'
        }
    },
    methods:{
        confirm(){
            this.$router.push('addresult')
        }
        
    }
}
</script>
<style scoped>
.detail-content{
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
.confirm-btn{
    width: 100%;
    margin-top: 81px;
    text-align: center;
}
.confirm-btn button{
    border: none;
    outline: none;
    cursor: pointer;
    width:129px;
height:39px;
line-height: 39px;
background:rgba(152,36,61,1);
border-radius:3px;
font-size:14px;
font-family:SourceHanSansCN;
font-weight:400;
color:rgba(255,255,255,1);
}
</style>