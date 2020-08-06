<template>
  <!-- 授信额度查询页 -->
  <div class="credit-query">
    <div class="right-wrap">
      <block-title blockTitle="授信文件管理"></block-title>
      <ui-row>
        <div class="form">
          <ui-form ref="form" :model="form" label-width="150px">
            <ui-row>
              <ui-col>
                <!-- <ui-form-item label="机构类型">
                  <ui-select v-model="form.organType" placeholder="请选择">
                    <ui-option
                      v-for="item in organTypeList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></ui-option>
                  </ui-select>
                </ui-form-item>-->
                <ui-form-item label="机构名称">
                  <ui-input-business v-model="form.organName" placeholder="请输入机构名称"></ui-input-business>
                </ui-form-item>
              </ui-col>
            </ui-row>
          </ui-form>
        </div>
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
          <ui-table-column prop="tagName" label="机构名称" width="180"></ui-table-column>
          <ui-table-column prop="remark" label="授信文件" width="180"></ui-table-column>
          <!-- <ui-table-column prop="createTime" label="机构状态" width="180"></ui-table-column> -->
          <ui-table-column label="操作">
            <template slot-scope="scope">
              <ui-button
                class="operator-button"
                @click="goDetail(scope.row)"
                type="text"
                size="small"
              >上传</ui-button>
              <ui-button
                class="operator-button"
                @click="goCancel(scope.row)"
                type="text"
                size="small"
              >重新上传</ui-button>
              <ui-button
                class="operator-button"
                @click="goCancel(scope.row)"
                type="text"
                size="small"
              >下载</ui-button>
            </template>
          </ui-table-column>
        </ui-table>
      </div>
      <ui-row class="btn btnbg">
        <ui-button type="primary" class="back-btn single-btn" @click="goBack">返回</ui-button>
      </ui-row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'creditFilesManagement',
  computed: {},
  data() {
    return {
      // 表单的值
      form: {
        organType: '',
        organName: '',
      },
      // 机构类型数据
      organTypeList: [
        {
          value: '1',
          label: '全部',
        },
        {
          value: '2',
          label: '银行机构',
        },
        {
          value: '3',
          label: '非银行机构',
        },
      ],
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
    }
  },
  methods: {
    // 返回按钮
    goBack() {
      this.$router.go(-1)
    },
    // 点击查询
    clickQuery() {},
    // 点击查看详情
    goDetail(row) {
      this.$router.push('/infoDetail')
    },

    // 获取选中的数据
    getCurrentRow(row) {
      this.chosedData = row
    },
  },
}
</script>
<style lang="scss">
.credit-query {
  .form {
    background: #fff;
    .ui-form {
      width: 50%;
      padding: 62px 0;
      margin: 0 auto;
    }
  }
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
