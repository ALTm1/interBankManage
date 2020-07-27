<template>
    <div class="header-wrap">
        <!-- 首页 -->
        <!-- 轮播图 -->
        <Header></Header>
        <!-- 产品列表 -->
        <info-list></info-list>
    </div>
</template>
<script>
import Header from './Header'
import infolist from './infoList'
export default {
    name:'home',
    components:{
        Header,
        infoList
    }
}
</script>
<style scoped>
.header-wrap{
    width: 100%;
}
</style>