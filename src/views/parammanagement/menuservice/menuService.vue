<template>
  <!-- 审批菜单维护页 -->
  <div class="menu-service">
    <div class="right-wrap">
      <ui-row style="background:#fff;padding:40px 20px">
        <ui-col :span="4">关联功能：</ui-col>
        <ui-col :span="8">
          <ui-tree
            :data="treeData"
            :props="defaultProps"
            show-checkbox
            node-key="id"
            default-expand-all
            :expand-on-click-node="false"
          ></ui-tree>
        </ui-col>
      </ui-row>
      <ui-row style="background:#fff">
        <ui-col style="text-align:center">
          <ui-checkbox>添加审批流程</ui-checkbox>
        </ui-col>
      </ui-row>
      <ui-row class="btn btnbg">
        <ui-button type="primary" class="back-btn single-btn" @click="goConf">确定</ui-button>
      </ui-row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'menuService',
  computed: {},
  data() {
    return {
      // 单选按钮
      tableRadio: '',
      // 获取选中数据
      chosedData: [],
      // 树组件数据
      treeData: [
        {
          id: 1,
          label: '一级 1',
          children: [
            {
              id: 4,
              label: '二级 1-1',
              children: [
                {
                  id: 9,
                  label: '三级 1-1-1',
                },
                {
                  id: 10,
                  label: '三级 1-1-2',
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: '一级 2',
          children: [
            {
              id: 5,
              label: '二级 2-1',
            },
            {
              id: 6,
              label: '二级 2-2',
            },
          ],
        },
        {
          id: 3,
          label: '一级 3',
          children: [
            {
              id: 7,
              label: '二级 3-1',
            },
            {
              id: 8,
              label: '二级 3-2',
            },
          ],
        },
      ],
      defaultProps: {
        children: 'children',
        label: 'label',
      },
    }
  },
  methods: {
    // 返回按钮
    goBack() {
      this.$router.go(-1)
    },
    // 点击修改
    goModify(row) {
      this.$router.push('/productTagModify')
    },
    // 点击删除
    goDel(row) {
      this.$router.push('/productTagDel')
    },
    // 新增
    goConf() {
      this.$router.push('/menuServiceConf')
    },
    // 获取选中的数据
    getCurrentRow(row) {
      this.chosedData = row
    },
  },
}
</script>
<style lang="scss">
.menu-service {
  .table {
    background: #fff;
  }
  .btnbg {
    margin-top: 0;
    background: #fff;
    padding: 50px 0 30px;
  }
}
</style>
