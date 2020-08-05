



<template>
  <div class="wrap">
    <BorderHeader title="培训新增录入页"></BorderHeader>
    <div class="form-wrap">
      <ui-form class="form-block" ref="ruleForm" :model="form" :rules="rules" label-width="100px">
        <ui-form-item label="培训标题" prop="trainingTitle">
          <ui-input v-model="form.trainingTitle" placeholder="请输入培训标题"></ui-input>
        </ui-form-item>
        <ui-form-item label="发布对象" prop="releaseObj">
          <ui-select v-model="form.releaseObj" placeholder="请选择" multiple>
            <div v-for="item in form.releaseObjList" :key="item.label">
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
        trainingTitle: '',
        releaseObj: [],
        releaseObjList: [
          {
            label: '所有人',
            value: '所有人',
          },
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
        trainingContent: [],
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
          this.$router.push(
            '/marketingmanage/trainingmanage/trainingincreaseconfirm'
          )
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
  text-align: center;
}
.form-block{
  display: inline-block;
}
.wrap /deep/ .upload-demo{
  text-align: left;
}
</style>