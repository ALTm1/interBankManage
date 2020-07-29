<!--
 * @Author: your name
 * @Date: 2020-07-29 13:46:44
 * @LastEditTime: 2020-07-29 13:54:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankManage\src\views\marketingmanage\organmanage\OrganIncrease.vue
--> 



<template>
  <div>
    <ui-form class="form-block" ref="ruleForm" :model="form" :rules="rules" label-width="150px">
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
        >
          <Button text="点击上传" backgroundColor="#CE2848"></Button>
        </ui-upload>
      </ui-form-item>
    </ui-form>
    <div style="textAlign: center; marginTop: 100px">
      <Button text="新增" backgroundColor="#9B7041" @click.native="submitForm('ruleForm')"></Button>
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
          this.$router.push('/marketingmanage/organmanage/organincreaseconfirm')
        } else {
          return false
        }
      })
    },
  },
}
</script>

<style lang="css" scoped>
.form-block {
  width: 600px;
  margin: 0 auto;
}
</style>