<template>
  <!-- 产品标签新增页 -->
  <div class="product-tag-add">
    <!-- label-width="150px" -->
    <div class="right-wrap">
      <ui-row class="handle-title">
        <ui-col :span="12">产品标签新增</ui-col>
        <ui-col :span="12" class="back">返回</ui-col>
      </ui-row>
      <div class="form">
        <ui-form ref="form" :rules="rules" :model="form" label-width="150px">
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
            <ui-button type="primary" class="continue-next" @click="submitForm('form')">确认</ui-button>
          </ui-row>
        </ui-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'productTagConf',
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
    // 点击确认
    submitForm(formName) {
      this.$router.push('productTagRes')
      // 只对个别输入框进行校验
      /* this.$refs[formName].validateField(
        ["payeeAccountAcNo","trsAmount"],
        (valid) => {
          // valid为""时校验通过
          if (!valid) {
            this.onSubmit();
          } else {
            return false;
          }
        }
      ); */
      // this.$refs[formName].validate((valid) => {
      //   if (valid) {
      //     //   this.onSubmit()
      //   } else {
      //     return false
      //   }
      // })
    },
    // 组装数据
    onSubmit() {
      // 获取上送数据，对数据按照要求的格式上送
    },
    // 提交表单
    submitPre(pargs) {},
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
