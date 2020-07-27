<template>
    <div>
        <div class="infolist-wrap">
            <div v-for="(info,index) in infoList" :key="index">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
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
                    content:""
                },
                {},
                {},
                {}
            ]
        }
    }
}
</script>
<style scoped>

</style>