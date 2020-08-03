<template>
    <div>
        <!-- <div>操作员管理</div> -->
       
        <div>
            <router-view/>
        </div>
    </div>
</template>
<script>
export default {
    name:''
}
</script>
<style>
.ui-breadcrumb__inner{
    font-size:12px;
font-family:SourceHanSansCN;
font-weight:400;
color:rgba(153,153,153,1);
}
.ui-breadcrumb__inner a, .ui-breadcrumb__inner.is-link{
    font-size:12px;
font-family:SourceHanSansCN;
font-weight:400;
color:rgba(153,153,153,1);
}
.ui-breadcrumb__item:last-child .ui-breadcrumb__inner, .ui-breadcrumb__item:last-child .ui-breadcrumb__inner a, .ui-breadcrumb__item:last-child .ui-breadcrumb__inner a:hover, .ui-breadcrumb__item:last-child .ui-breadcrumb__inner:hover{
    font-size:12px;
font-family:SourceHanSansCN;
font-weight:400;
color:#9B7041;
}
.operate-header{  
    font-size: 12px;
    padding: 19px 0 21px 11px;
}
</style>
