<template>
  <!-- 部门修改页 -->
  <div class="section-modify">
    <!-- label-width="150px" -->
    <div class="right-wrap">
      <div class="form">
        <!-- 可编辑表单 -->
        <ui-form ref="form" :rules="rules" :model="form" label-width="150px">
          <ui-row>
            <ui-col>
              <ui-form-item label="机构名称" prop="tagName">
                <div class="right-item">{{organName}}</div>
              </ui-form-item>
              <ui-form-item label="部门名称">
                <ui-input-business v-model="form.sectionName" placeholder="请输入部门名称"></ui-input-business>
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
      // 机构名称
      organName: '江南农村商业银行总行',

      form: {
        sectionName: '蓝天大地',
      },
      rules: {
        sectionName: [
          {
            required: true,
            message: '请输入产品标签名称',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  created() {},

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          sessionStorage.setItem('sectionName', this.form.sectionName)
          this.$router.push('/sectionModifyConf')
        } else {
          return false
        }
      })
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
.section-modify {
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
