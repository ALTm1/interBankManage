


<template>
  <div class="wrap">
    <BorderHeader title="会议管理"></BorderHeader>
    <div class="form-wrap">
      <ui-form class="form-block" ref="ruleForm" :model="form" :rules="rules" label-width="auto">
        <ui-form-item label="会议标题" prop="meetingTitle">
          <ui-input v-model="form.meetingTitle" placeholder="请输入会议标题"></ui-input>
        </ui-form-item>
        <ui-form-item label="活动时间" required>
          <ui-form-item prop="startDate" class="start-date-item">
            <ui-date-picker
              type="date"
              placeholder="选择起始日期"
              v-model="form.startDate"
              style="width: 100%;"
            ></ui-date-picker>
          </ui-form-item>
          <ui-form-item prop="endDate">
            <ui-date-picker
              type="date"
              placeholder="选择终止时间"
              v-model="form.endDate"
              style="width: 100%;"
            ></ui-date-picker>
          </ui-form-item>
        </ui-form-item>
        <ui-form-item>
          <Button
            @click.native="submitForm('ruleForm')"
            text="查询"
            backgroundColor="#CE2848"
            marginRight="100px"
          ></Button>
          <Button @click.native="resetForm('ruleForm')" text="重置" backgroundColor="#9B7041"></Button>
        </ui-form-item>
      </ui-form>
    </div>
    <div class="table-wrap" v-if="showTable">
      <BorderHeader title="查询结果"></BorderHeader>
      <ui-table :data="tableData">
        <ui-table-column prop="order" label="序号" align="center" min-width="100px"></ui-table-column>
        <ui-table-column prop="meetingTitle" label="会议标题" align="center" min-width="200px"></ui-table-column>
        <ui-table-column prop="releaseTime" label="发布时间" align="center" min-width="100px"></ui-table-column>
        <ui-table-column prop="operatorName" label="操作员姓名" align="center" min-width="100px"></ui-table-column>
        <ui-table-column prop="releaseType" label="发布状态" align="center" min-width="100px"></ui-table-column>
        <ui-table-column label="操作" align="center" min-width="200px">
          <template slot-scope="scope">
            <ui-button
              class="operator-button"
              @click="goDetail(scope.row)"
              type="text"
              size="small"
            >详情</ui-button>
            <ui-button
              class="operator-button"
              @click="goModify(scope.row)"
              type="text"
              size="small"
            >修改</ui-button>
            <ui-button
              class="operator-button"
              @click="goRepeal(scope.row)"
              type="text"
              size="small"
            >撤销</ui-button>
            <ui-button
              class="operator-button"
              @click="goDelete(scope.row)"
              type="text"
              size="small"
            >删除</ui-button>
          </template>
        </ui-table-column>
      </ui-table>
      <div class="buttons" v-if="showTable">
        <Button text="新增" backgroundColor="#9B7041" @click.native="goMeetingIncrease"></Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        proType: '',
        startDate: '',
        endDate: '',
      },
      rules: {
        meetingTitle: [
          { required: true, message: '请输入会议标题', trigger: 'blur' },
        ],
        startDate: [
          {
            type: 'date',
            required: true,
            message: '请选择开始日期',
            trigger: 'change',
          },
        ],
        endDate: [
          {
            type: 'date',
            required: true,
            message: '请选择终止日期',
            trigger: 'change',
          },
        ],
      },
      showTable: false,
      tableData: [
        {
          order: 1,
          meetingTitle: '江南农商XXXX会议',
          releaseTime: '2020-09-09',
          operatorName: '张三',
          releaseType: '已发布',
        },
        {
          order: 2,
          meetingTitle: '江南农商XXXX会议',
          releaseTime: '2020-09-09',
          operatorName: '张三',
          releaseType: '已发布',
        },
        {
          order: 3,
          meetingTitle: '江南农商XXXX会议',
          releaseTime: '2020-09-09',
          operatorName: '张三',
          releaseType: '已发布',
        },
      ],
    }
  },
  methods: {
    goDetail(row) {
      this.$router.push({
        path: '/meetingdetail',
        query: {
          detail: JSON.stringify(row),
        },
      })
    },
    goModify(row) {
      this.$router.push({
        path: '/meetingmodify',
        query: {
          detail: JSON.stringify(row),
        },
      })
    },

    goRepeal(row) {
      this.$router.push({
        path: '/meetingrepealconfirm',
        query: {
          detail: JSON.stringify(row),
        },
      })
    },
    goDelete(row) {
      this.$router.push({
        path: '/meetingdeleteconfirm',
        query: {
          detail: JSON.stringify(row),
        },
      })
    },

    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.showTable = false
        } else {
          this.showTable = true
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    goMeetingIncrease() {
      this.$router.push('/meetingincrease')
    },
  },
}
</script>

<style lang="css" scoped>
/* 表单 */
.form-block {
  width: 600px;
  padding: 50px;
  box-sizing: border-box;
  margin: 0 auto;
}
.start-date-item {
  margin-bottom: 22px;
}
</style>