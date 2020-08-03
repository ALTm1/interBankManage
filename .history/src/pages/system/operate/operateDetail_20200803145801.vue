<template>
    <div>
        <!-- 面包屑 -->
    <div class="operate-header">
      <ui-breadcrumb separator-class="ui-icon-arrow-right">
        <ui-breadcrumb-item :to="{ path: '/' }">您的位置:系统管理</ui-breadcrumb-item>
        <ui-breadcrumb-item>操作员管理</ui-breadcrumb-item>
        <ui-breadcrumb-item>操作员详情</ui-breadcrumb-item>
      </ui-breadcrumb>
    </div>
    <div class="detail-content">
        <div class="table-title">
          <li class="title-left">操作员查询</li>
          <li class="title-right"></li>
        </div>
        <div>
            <div>
                <ul class="content-left">
                    <li>操作员ID</li>
                    <li></li>
                </ul>
                <ul class="content-right">
                    <li>操作员姓名</li>
                    <li></li>
                </ul>
            </div>
            <div>
                <ul class="content-left">
                    <li>操作员姓名</li>
                    <li></li>
                </ul>
                <ul class="content-right">
                    <li>工号</li>
                    <li></li>
                </ul>
            </div>
            <div>
                <ul class="content-left">
                    <li>联系电话</li>
                    <li></li>
                </ul>
                <ul class="content-right">
                    <li>邮箱</li>
                    <li></li>
                </ul>
            </div>
            <div>
                <ul class="content-left">
                    <li>所属机构</li>
                    <li></li>
                </ul>
                <ul class="content-right">
                    <li>所属部门</li>
                    <li></li>
                </ul>
            </div>
            <div>
                <ul class="content-left">
                    <li>状态</li>
                    <li></li>
                </ul>
                <ul class="content-right">
                    <li>操作员角色</li>
                    <li></li>
                </ul>
            </div>
            <div>
                <ul class="content-left">
                    <li>创建时间</li>
                    <li></li>
                </ul>
                <ul class="content-right">
                    <li>上次登录时间</li>
                    <li></li>
                </ul>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name:'operatedetail'
}
</script>
<style scoped>
.detail-content{
    margin-left: 12px;
}
.title-left{
    margin-left: 11px;
}
.content-left{
    float: left;
}
.content-right{
    float: right;
}
</style>