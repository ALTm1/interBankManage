<template>
    <div class="header-wrap">
        <!-- 首页 -->
        <!-- 轮播图 -->
        <Header></Header>
    </div>
</template>
<script>
import Header from './Header'
export default {
    name:'home',
    components:{
        Header
    }
}
</script>
<style scoped>
.header-wrap{
    width: 100%;
}
</style>