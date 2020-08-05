<template>
  <!-- 产品标签删除页 -->
  <div class="product-tag-del">
    <div class="right-wrap">
      <div class="form">
        <ui-form ref="form" label-width="150px">
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
            <ui-button type="primary" class="continue-next" @click="submitForm('form')">删除</ui-button>
          </ui-row>
        </ui-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'productTagDel',
  computed: {},
  data() {
    return {
      form: {
        tagName: '蓝天大地',
        remark: '一千万',
      },
    }
  },
  methods: {
    // 删除
    submitForm(formName) {
      this.$router.push('productTagDelRes')
    },
    // 返回按钮
    goBack() {
      this.$router.go(-1)
    },
  },
}
</script>
<style lang="scss">
.product-tag-del {
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
