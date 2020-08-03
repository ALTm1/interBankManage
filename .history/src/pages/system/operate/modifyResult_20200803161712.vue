<template>
    <div>
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
                        <li></li>
                    </ul>
                    <ul class="result-right">
                        <li>操作员姓名</li>
                        <li></li>
                    </ul>
                </div>
                <div>
                     <ul class="result-left">
                        <li>证件号</li>
                        <li></li>
                    </ul>
                    <ul class="result-right">
                        <li>工号</li>
                        <li></li>
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