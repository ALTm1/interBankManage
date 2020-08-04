<template>
  <!-- 用户详情页 -->
  <div class="user-detail">
    <div class="right-wrap">
      <block-title blockTitle="用户详情"></block-title>

      <div class="form">
        <ui-form ref="form" label-width="100px">
          <ui-row>
            <ui-col :span="12">
              <ui-form-item label="姓名">
                <div class="right-item">{{fromLastPage.name}}</div>
              </ui-form-item>
              <ui-form-item label="登录名">
                <div class="right-item">{{fromLastPage.loginName}}</div>
              </ui-form-item>
              <ui-form-item label="身份证号码">
                <div class="right-item">{{fromLastPage.idCard}}</div>
              </ui-form-item>
              <ui-form-item label="手机号码">
                <div class="right-item">{{fromLastPage.idCard}}</div>
              </ui-form-item>
              <ui-form-item label="邮箱">
                <div class="right-item">{{fromLastPage.idCard}}</div>
              </ui-form-item>
            </ui-col>
            <ui-col :span="12">
              <ui-form-item label="机构简称">
                <div class="right-item">{{fromLastPage.organForShort}}</div>
              </ui-form-item>
              <ui-form-item label="所属机构">
                <div class="right-item">{{fromLastPage.subsidiaryOrgan}}</div>
              </ui-form-item>
              <ui-form-item label="所属部门">
                <div class="right-item">{{fromLastPage.subsidiarySection}}</div>
              </ui-form-item>
              <ui-form-item label="用户角色">
                <div class="right-item">{{fromLastPage.subsidiarySection}}</div>
              </ui-form-item>
              <ui-form-item label="状态">
                <div class="right-item">{{fromLastPage.status}}</div>
              </ui-form-item>
            </ui-col>
          </ui-row>
          <ui-row class="btn">
            <ui-button type="primary" class="back-btn" @click="goBack">返回</ui-button>
          </ui-row>
        </ui-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'userDetail',
  computed: {},
  data() {
    return {
      fromLastPage: {},
    }
  },
  created() {
    this.fromLastPage = this.$route.params.detail
      ? this.$route.params.detail
      : {}
  },
  methods: {
    // 点击补录
    submitForm(formName) {
      this.$router.push('/addRecording')
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
