


<template>
  <div>
    <ui-form class="form-block" ref="ruleForm" :model="form" :rules="rules" label-width="100px">
      <ui-form-item label="发布格式" prop="releaseFormat">
        <ui-select v-model="form.releaseFormat" placeholder="请选择">
          <ui-option label="文本" value="shanghai"></ui-option>
          <ui-option label="图片" value="beijing"></ui-option>
        </ui-select>
      </ui-form-item>
      <ui-form-item label="报名截止日" required prop="endDate">
        <ui-date-picker
          type="date"
          placeholder="选择终止时间"
          v-model="form.endDate"
          style="width: 100%;"
        ></ui-date-picker>
      </ui-form-item>
      <ui-form-item label="会议标题" prop="meetingTitle">
        <ui-input v-model="form.meetingTitle"></ui-input>
      </ui-form-item>
      <ui-form-item label="发布对象" prop="releaseObj">
        <ui-select v-model="form.releaseObj" placeholder="请选择" multiple>
          <div v-for="item in form.releaseObjList" :key="item.label">
            <ui-option :label="item.label" :value="item.value"></ui-option>
          </div>
        </ui-select>
      </ui-form-item>
      <ui-form-item label="会议图片" prop="meetingPicture">
        <ui-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="form.fileList"
        >
          <Button text="点击上传" backgroundColor="#CE2848"></Button>
        </ui-upload>
      </ui-form-item>
      <ui-form-item label="会议内容" prop="meetingContent">
        <ui-input type="textarea" v-model="form.meetingContent"></ui-input>
      </ui-form-item>
      <!-- 按钮 -->
      <ui-form-item>
        <Button
          @click.native="submitForm('ruleForm')"
          text="修改"
          backgroundColor="#CE2848"
          margin="0px 60px 0px 0px"
        ></Button>
      </ui-form-item>
    </ui-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        releaseFormat: '',
        endDate: '',
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
        fileList: [
          { name: 'logo.png', url: require('@/assets/image/logo.png') },
        ],
        meetingContent: '',
      },
      rules: {
        releaseFormat: [
          { required: true, message: '请选择发布格式', trigger: 'change' },
        ],
        meetingTitle: [
          { required: true, message: '请输入会议标题', trigger: 'blur' },
        ],
        releaseObj: [
          { required: true, message: '请选择发布对象', trigger: 'change' },
        ],
        meetingContent: [
          { required: true, message: '请输入会议内容', trigger: 'blur' },
        ],
        endDate: [
          {
            type: 'date',
            required: true,
            message: '请选择时间',
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
            '/marketingmanage/meetingmanage/meetingmodifyconfirm'
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
.form-block {
  width: 600px;
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
