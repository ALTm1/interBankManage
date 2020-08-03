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
        <div class="content-wrap">
            <div>
                <ul class="content-left">
                    <li>操作员ID</li>
                    <li>{{id}}</li>
                </ul>
                <ul class="content-right">
                    <li>操作员姓名</li>
                    <li>{{name}}</li>
                </ul>
            </div>
            <div>
                <ul class="content-left">
                    <li>证件号</li>
                    <li>{{znumber}}</li>
                </ul>
                <ul class="content-right">
                    <li>工号</li>
                    <li>{{number}}</li>
                </ul>
            </div>
            <div>
                <ul class="content-left">
                    <li>联系电话</li>
                    <li>{{phone}}</li>
                </ul>
                <ul class="content-right">
                    <li>邮箱</li>
                    <li>{{email}}</li>
                </ul>
            </div>
            <div>
                <ul class="content-left">
                    <li>所属机构</li>
                    <li>{{orgnization}}</li>
                </ul>
                <ul class="content-right">
                    <li>所属部门</li>
                    <li>{{department}}</li>
                </ul>
            </div>
            <div>
                <ul class="content-left">
                    <li>状态</li>
                    <li>{{state}}</li>
                </ul>
                <ul class="content-right">
                    <li>操作员角色</li>
                    <li>{{role}}</li>
                </ul>
            </div>
            <div>
                <ul class="content-left">
                    <li>创建时间</li>
                    <li>{{estime}}</li>
                </ul>
                <ul class="content-right">
                    <li>上次登录时间</li>
                    <li>{{time}}</li>
                </ul>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name:'operatecancel'
}
</script>
<style scoped>

</style>