<template>
  <!-- 行外机构信息维护页 -->
  <div class="line-query">
    <!-- label-width="150px" -->
    <div class="right-wrap">
      <block-title blockTitle="授信额度查询"></block-title>
      <ui-row>
        <div class="form">
          <ui-form ref="form" :model="form" label-width="150px">
            <ui-row>
              <ui-col>
                <ui-form-item label="机构类型">
                  <ui-select v-model="form.organType" placeholder="请选择">
                    <ui-option
                      v-for="item in organTypeList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></ui-option>
                  </ui-select>
                </ui-form-item>
                <ui-form-item label="机构名称">
                  <ui-input-business v-model="form.organName" placeholder="请输入机构名称"></ui-input-business>
                </ui-form-item>
              </ui-col>
            </ui-row>
            <ui-row class="btn">
              <ui-button type="primary" class="back-btn" @click="goBack">重置</ui-button>
              <ui-button type="primary" class="continue-next" @click="clickQuery('form')">查询</ui-button>
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
          <ui-table-column prop="tagName" label="机构名称"></ui-table-column>
          <ui-table-column prop="remark" label="授信测算额度"></ui-table-column>
          <ui-table-column prop="remark" label="总额度（亿元）"></ui-table-column>
          <ui-table-column prop="remark" label="授信期限（月）"></ui-table-column>
          <ui-table-column prop="remark" label="交易银行部业务额度（亿元）"></ui-table-column>
          <ui-table-column prop="remark" label="金融市场部业务额度（亿元）"></ui-table-column>
          <ui-table-column prop="remark" label="金融业务部业务额度（亿元）"></ui-table-column>
          <ui-table-column prop="remark" label="零售业务部业务额度（亿元）"></ui-table-column>
          <ui-table-column prop="remark" label="资产管理部业务额度（亿元）"></ui-table-column>
          <ui-table-column prop="remark" label="业务往来情况"></ui-table-column>
        </ui-table>
      </div>
      <ui-row class="btn btnbg">
        <ui-pagination background layout="prev, pager, next" :total="1000"></ui-pagination>
      </ui-row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'lineCreditQuery',
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
.line-query {
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
