// 左侧菜单栏
<template>
  <div>
    <ui-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></ui-tree>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      data: [
        {
          label: "系统管理员",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        },
        {
          label: "系统管理",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "参数管理",
          children: [
            {
              label: "产品标签维护",
            },
            {
              label: "部门维护",
            },
            {
              label: "审批菜单维护",
            },
          ]
        },
        {
          label: "业务管理",
          children: [
            {
              label: "产品标签维护",
            },
            {
              label: "部门维护",
            },
            {
              label: "审批菜单维护",
            },
            {
              label: "审批菜单维护",
            },
          ]
        },
        {
          label: "授信管理",
          children: [
            {
              label: "产品标签维护",
            },
            {
              label: "部门维护",
            },
            {
              label: "审批菜单维护",
            },
            {
              label: "审批菜单维护",
            },
          ]
        },
        {
          label: "授信管理",
          children: [
            {
              label: "产品标签维护",
            },
            {
              label: "部门维护",
            },
            {
              label: "审批菜单维护",
            },
            {
              label: "审批菜单维护",
            },
          ]
        },
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  }
};
</script>
<style scoped>
</style>