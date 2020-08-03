<template>
  <!-- 产品查询页 -->
  <div class="product-query">
    <div class="right-wrap">
      <block-title blockTitle="产品查询"></block-title>

      <ui-row>
        <div class="form">
          <ui-form ref="form" :model="form" label-width="150px">
            <ui-row>
              <ui-col :span="12">
                <ui-form-item label="机构名称">
                  <ui-input-business v-model="form.organName" placeholder="请输入机构名称"></ui-input-business>
                </ui-form-item>
                <ui-form-item label="业务类型">
                  <ui-select v-model="form.businessType" placeholder="请选择">
                    <ui-option
                      v-for="item in businessTypeList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></ui-option>
                  </ui-select>
                </ui-form-item>
                <ui-form-item label="发布时间">
                  <div class="block">
                    <ui-date-picker
                      v-model="form.startTime"
                      type="date"
                      placeholder="选择日期"
                      format="yyyy 年 MM 月 dd 日"
                      value-format="yyyy-MM-dd"
                    ></ui-date-picker>
                  </div>
                </ui-form-item>
                <ui-form-item label="年利率">
                  <ui-input-business v-model="form.minRate" placeholder="请输入最小年利率"></ui-input-business>
                </ui-form-item>
                <ui-form-item label="产品期限">
                  <ui-select v-model="form.productLimit" placeholder="请选择">
                    <ui-option
                      v-for="item in proLimitList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></ui-option>
                  </ui-select>
                </ui-form-item>
              </ui-col>
              <ui-col :span="12">
                <ui-form-item label="产品类型">
                  <ui-select v-model="form.productType" placeholder="请选择">
                    <ui-option
                      v-for="item in proTypeList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></ui-option>
                  </ui-select>
                </ui-form-item>
                <ui-form-item label="交易方向">
                  <ui-select v-model="form.tradeDirection" placeholder="请选择">
                    <ui-option
                      v-for="item in tradeDirectionList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></ui-option>
                  </ui-select>
                </ui-form-item>
                <ui-form-item label="发布时间">
                  <div class="block">
                    <ui-date-picker
                      v-model="form.endTime"
                      type="date"
                      placeholder="选择日期"
                      format="yyyy 年 MM 月 dd 日"
                      value-format="yyyy-MM-dd"
                    ></ui-date-picker>
                  </div>
                </ui-form-item>
                <ui-form-item label="年利率">
                  <ui-input-business v-model="form.maxRate" placeholder="请输入最大年利率"></ui-input-business>
                </ui-form-item>
                <!-- <ui-form-item label="产品期限">
                  <ui-select v-model="form.businessType" placeholder="请选择">
                    <ui-option
                      v-for="item in businessTypeList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></ui-option>
                  </ui-select>
                </ui-form-item>-->
              </ui-col>
            </ui-row>
            <ui-row class="btn">
              <ui-button type="primary" class="back-btn" @click="resetForm('form')">重置</ui-button>
              <ui-button type="primary" class="continue-next" @click="clickQuery('form')">查询</ui-button>
            </ui-row>
          </ui-form>
        </div>
      </ui-row>

      <div class="table">
        <ui-table :data="userInfoList" style="width: 96%;margin:0 auto">
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
          <ui-table-column prop="name" label="产品类型" width="80"></ui-table-column>
          <ui-table-column prop="loginName" label="业务类型"></ui-table-column>
          <ui-table-column prop="idCard" label="交易方向"></ui-table-column>
          <ui-table-column prop="organForShort" label="机构全称"></ui-table-column>
          <ui-table-column prop="subsidiaryOrgan" label="利率"></ui-table-column>
          <ui-table-column prop="subsidiarySection" label="期限"></ui-table-column>
          <ui-table-column prop="status" label="金额"></ui-table-column>
          <ui-table-column label="操作">
            <template slot-scope="scope">
              <ui-button
                class="operator-button"
                @click="goDetail(scope.row)"
                type="text"
                size="small"
              >详情</ui-button>
              <ui-button class="operator-button" @click="goSoldOut" type="text" size="small">下架</ui-button>
              <!-- @click="goResetPass(scope.row)" -->
            </template>
          </ui-table-column>
        </ui-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'productQuery',
  computed: {},
  data() {
    return {
      // 表单的值
      form: {
        // 交易类型
        businessType: '',
        // 最小利率
        minRate: '',
        // 最大利率
        maxRate: '',
        // 开始日期
        startTime: '',
        // 结束日期
        endTime: '',
        // 产品期限
        productLimit: '',
        // 产品类型
        productType: '',
        // 交易方向
        tradeDirection: '',
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
    // 点击重置
    resetForm(formName) {
      console.log(3)
      this.$refs[formName].resetFields()
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
.product-query {
  .form {
    background: #fff;
    .ui-form {
      // width: 50%;
      padding: 62px 20px;
      // margin: 0 auto;
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
