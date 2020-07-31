<template>
  <!-- 机构注销确认页 -->
  <div class="organ-cancel">
    <!-- label-width="150px" -->
    <div class="right-wrap">
      <ui-row class="handle-title">
        <ui-col :span="12">机构信息</ui-col>
        <ui-col :span="12" class="back">返回</ui-col>
      </ui-row>
      <div class="form">
        <ui-form ref="form" :model="form" label-width="250px">
          <ui-row>
            <ui-col>
              <ui-form-item label="机构全称">
                <div class="right-item">{{form.tagName}}</div>
              </ui-form-item>
              <ui-form-item label="机构类型">
                <div class="right-item">{{form.remark}}</div>
              </ui-form-item>
              <ui-form-item label="是否为总机构">
                <div class="right-item">{{form.remark}}</div>
              </ui-form-item>
              <ui-form-item label="归属机构全称">
                <div class="right-item">{{form.remark}}</div>
              </ui-form-item>
              <ui-form-item label="归属机构统一社会信用代码">
                <div class="right-item">{{form.ownScialCode}}</div>
              </ui-form-item>
              <ui-form-item label="归属机构组织机构代码证">
                <div class="right-item">{{form.remark}}</div>
              </ui-form-item>
              <ui-form-item label="附件-营业执照扫描件（加盖公章）">
                <div class="right-item">{{form.remark}}</div>
              </ui-form-item>
              <ui-form-item label="附件-授权委托书（加盖公章）">
                <div class="right-item">{{form.remark}}</div>
              </ui-form-item>
            </ui-col>
          </ui-row>
        </ui-form>
        <!-- <ui-row class="btn">
          <ui-button type="primary" class="back-btn" @click="goBack">返回</ui-button>
          <ui-button type="primary" class="continue-next" @click="submitForm('form')">确认</ui-button>
        </ui-row>-->
      </div>
      <ui-row class="handle-title">
        <ui-col :span="12">证件信息</ui-col>
        <ui-col :span="12" class="back">返回</ui-col>
      </ui-row>
      <div class="form">
        <ui-form ref="form" :model="form" label-width="250px">
          <ui-row>
            <ui-col>
              <ui-form-item label="统一社会信用代码">
                <div class="right-item">{{form.tagName}}</div>
              </ui-form-item>
              <ui-form-item label="组织机构代码证">
                <div class="right-item">{{form.remark}}</div>
              </ui-form-item>
              <ui-form-item label="法定代表人">
                <div class="right-item">{{form.remark}}</div>
              </ui-form-item>
              <ui-form-item label="资产规模（亿）">
                <div class="right-item">{{form.remark}}</div>
              </ui-form-item>
              <ui-form-item label="净资产（亿）">
                <div class="right-item">{{form.remark}}</div>
              </ui-form-item>
            </ui-col>
          </ui-row>
        </ui-form>
        <!-- <ui-row class="btn">
          <ui-button type="primary" class="back-btn" @click="goBack">返回</ui-button>
          <ui-button type="primary" class="continue-next" @click="submitForm('form')">确认</ui-button>
        </ui-row>-->
      </div>
      <ui-row class="handle-title">
        <ui-col :span="12">当前机构地址</ui-col>
        <ui-col :span="12" class="back">返回</ui-col>
      </ui-row>
      <div class="form">
        <ui-form ref="form" :model="form" label-width="250px">
          <ui-row>
            <ui-col>
              <ui-form-item label="省">
                <div class="right-item">{{form.tagName}}</div>
              </ui-form-item>
              <ui-form-item label="市">
                <div class="right-item">{{form.remark}}</div>
              </ui-form-item>
              <ui-form-item label="详细地址">
                <div class="right-item">{{form.remark}}</div>
              </ui-form-item>
              <ui-form-item label="联系人">
                <div class="right-item">{{form.remark}}</div>
              </ui-form-item>
              <ui-form-item label="电话">
                <div class="right-item">{{form.remark}}</div>
              </ui-form-item>
              <ui-form-item label="手机号码">
                <div class="right-item">{{form.remark}}</div>
              </ui-form-item>
              <ui-form-item label="传真">
                <div class="right-item">{{form.remark}}</div>
              </ui-form-item>
              <ui-form-item label="电子邮箱">
                <div class="right-item">{{form.remark}}</div>
              </ui-form-item>
              <ui-form-item label="用户信息描述">
                <div class="right-item">{{form.remark}}</div>
              </ui-form-item>
              <ui-form-item label="附件-营业执照扫描件（加盖公章）">
                <div class="right-item">{{form.remark}}</div>
              </ui-form-item>
              <ui-form-item label="附件-授权委托书（加盖公章）">
                <div class="right-item">{{form.remark}}</div>
              </ui-form-item>
            </ui-col>
          </ui-row>
        </ui-form>
        <ui-row class="btn">
          <ui-button type="primary" class="back-btn" @click="goBack">返回</ui-button>
          <ui-button type="primary" class="continue-next" @click="submitForm('form')">确认</ui-button>
        </ui-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'organCancel',
  computed: {},
  data() {
    return {
      form: {
        ownScialCode: '',
        tagName: '蓝天大地',
        remark: '一千万',
      },
    }
  },
  methods: {
    // 点击确定
    submitForm(formName) {
      this.$router.push('/organCancelRes')
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
    // 组装数据
    onSubmit() {
      // 获取上送数据，对数据按照要求的格式上送
    },
    // 提交表单
    submitPre(pargs) {},
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
.organ-cancel {
  .form {
    background: #fff;
    .ui-form {
      padding: 62px 20px;
    }
  }
}
</style>
