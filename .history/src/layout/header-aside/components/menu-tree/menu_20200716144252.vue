// 左侧菜单栏
<template>
    <div>
        <ui-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></ui-tree>
    </div>
</template>
<script>

export default {
    name:"",
    data(){
        return{
            
        }
    }
}
</script>
<style scoped>

</style>