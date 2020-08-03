<template>
  <!-- 下架确认页 -->
  <div class="user-detail">
    <!-- label-width="150px" -->
    <div class="right-wrap">
      <block-title blockTitle="产品下架确认"></block-title>

      <div class="form">
        <ui-form ref="form" label-width="100px">
          <ui-row>
            <ui-col :span="12">
              <ui-form-item label="产品类型">
                <div class="right-item">产品类型</div>
              </ui-form-item>
              <ui-form-item label="业务类型">
                <div class="right-item">产品类型</div>
              </ui-form-item>
              <ui-form-item label="产品发布者">
                <div class="right-item">产品类型</div>
              </ui-form-item>
              <ui-form-item label="发布方联系人">
                <div class="right-item">产品类型</div>
              </ui-form-item>
              <ui-form-item label="产品名称">
                <div class="right-item">产品类型</div>
              </ui-form-item>
              <ui-form-item label="发布日期">
                <div class="right-item">产品类型</div>
              </ui-form-item>
              <ui-form-item label="属性">
                <div class="right-item">产品类型</div>
              </ui-form-item>
            </ui-col>
            <ui-col :span="12">
              <ui-form-item label="产品标签">
                <div class="right-item">产品类型</div>
              </ui-form-item>
              <ui-form-item label="交易方向">
                <div class="right-item">产品类型</div>
              </ui-form-item>
              <ui-form-item label="交易期限（天）">
                <div class="right-item">产品类型</div>
              </ui-form-item>
              <ui-form-item label="金额（万元）">
                <div class="right-item">产品类型</div>
              </ui-form-item>
              <ui-form-item label="年利率">
                <div class="right-item">产品类型</div>
              </ui-form-item>
              <ui-form-item label="备注">
                <div class="right-item">产品类型</div>
              </ui-form-item>
            </ui-col>
          </ui-row>
          <!-- <ui-row class="btn"> -->
          <!-- <ui-button type="primary" class="back-btn" @click="goBack">返回</ui-button> -->
          <!-- <ui-button type="primary" class="continue-next" @click="submitForm('form')">确认</ui-button> -->
          <!-- </ui-row> -->
        </ui-form>
      </div>
      <ui-row class="handle-title">
        <ui-col :span="12">机构列表</ui-col>
        <ui-col :span="12" class="back">返回</ui-col>
      </ui-row>
      <div class="table">
        <ui-table :data="userInfoList" style="width: 100%;">
          <ui-table-column label="序号" width="80">
            <template slot-scope="scope">
              <ui-radio
                disabled
                v-model="tableRadio"
                :label="scope.$index"
                @change.native="getCurrentRow(scope.row)"
              ></ui-radio>
            </template>
          </ui-table-column>
          <!-- <ui-table-column prop="name" label="序号" width="80"></ui-table-column> -->
          <ui-table-column prop="loginName" label="机构全称"></ui-table-column>
        </ui-table>
      </div>
      <ui-row class="handle-title">
        <ui-col :span="12">发布方联系人</ui-col>
        <ui-col :span="12" class="back">返回</ui-col>
      </ui-row>
      <div class="table">
        <ui-table :data="userInfoList" style="width: 100%">
          <ui-table-column label="序号" width="80">
            <template slot-scope="scope">
              <ui-radio disabled :label="scope.$index" @change.native="getCurrentRow(scope.row)">
                <i></i>
              </ui-radio>
            </template>
          </ui-table-column>
          <ui-table-column prop="name" label="联系人姓名" width="80"></ui-table-column>
          <ui-table-column prop="loginName" label="联系电话"></ui-table-column>
          <ui-table-column prop="idCard" label="在线聊天"></ui-table-column>
        </ui-table>
      </div>
      <ui-row class="btn">
        <ui-button type="primary" class="continue-next" @click="submitForm()">下架</ui-button>
      </ui-row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'soldOut',
  computed: {},
  data() {
    return {
      // 表格数据
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
  created() {},
  methods: {
    // 点击下架
    submitForm() {
      this.$router.push('/soldOutRes')
      // 只对个别输入框进行校验
      /* this.$refs[formName].validateField(
        ["payeeAccountAcNo","trsAmount"],
        (valid) => {
          // valid为""时校验通过
          if (!valid) {
            this.onSubmit();
          } else {
            return false;
          }
        }
      ); */
      // this.$refs[formName].validate((valid) => {
      //   if (valid) {
      //     //   this.onSubmit()
      //   } else {
      //     return false
      //   }
      // })
    },

    // 返回按钮
    goBack() {
      // this.isContentShow = '0'
      // this.btnText = '新增'
      this.$router.go(-1)
    },
  },
}
</script>
<style lang="scss">
.user-detail {
  .form {
    background: #fff;
    .ui-form {
      padding: 62px 20px;
    }
  }
}
</style>
