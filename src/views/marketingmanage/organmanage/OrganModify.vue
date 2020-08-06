<!--
 * @Author: your name
 * @Date: 2020-07-29 13:20:59
 * @LastEditTime: 2020-08-06 09:28:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankManage\src\views\marketingmanage\organmanage\OrganModify.vue
--> 




<template>
  <div class="wrap">
    <BorderHeader title="机构动态修改录入页"></BorderHeader>
    <div class="form-wrap">
      <ui-form class="form-block" ref="ruleForm" :model="form" :rules="rules" label-width="auto">
        <ui-form-item label="机构动态标题" prop="organTitle">
          <ui-input v-model="form.organTitle" placeholder="请输入机构动态标题"></ui-input>
        </ui-form-item>

        <ui-form-item label="机构动态内容">
          <ui-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="form.organContent"
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
      form: {
        organTitle: '',
        organContent: [
          { name: 'logo.png', url: require('@/assets/image/logo.png') },
        ],
      },
      rules: {
        organTitle: [
          { required: true, message: '请输入机构动态标题', trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList)
      this.form.organContent = fileList
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
      this.form.organContent = fileList
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.form)
          this.$router.push({
            path: '/organmodifyconfirm',
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
}
.operator-button {
  font-size: 14px;
  font-family: SimHei;
  font-weight: 400;
  text-decoration: underline;
  color: rgba(5, 141, 215, 1);
}
</style>