<template>
  <!-- 产品标签修改页 -->
  <div class="product-tag-modify">
    <div class="right-wrap">
      <div class="form">
        <!-- 可编辑表单 -->
        <ui-form ref="form" :rules="rules" :model="form" label-width="150px">
          <ui-row>
            <ui-col>
              <ui-form-item label="产品标签名称" prop="tagName">
                <ui-input-business v-model="form.tagName" placeholder="请输入名称"></ui-input-business>
              </ui-form-item>
              <ui-form-item label="备注">
                <ui-input-business v-model="form.remark" placeholder="请输入备注"></ui-input-business>
              </ui-form-item>
            </ui-col>
          </ui-row>
          <ui-row class="btn">
            <ui-button type="primary" class="back-btn" @click="goBack">返回</ui-button>
            <ui-button type="primary" class="continue-next" @click="submitForm('form')">修改</ui-button>
          </ui-row>
        </ui-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'productTagModify',
  computed: {},
  data() {
    return {
      form: {
        tagName: '蓝天大地',
        remark: '一千万',
      },
      rules: {
        tagName: [
          {
            required: true,
            message: '请输入产品标签名称',
            trigger: 'blur',
          },
        ],
      },
    }
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          sessionStorage.setItem('proTag', JSON.stringify(this.form))
          this.$router.push('/productTagModifyConf')
        } else {
          return false
        }
      })
    },
    // 返回按钮
    goBack() {
      this.$router.go(-1)
    },
  },
}
</script>
<style lang="scss">
.product-tag-modify {
  .form {
    background: #fff;
    .ui-form {
      width: 50%;
      padding: 62px 0;
      margin: 0 auto;
    }
  }
}
</style>
