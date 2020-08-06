


<template>
  <div class="wrap">
    <div class="form-wrap">
      <ui-form
        class="form-block clear"
        ref="ruleForm"
        :model="form"
        :rules="rules"
        label-width="auto"
      >
        <div class="float-left">
          <ui-form-item label="产品一级分类" prop="proLevelOne">
            <ui-select v-model="form.proLevelOne" placeholder="请选择">
              <div v-for="item in proLevelOneList" :key="item.label">
                <ui-option :label="item.label" :value="item.value"></ui-option>
              </div>
            </ui-select>
          </ui-form-item>
        </div>
        <div class="float-right">
          <ui-form-item label="产品二级分类" prop="proLevelTwo">
            <ui-select v-model="form.proLevelTwo" placeholder="请选择">
              <div v-for="item in proLevelTwoList" :key="item.label">
                <ui-option :label="item.label" :value="item.value"></ui-option>
              </div>
            </ui-select>
          </ui-form-item>
        </div>
        <div class="float-left">
          <ui-form-item label="交易方向" prop="tradeDirec">
            <ui-select v-model="form.tradeDirec" placeholder="请选择">
              <div v-for="item in tradeDirecList" :key="item.label">
                <ui-option :label="item.label" :value="item.value"></ui-option>
              </div>
            </ui-select>
          </ui-form-item>
        </div>
        <div class="float-right">
          <ui-form-item label="产品名称" prop="proName">
            <ui-input v-model="form.proName" placeholder="请输入"></ui-input>
          </ui-form-item>
        </div>
        <div class="float-left">
          <ui-form-item label="机构全称" prop="organName">
            <ui-input v-model="form.organName" placeholder="请输入"></ui-input>
          </ui-form-item>
        </div>
        <div class="float-right">
          <ui-form-item label="利率" prop="proRate">
            <ui-input v-model="form.proRate" placeholder="请输入"></ui-input>
          </ui-form-item>
        </div>
        <div class="float-left">
          <ui-form-item label="期限" prop="timeLimit">
            <ui-select v-model="form.timeLimit" placeholder="请选择">
              <div v-for="item in timeLimitList" :key="item.label">
                <ui-option :label="item.label" :value="item.value"></ui-option>
              </div>
            </ui-select>
          </ui-form-item>
        </div>
        <div class="float-right">
          <ui-form-item label="金额" prop="money">
            <ui-input v-model="form.money" placeholder="请输入"></ui-input>
          </ui-form-item>
        </div>
      </ui-form>
    </div>
    <!-- 按钮 -->
    <div class="buttons">
      <Button @click.native="submitForm('ruleForm')" text="修改" backgroundColor="#CE2848"></Button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      proLevelOneList: [
        {
          label: '同业存款',
          value: '同业存款',
        },
        {
          label: '线上资金',
          value: '线上资金',
        },
      ],
      proLevelTwoList: [
        {
          label: '同业存款',
          value: '同业存款',
        },
        {
          label: '线上资金',
          value: '线上资金',
        },
      ],
      tradeDirecList: [
        {
          label: '买入',
          value: '买入',
        },
        {
          label: '卖出',
          value: '卖出',
        },
      ],
      timeLimitList: [
        {
          value: '2',
          label: '30天以内',
        },
        {
          value: '3',
          label: '30-90天',
        },
        {
          value: '4',
          label: '91-180天',
        },
        {
          value: '5',
          label: '181-360天',
        },
        {
          value: '6',
          label: '一年以上',
        },
      ],
      form: {
        proLevelOne: '',
        proLevelTwo: '',
        tradeDirec: '',
        proName: '',
        organName: '',
        proRate: '',
        timeLimit: '',
        money: '',
      },
      rules: {
        proLevelOne: [{ required: true, message: '请选择', trigger: 'change' }],
        proLevelTwo: [{ required: true, message: '请选择', trigger: 'change' }],
        tradeDirec: [{ required: true, message: '请选择', trigger: 'change' }],
        proName: [{ required: true, message: '请输入', trigger: 'change' }],
        organName: [{ required: true, message: '请输入', trigger: 'change' }],
        proRate: [{ required: true, message: '请输入', trigger: 'change' }],
        timeLimit: [{ required: true, message: '请选择', trigger: 'change' }],
        money: [{ required: true, message: '请输入', trigger: 'change' }],
      },
    }
  },
  created() {
    var rowTemp = JSON.parse(this.$route.query.row)
    debugger
    this.form = rowTemp
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.form)
          this.$router.push({
            path: '/productmodifyconfirm',
            query: {
              form: JSON.stringify(this.form),
            },
          })
        } else {
          return false
        }
      })
    },
  },
}
</script>

<style lang="css" scoped>
.wrap {
  background: #ffffff;
}
.form-block {
  padding: 50px 0px 0px;
  width: 1200px;
  box-sizing: border-box;
  margin: 0 auto;
}

.operator-button {
  font-size: 14px;
  font-family: SimHei;
  font-weight: 400;
  text-decoration: underline;
  color: rgba(5, 141, 215, 1);
}
</style>
