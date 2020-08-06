<template>
  <!-- 部门修改确认页 -->
  <div class="section-modify">
    <div class="right-wrap">
      <div class="form">
        <ui-form ref="form" :model="form" label-width="150px">
          <ui-row>
            <ui-col>
              <ui-form-item label="机构名称">
                <div class="right-item">{{organName}}</div>
              </ui-form-item>
              <ui-form-item label="部门名称">
                <div class="right-item">{{form.sectionName}}</div>
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
  name: 'sectionMOdifyConf',
  computed: {},
  data() {
    return {
      // 机构名称
      organName: '江南农村商业银行总行',
      form: {
        sectionName: '蓝天大地',
      },
    }
  },
  created() {
    this.form.sectionName = sessionStorage.getItem('sectionName')
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push('/sectionModifyRes')
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
