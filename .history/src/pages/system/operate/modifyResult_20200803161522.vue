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
            batch:'124122331434'
        }
    }
}
</script>
<style scoped>
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
    
}
</style>