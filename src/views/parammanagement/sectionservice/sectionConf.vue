<template>
  <!-- 部门维护确认页 -->
  <div class="product-tag-add">
    <!-- label-width="150px" -->
    <div class="right-wrap">
      <block-title blockTitle="部门维护"></block-title>

      <div class="form">
        <ui-form ref="form" :rules="rules" :model="form" label-width="150px">
          <ui-row>
            <ui-col>
              <ui-form-item label="机构名称">
                <div class="right-item">{{organName}}</div>
              </ui-form-item>
              <ui-form-item label="请输入部门名称">
                <ui-input-business v-model="form.sectionName" placeholder="请输入部门名称"></ui-input-business>
              </ui-form-item>
            </ui-col>
          </ui-row>
          <ui-row class="btn">
            <ui-button type="primary" class="back-btn" @click="goBack">返回</ui-button>
            <ui-button type="primary" class="continue-next" @click="submitForm('form')">确认</ui-button>
          </ui-row>
        </ui-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'sectionConf',
  computed: {},
  data() {
    return {
      organName: '江南农村商业银行总行',
      form: {
        sectionName: '蓝天大地',
      },
      rules: {
        sectionName: [
          {
            required: true,
            message: '请输入部门名称',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  methods: {
    submitForm(formName) {
      this.$router.push('/sectionRes')
    },
    // 返回按钮
    goBack() {
      this.$router.go(-1)
    },
  },
}
</script>
<style lang="scss">
.product-tag-add {
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
