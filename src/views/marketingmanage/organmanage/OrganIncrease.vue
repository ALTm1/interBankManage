<!--
 * @Author: your name
 * @Date: 2020-07-29 13:46:44
 * @LastEditTime: 2020-08-05 10:23:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankManage\src\views\marketingmanage\organmanage\OrganIncrease.vue
--> 



<template>
  <div class="wrap">
    <BorderHeader title="机构动态新增录入页"></BorderHeader>
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
          >
            <span class="upload-text">点击上传</span>
          </ui-upload>
        </ui-form-item>
      </ui-form>
      <div class="buttons">
        <Button text="新增" backgroundColor="#9B7041" @click.native="submitForm('ruleForm')"></Button>
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
        organContent: [],
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
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push('/organincreaseconfirm')
        } else {
          return false
        }
      })
    },
  },
}
</script>

<style lang="css" scoped>
/* form表单 */
.form-block {
  width: 600px;
  padding: 40px 0px 0px;
  margin: 0 auto;
}
</style>