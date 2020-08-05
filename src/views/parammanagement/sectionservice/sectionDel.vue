<template>
  <!-- 部门删除结果页 -->
  <div class="section-del">
    <!-- label-width="150px" -->
    <div class="right-wrap">
      <div class="form">
        <ui-form ref="form" label-width="150px">
          <ui-row>
            <ui-col>
              <ui-form-item label="机构名称">
                <div class="right-item">{{form.organName}}</div>
              </ui-form-item>
              <ui-form-item label="部门名称">
                <div class="right-item">{{form.sectionName}}</div>
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
  name: 'sectionDel',
  computed: {},
  data() {
    return {
      form: {
        organName: '江南农村商业银行总行',
        sectionName: '一千万',
      },
    }
  },
  methods: {
    // 删除
    submitForm(formName) {
      this.$router.push('sectionDelRes')
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
.section-del {
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
