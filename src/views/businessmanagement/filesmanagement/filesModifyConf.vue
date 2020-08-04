<template>
  <!-- 文件修改确认页 -->
  <div class="files-modify-Conf">
    <div class="right-wrap">
      <block-title blockTitle="文件修改确认"></block-title>

      <div class="form">
        <ui-form ref="form" label-width="100px">
          <ui-row>
            <ui-col>
              <ui-form-item label="业务类型">
                <div class="right-item">啦啦啦啦啦啦啦</div>
              </ui-form-item>
              <ui-form-item label="业务场景">
                <div class="right-item">啦啦啦啦啦啦啦</div>
              </ui-form-item>
              <ui-form-item label="文件标题">
                <div class="right-item">啦啦啦啦啦啦啦</div>
              </ui-form-item>
              <ui-form-item label="文件内容">
                <div class="right-item">啦啦啦啦啦啦啦</div>
              </ui-form-item>
            </ui-col>
          </ui-row>
          <ui-row class="btn">
            <ui-button type="primary" class="back-btn" @click="goBack">取消</ui-button>
            <ui-button type="primary" class="continue-next" @click="submitForm('form')">确认</ui-button>
          </ui-row>
        </ui-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'filesModifyConf',
  computed: {},
  data() {
    return {}
  },
  created() {},
  methods: {
    // 点击确认
    submitForm(formName) {
      this.$router.push('/filesModifyRes')
    },

    // 返回按钮
    goBack() {
      this.$router.go(-1)
    },
  },
}
</script>
<style lang="scss">
.files-modify-Conf {
  .form {
    background: #fff;
    .ui-form {
      width: 50%;
      margin: 0 auto;
      padding: 62px 20px;
    }
  }
}
</style>
