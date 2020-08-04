<template>
  <!-- 操作确认页 -->
  <div class="handle-conf">
    <!-- label-width="150px" -->
    <div class="right-wrap">
      <block-title blockTitle="操作确认页"></block-title>

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
            <ui-button type="primary" class="back-btn" @click="goBack">取消</ui-button>
            <ui-button type="primary" class="continue-next" @click="submitForm('form')">{{btnText}}</ui-button>
          </ui-row>
        </ui-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'handleConf',
  computed: {},
  data() {
    return {
      fromLastPage: {},
      // 按钮文本
      btnText: '',
      // 操作结果，根据接口返回内容判断
      // 启用
      startUsing: 0,
      // 停用
      blockUp: 1,
      // 注销
      cancel: 2,
    }
  },
  created() {
    this.fromLastPage = this.$route.query.detail ? this.$route.query.detail : {}
    // 暂时用路由传参简单代替，按钮文本返回时，显示为注销，接口请求在判断就好了
    this.$route.query.type === 0
      ? (this.btnText = '启用')
      : this.$route.query.type === 1
      ? (this.btnText = '停用')
      : (this.btnText = '注销')
  },
  methods: {
    // 点击停用
    submitForm(formName) {
      this.$router.push('/handleRes')
    },

    // 返回按钮
    goBack() {
      this.$router.go(-1)
    },
  },
}
</script>
<style lang="scss">
.handle-conf {
  .form {
    background: #fff;
    .ui-form {
      padding: 62px 20px;
    }
  }
}
</style>
