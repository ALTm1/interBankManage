<template>
    <div>
        <!-- 轮播图 -->
         <ui-carousel height="400px">
      <ui-carousel-item v-for="(item,index) in imgList" :key="index">
          <img :src="item.imgUrl" alt="">
        <!-- <h3 class="small">{{ item.title }}</h3> -->
      </ui-carousel-item>
    </ui-carousel>
    <!-- 消息滚动条 -->
    <div>
         <!-- <ui-scrollbar :style="{height: scrollHeight}">
     <img src="../../assets/image/notice.png" alt="">
        <div>........</div>
        <div>业务信息推荐展示业务信息推荐展示业务信息推荐展示业务信息推荐展示业务信息推荐展示</div>
        <div>业务信息推荐展示业务信息推荐展示业务信息推荐展示业务信息推荐展示业务信息推荐展示</div>
    </ui-scrollbar> -->
     <ui-carousel height="200px" direction="vertical" :autoplay="false">
    <ui-carousel-item v-for="item in 3" :key="item">
      <h3 class="medium">{{ item }}</h3>
    </ui-carousel-item>
  </ui-carousel>
    </div>
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
    },
     mounted(){
        this.scrollHeight = window.innerHeight*0.7 + 'px';
    }
}
</script>
<style scoped>

</style>