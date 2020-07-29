<template>
  <!-- 产品标签新增页 -->
  <div class="product-tag-add">
    <!-- label-width="150px" -->
    <div class="right-wrap">
      <ui-row class="handle-title">
        <ui-col :span="12">产品标签维护</ui-col>
      </ui-row>
      <div class="table">
        <ui-table :data="productTags" style="width: 96%;margin:0 auto">
          <ui-table-column label="请选择" width="80">
            <template slot-scope="scope">
              <ui-radio
                v-model="tableRadio"
                :label="scope.$index"
                @change.native="getCurrentRow(scope.row)"
              >
                <i></i>
              </ui-radio>
            </template>
          </ui-table-column>
          <ui-table-column prop="tagName" label="产品标签名称" width="180"></ui-table-column>
          <ui-table-column prop="remark" label="备注" width="180"></ui-table-column>
          <ui-table-column prop="createTime" label="创建时间"></ui-table-column>
          <ui-table-column label="操作">
            <template slot-scope="scope">
              <ui-button
                class="operator-button"
                @click="goModify(scope.row)"
                type="text"
                size="small"
              >修改</ui-button>
              <ui-button
                class="operator-button"
                @click="goDel(scope.row)"
                type="text"
                size="small"
              >删除</ui-button>
            </template>
          </ui-table-column>
        </ui-table>
      </div>
      <ui-row class="btn btnbg">
        <ui-button type="primary" class="back-btn single-btn" @click="goAdd">新增</ui-button>
      </ui-row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'productService',
  computed: {},
  data() {
    return {
      // 单选按钮
      tableRadio: '',
      // 获取选中数据
      chosedData: [],
      // 产品标签维护数据
      productTags: [
        {
          index: '1',
          tagName: '蓝天大地',
          remark: '一千万',
          createTime: '2020-02-24',
        },
        {
          index: '2',
          tagName: '蓝天大地',
          remark: '一千万',
          createTime: '2020-02-24',
        },
        {
          index: '3',
          tagName: '蓝天大地',
          remark: '一千万',
          createTime: '2020-02-24',
        },
      ],
      rules: {
        tagName: [
          {
            required: true,
            message: '请输入产品标签名称',
            trigger: 'blur',
          },
        ],
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
      this.$router.push('/productTagAdd')
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
