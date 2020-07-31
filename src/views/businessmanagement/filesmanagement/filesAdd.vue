<template>
  <!-- 产品查询页 -->
  <div class="files-management">
    <!-- label-width="150px" -->
    <div class="right-wrap">
      <ui-row class="handle-title">
        <ui-col :span="12">文件新增</ui-col>
      </ui-row>
      <ui-row>
        <div class="form">
          <ui-form ref="form" :model="form" label-width="150px">
            <ui-row>
              <ui-col>
                <ui-form-item label="业务类型">
                  <ui-select v-model="form.productType" placeholder="请选择">
                    <ui-option
                      v-for="item in proTypeList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></ui-option>
                  </ui-select>
                </ui-form-item>
                <ui-form-item label="业务场景">
                  <ui-select v-model="form.tradeDirection" placeholder="请选择">
                    <ui-option
                      v-for="item in tradeDirectionList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></ui-option>
                  </ui-select>
                </ui-form-item>
                <ui-form-item label="文件标题">
                  <ui-input-business v-model="form.filesTitle" placeholder="请输入文件标题"></ui-input-business>
                </ui-form-item>
                <ui-form-item label="文件内容">
                  <ui-input-business
                    style="display:inline-block;margin-right: 20px"
                    v-model="form.filesContent"
                    placeholder="请上传文件内容"
                  ></ui-input-business>
                  <ui-button class="operator-button" type="text" size="small">上传</ui-button>
                </ui-form-item>
              </ui-col>
            </ui-row>
            <ui-row class="btn">
              <ui-button type="primary" class="back-btn" @click="goBack">返回</ui-button>
              <ui-button type="primary" class="continue-next" @click=" clickSubmit('form')">提交</ui-button>
            </ui-row>
            <!-- <ui-row class="btn">
              <ui-button type="primary" class="back-btn" @click="goBack">返回</ui-button>
              <ui-button type="primary" class="continue-next" @click="clickQuery('form')">提交</ui-button>
            </ui-row>-->
          </ui-form>
        </div>
      </ui-row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'productQuery',
  computed: {},
  data() {
    return {
      form: {
        // 产品类型
        productType: '',
        // 业务场景
        buissnessScene: '',
        // 文件标题
        filesTitle: '',
        // 文件内容
        filesContent: '',
      },
      // 业务类型数据
      businessTypeList: [
        {
          value: '1',
          label: '全部',
        },
        {
          value: '2',
          label: '本行',
        },
        {
          value: '3',
          label: '他行',
        },
      ],
      // 产品期限数据
      proLimitList: [
        {
          value: '1',
          label: '全部',
        },
        {
          value: '2',
          label: '30天以内',
        },
        {
          value: '3',
          label: '30-90天',
        },
        {
          value: '4',
          label: '91-180天',
        },
        {
          value: '5',
          label: '181-360天',
        },
        {
          value: '6',
          label: '一年以上',
        },
      ],
      // 产品类型数据
      proTypeList: [
        {
          value: '1',
          label: '同业资金',
        },
        {
          value: '2',
          label: '债券业务',
        },
        {
          value: '3',
          label: '线上资金业务',
        },
        {
          value: '4',
          label: '同业投资',
        },
        {
          value: '5',
          label: '同业存单',
        },
        {
          value: '6',
          label: '票据业务',
        },
        {
          value: '7',
          label: '同业福费廷',
        },
        {
          value: '8',
          label: '团购产品',
        },
      ],
      // 交易方向数据
      tradeDirectionList: [
        {
          value: '1',
          label: '全部',
        },
        {
          value: '2',
          label: '买入',
        },
        {
          value: '3',
          label: '卖出',
        },
      ],
      // 单选按钮
      tableRadio: '',
      // 获取选中数据
      chosedData: [],
      // 用户信息数据
      userInfoList: [
        {
          name: '朱一龙',
          loginName: '小哥の',
          idCard: '334455666888',
          organForShort: '就那个地方',
          subsidiaryOrgan: '所属机构',
          subsidiarySection: '所属部门',
          status: '正常',
        },
        {
          name: '朱一龙',
          loginName: '小哥の',
          idCard: '334455666888',
          organForShort: '就那个地方',
          subsidiaryOrgan: '所属机构',
          subsidiarySection: '所属部门',
          status: '已停用',
        },
        {
          name: '朱一龙',
          loginName: '小哥の',
          idCard: '334455666888',
          organForShort: '就那个地方',
          subsidiaryOrgan: '所属机构',
          subsidiarySection: '所属部门',
          status: '已注销',
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
    // 点击提交
    clickSubmit(formName) {
      this.$router.push('/filesAddConf')
      // this.$refs[formName].resetFields()
    },
    // 点击查看详情
    goDetail(row) {
      this.$router.push({
        name: 'productDetail',
        params: { detail: row },
      })
    },

    // 点击下架
    goSoldOut(row) {
      this.$router.push({
        path: '/soldOut',
      })
    },

    // 获取选中的数据
    getCurrentRow(row) {
      this.chosedData = row
    },
  },
}
</script>
<style lang="scss">
.files-management {
  .form {
    background: #fff;
    .ui-form {
      width: 60%;
      padding: 62px 20px;
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
  .resetTip {
    text-align: center;
    font-size: 14px;
    font-family: SimHei;
    font-weight: 400;
    color: #333;
  }
}
</style>
