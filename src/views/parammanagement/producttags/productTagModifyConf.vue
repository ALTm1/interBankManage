<template>
  <!-- 产品标签修改页 -->
  <div class="product-tag-modify-conf">
    <div class="right-wrap">
      <div class="form">
        <!-- 可编辑表单 -->
        <ui-form ref="form" :model="form" label-width="150px">
          <ui-row>
            <ui-col>
              <ui-form-item label="产品标签名称">
                <div class="right-item">{{form.tagName}}</div>
              </ui-form-item>
              <ui-form-item label="备注">
                <div class="right-item">{{form.remark}}</div>
              </ui-form-item>
            </ui-col>
          </ui-row>
          <ui-row class="btn">
            <ui-button type="primary" class="back-btn" @click="goBack">返回</ui-button>
            <ui-button type="primary" class="continue-next" @click="submitForm('form')">确定</ui-button>
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
    }
  },
  created() {
    this.form = JSON.parse(sessionStorage.getItem('proTag'))
  },

  methods: {
    submitForm(formName) {
      this.$router.push('/productTagModifyRes')
    },

    goBack() {
      this.$router.go(-1)
    },
  },
}
</script>
<style lang="scss">
.product-tag-modify-conf {
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
