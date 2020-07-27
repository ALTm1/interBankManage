<template>
    <div>
        <!-- 轮播图 -->
         <ui-carousel height="150px">
      <ui-carousel-item v-for="(item,index) in imgUrl" :key="index">
        <h3 class="small">{{ item }}</h3>
      </ui-carousel-item>
    </ui-carousel>
    </div>
</template>
<script>
export default {
    name:'header',
    data(){
        return{
            imgUrl:[
                "~@/assets/image/header.png",
                "~@/assets/image/header.png",
                "~@/assets/image/header.png",
                "~@/assets/image/header.png",
            ]
        }
    }
}
</script>
<style scoped>

</style>