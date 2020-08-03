<template>
  <!-- 机构补录页 -->
  <div class="info-detail">
    <!-- label-width="150px" -->
    <div class="right-wrap">
      <block-title blockTitle="机构补录"></block-title>

      <div class="form">
        <ui-form ref="form" :model="form" label-width="150px">
          <ui-row>
            <ui-col>
              <ui-form-item label="统一社会信用代码">
                <div class="right-item">{{form.ScialCode}}</div>
              </ui-form-item>
            </ui-col>
          </ui-row>
        </ui-form>
        <ui-row class="btn btn-padding">
          <ui-button type="primary" class="back-btn" @click="goBack">返回</ui-button>
          <ui-button type="primary" class="continue-next" @click="submitForm('form')">确认</ui-button>
        </ui-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'addRecording',
  computed: {},
  data() {
    return {
      form: {
        //   统一社会信用代码
        ScialCode: '',
      },
    }
  },
  methods: {
    // 点击确认
    submitForm(formName) {
      this.$router.push('/recordingRes')
    },

    // 返回按钮
    goBack() {
      this.$router.go(-1)
    },
  },
}
</script>
<style lang="scss">
.info-detail {
  .form {
    background: #fff;
    .ui-form {
      width: 50%;
      margin: 0 auto;
      padding: 62px 20px 0;
    }
  }
}
</style>
