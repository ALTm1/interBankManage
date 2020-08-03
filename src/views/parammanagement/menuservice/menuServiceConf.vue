<template>
  <!-- 产品标签新增页 -->
  <div class="product-tag-add">
    <!-- label-width="150px" -->
    <div class="right-wrap">
      <ui-row class="handle-title">
        <ui-col :span="12">审批菜单维护</ui-col>
      </ui-row>
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
      <ui-row style="background:#fff;padding-bottom:30px">
        <ui-col style="text-align:center">添加审批流程</ui-col>
      </ui-row>
      <ui-row class="btn">
        <ui-button type="primary" class="back-btn" @click="goBack">返回</ui-button>

        <ui-button type="primary" class="continue-next" @click="goAdd">确定</ui-button>
      </ui-row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'menuServiceConf',
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
    goAdd() {
      this.$router.push('/menuServiceRes')
    },
    // 获取选中的数据
    getCurrentRow(row) {
      this.chosedData = row
    },
  },
}
</script>
<style lang="scss">
.product-tag-add {
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
