<template>
  <div>
    <div class="breadcrumb-header">
      <ui-breadcrumb separator-class="ui-icon-arrow-right">
        <ui-breadcrumb-item>您的位置: 审批管理</ui-breadcrumb-item>
        <ui-breadcrumb-item>审批记录查询</ui-breadcrumb-item>
        <ui-breadcrumb-item v-show="name!='审批记录查询'">{{name}}</ui-breadcrumb-item>
      </ui-breadcrumb>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
    }
  },
  watch: {
    $route: {
      handler: function (route) {
        this.name = route.meta.title
      },
      immediate: true,
    },
  },
}
</script>

<style lang="css" scoped>
.breadcrumb-header{
  margin-bottom: 40px;
}
</style>