<template>
    <div>
        <!-- 轮播图 -->
         <ui-carousel height="200px">
      <ui-carousel-item v-for="(item,index) in imgList" :key="index">
          <img :src="item.imgUrl" alt="">
        <!-- <h3 class="small">{{ item.title }}</h3> -->
      </ui-carousel-item>
    </ui-carousel>
    </div>
</template>
<script>
export default {
    name:'header',
    data(){
        return{
            imgList:[
                {
                    imgUrl:require("../../assets/image/header.png"),
                    title:'移动金融·创智未来'
                },
                {
                    imgUrl:require("../../assets/image/header.png"),
                    title:'移动金融·创智未来'
                },
                {
                    imgUrl:require("../../assets/image/header.png"),
                    title:'移动金融·创智未来'
                },
                {
                    imgUrl:require("../../assets/image/header.png"),
                    title:'移动金融·创智未来'
                },
            ],
        }
    }
}
</script>
<style scoped>

</style>