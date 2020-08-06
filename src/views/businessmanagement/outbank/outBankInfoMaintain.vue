<template>
  <!-- 行外机构信息维护页 -->
  <div class="out-bank">
    <div class="right-wrap">
      <ui-row>
        <div class="form">
          <ui-form ref="form" :model="form" label-width="150px">
            <ui-row>
              <ui-col>
                <ui-form-item label="机构类型" prop="organType">
                  <ui-select v-model="form.organType" placeholder="请选择">
                    <ui-option
                      v-for="item in organTypeList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></ui-option>
                  </ui-select>
                </ui-form-item>
                <ui-form-item label="机构名称" prop="organName">
                  <ui-input-business v-model="form.organName" placeholder="请输入机构名称"></ui-input-business>
                </ui-form-item>
              </ui-col>
            </ui-row>
            <ui-row class="btn">
              <ui-button type="primary" class="back-btn" @click="reset('form')">重置</ui-button>
              <ui-button type="primary" class="continue-next" @click="clickQuery('form')">查询</ui-button>
            </ui-row>
          </ui-form>
        </div>
      </ui-row>
      <query-result :isResultShow="isResultShow"></query-result>
      <ui-row>
        <div class="table">
          <ui-table :data="productTags">
            <ui-table-column label="序号" width="180">
              <template slot-scope="scope">
                <span class="serial-number">001{{scope.$index + 1}}</span>
              </template>
            </ui-table-column>
            <ui-table-column prop="tagName" label="机构名称"></ui-table-column>
            <ui-table-column prop="remark" label="机构类型"></ui-table-column>
            <ui-table-column prop="createTime" label="机构状态"></ui-table-column>
            <ui-table-column label="操作">
              <template slot-scope="scope">
                <ui-button
                  class="operator-button"
                  @click="goDetail(scope.row)"
                  type="text"
                  size="small"
                >查看详情</ui-button>
                <ui-button
                  class="operator-button"
                  @click="goCancel(scope.row)"
                  type="text"
                  size="small"
                >注销</ui-button>
              </template>
            </ui-table-column>
          </ui-table>
        </div>
      </ui-row>

      <ui-row class="btn btnbg">
        <!-- <ui-button type="primary" class="back-btn single-btn" @click="goAdd">新增</ui-button> -->
      </ui-row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'outBankInfoMaintain',
  computed: {},
  data() {
    return {
      // 表单的值
      form: {
        organType: '',
        organName: '',
      },
      isResultShow: false,
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
    clickQuery() {
      this.isResultShow = true
    },
    // 点击重置
    reset(formName) {
      this.$refs[formName].resetFields()
    },
    // 点击查看详情
    goDetail(row) {
      this.$router.push('/infoDetail')
    },
    // 点击注销
    goCancel(row) {
      this.$router.push('/organCancel')
    },
    // 获取选中的数据
    getCurrentRow(row) {
      this.chosedData = row
    },
  },
}
</script>
<style lang="scss">
.out-bank {
  .right-wrap {
    background: #fff;
    .form {
      // background: #fff;
      .ui-form {
        width: 50%;
        padding: 62px 0;
        margin: 0 auto;
      }
    }
    .table {
      padding-bottom: 40px;
      // .ui-table__header-wrapper th {
      //   padding: 0;
      //   background: rgba(245, 246, 248, 1);
      //   box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.1);
      //   border-radius: 4px 4px 0px 0px;
      // }
      // .ui-table__header-wrapper tr {
      //   height: 30px;
      // }
    }
  }

  .btnbg {
    margin-top: 0;
    background: #fff;
    padding: 50px 0 30px;
  }
}
</style>
