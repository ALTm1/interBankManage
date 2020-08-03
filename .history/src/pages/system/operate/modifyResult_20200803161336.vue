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
                    <ul>
                        <li></li>
                        <li></li>
                    </ul>
                    <ul>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div>
                     <ul>
                        <li></li>
                        <li></li>
                    </ul>
                    <ul>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
        <div>
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
</style>