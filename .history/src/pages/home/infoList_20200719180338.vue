<template>
    <div>
        <div class="infolist-wrap">
            <div v-for="(info,index) in infoList" :key="index">
                <li>{{info.name}}</li>
                <li>{{info.rate}}</li>
                <li>预期收益</li>
                <li></li>
                <li>{{info.content}}</li>
                <button>查看详情</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'',
    data(){
        return{
            infoList:[
                {
                    name:"产品名称产品名称",
                    rate:"3.45%",
                    content:"文案内容文案内容文案内容文案内容文案内容"
                },
                {
                    name:"产品名称产品名称",
                    rate:"3.45%",
                    content:"文案内容文案内容文案内容文案内容文案内容"
                },
                {
                    name:"产品名称产品名称",
                    rate:"3.45%",
                    content:"文案内容文案内容文案内容文案内容文案内容"
                },
                {
                    name:"产品名称产品名称",
                    rate:"3.45%",
                    content:"文案内容文案内容文案内容文案内容文案内容"
                },
            ]
        }
    }
}
</script>
<style scoped>
.infolist-wrap{
    display: -webkit-box;
    padding: 60px 0 80px 0;
}
.infolist-wrap div{
    width:270px;
height:390px;
background:rgba(255,255,255,1);
box-shadow:0px 0px 60px 0px rgba(8,20,35,0.2);
border-radius:10px;
}
.infolist-wrap div li:nth-child(1){}
.infolist-wrap div:nth-child(2n+1){
    border-top: 4px solid #CE2848;
}
.infolist-wrap div:nth-child(2n){
    border-top: 4px solid #BE9D62;
}
.infolist-wrap div button{
    border: none;
    width:180px;
height:40px;
color: #fff;
border-radius:20px;
}
.infolist-wrap div:nth-child(2n+1) button{
    background: #CE2848;
}
.infolist-wrap div:nth-child(2n) button{
    background: #BE9D62;
}
</style>