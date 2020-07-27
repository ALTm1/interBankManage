<template>
    <div>
        <div class="infolist-wrap">
            <div v-for="(info,index) in infoList" :key="index">
                
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
                    name:"",
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