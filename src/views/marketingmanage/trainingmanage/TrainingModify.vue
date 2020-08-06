<!--
 * @Author: your name
 * @Date: 2020-07-29 10:09:21
 * @LastEditTime: 2020-08-05 18:52:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankManage\src\views\marketingmanage\trainingmanage\TrainingModify.vue
--> 


<template>
  <div class="wrap">
    <BorderHeader title="培训修改录入页"></BorderHeader>
    <div class="form-wrap">
      <ui-form class="form-block" ref="ruleForm" :model="form" :rules="rules" label-width="100px">
        <ui-form-item label="培训标题" prop="trainingTitle">
          <ui-input v-model="form.trainingTitle" placeholder="请输入培训标题"></ui-input>
        </ui-form-item>
        <ui-form-item label="发布对象" prop="releaseObj">
          <ui-select v-model="form.releaseObj" placeholder="请选择" multiple>
            <div v-for="item in releaseObjList" :key="item.label">
              <ui-option :label="item.label" :value="item.value"></ui-option>
            </div>
          </ui-select>
        </ui-form-item>
        <ui-form-item label="培训内容">
          <ui-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="form.trainingContent"
            :auto-upload="false"
            :on-change="handleUploadChange"
          >
            <span class="upload-text">点击上传</span>
          </ui-upload>
        </ui-form-item>
      </ui-form>
      <div class="buttons">
        <Button text="修改" backgroundColor="#9B7041" @click.native="submitForm('ruleForm')"></Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      releaseObjList: [
        {
          label: '大众会员',
          value: '大众会员',
        },
        {
          label: '机构会员',
          value: '机构会员',
        },
        {
          label: '联盟会员',
          value: '联盟会员',
        },
        {
          label: '本行会员',
          value: '本行会员',
        },
      ],
      form: {
        trainingTitle: '',
        releaseObj: [],
        trainingContent: [
          { name: 'logo.png', url: require('@/assets/image/logo.png') },
        ],
      },
      rules: {
        trainingTitle: [
          { required: true, message: '请输入培训标题', trigger: 'blur' },
        ],
        releaseObj: [
          {
            type: 'array',
            required: true,
            message: '请选择发布对象',
            trigger: 'change',
          },
        ],
      },
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList)
      this.form.trainingContent = fileList
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      )
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    handleUploadChange(file, fileList) {
      this.form.trainingContent = fileList
    },

    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        console.log(this.form)
        if (valid) {
          this.$router.push({
            path: '/trainingmodifyconfirm',
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
  width: 600px;
  margin: 0 auto;
  padding: 40px 0px 0px;
  box-sizing: border-box;
}
</style>