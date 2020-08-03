<template>
  <!-- 产品标签修改页 -->
  <div class="product-tag-add">
    <!-- label-width="150px" -->
    <div class="right-wrap">
      <block-title blockTitle="产品标签修改"></block-title>
      <div class="form">
        <!-- 可编辑表单 -->
        <ui-form
          ref="form"
          v-if="isContentShow==='0'||isContentShow==='1'"
          :rules="rules"
          :model="form"
          label-width="150px"
        >
          <ui-row v-if="isContentShow==='0'">
            <ui-col>
              <ui-form-item label="产品标签名称" prop="tagName">
                <ui-input-business v-model="form.tagName" placeholder="请输入名称"></ui-input-business>
              </ui-form-item>
              <ui-form-item label="备注">
                <ui-input-business v-model="form.remark" placeholder="请输入备注"></ui-input-business>
              </ui-form-item>
            </ui-col>
          </ui-row>
          <!-- 确认 -->
          <ui-row v-if="isContentShow==='1'">
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
            <ui-button type="primary" class="continue-next" @click="submitForm('form')">{{btnText}}</ui-button>
          </ui-row>
        </ui-form>
      </div>
      <!--结果 -->
      <div class="result" v-if="isContentShow==='2'">
        <img src alt class="result-img" />
        <div class="result-status">交易成功</div>
        <div class="batch">交易流水号:33445566888</div>
        <ui-row class="btn">
          <ui-button type="primary" class="back-btn" @click="goBack">返回</ui-button>
          <ui-button type="primary" class="continue-next" @click="submitForm('form')">完成</ui-button>
        </ui-row>
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
      // 控制页面中间部分展示内容
      isContentShow: '0',
      btnText: '新增',
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
  created() {},
  mounted() {
    this.isContentShow = sessionStorage.getItem('cont')
      ? sessionStorage.getItem('cont')
      : '0'
    // console.log(this.isContentShow)
  },
  destroyed() {
    sessionStorage.clear()
  },
  methods: {
    submitForm(formName) {
      sessionStorage.setItem('cont', '0')
      if (formName === 'form' && this.isContentShow === '0') {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.isContentShow = '1'
            this.btnText = '确认'
            sessionStorage.setItem('cont', '1')
          } else {
            return false
          }
        })
      } else {
        this.isContentShow = '2'
        sessionStorage.setItem('cont', '2')
        this.$router.push('/productService')
      }
      // this.$router.push('/productTagConf')
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
