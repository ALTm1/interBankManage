<template>
  <!-- 产品查询页 -->
  <div class="files-add">
    <!-- label-width="150px" -->
    <div class="right-wrap">
      <ui-row>
        <div class="form">
          <ui-form ref="form" :rules="rules" :model="form" label-width="150px">
            <ui-row>
              <ui-col>
                <ui-form-item label="业务类型" prop="productType">
                  <ui-select v-model="form.productType" placeholder="请选择">
                    <ui-option
                      v-for="item in proTypeList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></ui-option>
                  </ui-select>
                </ui-form-item>
                <ui-form-item label="业务场景" prop="buissnessScene">
                  <ui-select v-model="form.buissnessScene" placeholder="请选择">
                    <ui-option
                      v-for="item in tradeDirectionList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></ui-option>
                  </ui-select>
                </ui-form-item>
                <ui-form-item label="文件标题" prop="filesTitle">
                  <ui-input-business v-model="form.filesTitle" placeholder="请输入文件标题"></ui-input-business>
                </ui-form-item>
                <ui-form-item label="文件内容" prop="filesContent">
                  <ui-input-business
                    style="display:inline-block;margin-right: 20px"
                    v-model="form.filesContent"
                    placeholder="请上传文件内容"
                  ></ui-input-business>
                  <ui-button class="operator-button" type="text" size="small">上传</ui-button>
                </ui-form-item>
              </ui-col>
            </ui-row>
            <ui-row class="btn">
              <ui-button type="primary" class="back-btn" @click="goBack">返回</ui-button>
              <ui-button type="primary" class="continue-next" @click=" clickSubmit('form')">提交</ui-button>
            </ui-row>
          </ui-form>
        </div>
      </ui-row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'filesAdd',
  computed: {},
  data() {
    return {
      form: {
        // 产品类型
        productType: '',
        // 业务场景
        buissnessScene: '',
        // 文件标题
        filesTitle: '',
        // 文件内容
        filesContent: '',
      },
      // 表单校验规则
      rules: {
        productType: [
          { required: true, message: '请选择产品类型', trigger: 'blur' },
        ],
        buissnessScene: [
          { required: true, message: '请选择 业务场景', trigger: 'blur' },
        ],
        filesTitle: [
          { required: true, message: '请输入文件标题', trigger: 'blur' },
        ],
        filesContent: [
          { required: true, message: '请输入文件内容', trigger: 'blur' },
        ],
      },
      // 业务类型数据
      businessTypeList: [
        {
          value: '1',
          label: '全部',
        },
        {
          value: '2',
          label: '本行',
        },
        {
          value: '3',
          label: '他行',
        },
      ],
      // 产品类型数据
      proTypeList: [
        {
          value: '1',
          label: '同业资金',
        },
        {
          value: '2',
          label: '债券业务',
        },
        {
          value: '3',
          label: '线上资金业务',
        },
        {
          value: '4',
          label: '同业投资',
        },
        {
          value: '5',
          label: '同业存单',
        },
        {
          value: '6',
          label: '票据业务',
        },
        {
          value: '7',
          label: '同业福费廷',
        },
        {
          value: '8',
          label: '团购产品',
        },
      ],
      // 单选按钮
      tableRadio: '',
      // 获取选中数据
      chosedData: [],
    }
  },
  methods: {
    // 返回按钮
    goBack() {
      this.$router.go(-1)
    },
    // 点击提交
    clickSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push('/filesAddConf')
        } else {
          return false
        }
      })
    },
    // 获取选中的数据
    getCurrentRow(row) {
      this.chosedData = row
    },
  },
}
</script>
<style lang="scss">
.files-add {
  .form {
    background: #fff;
    .ui-form {
      width: 50%;
      padding: 62px 20px;
      margin: 0 auto;
    }
  }
  .table {
    background: #fff;
  }
  .btnbg {
    margin-top: 0;
    background: #fff;
    padding: 50px 0 30px;
  }
  .resetTip {
    text-align: center;
    font-size: 14px;
    font-family: SimHei;
    font-weight: 400;
    color: #333;
  }
}
</style>
