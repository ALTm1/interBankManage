<!--
 * @Author: your name
 * @Date: 2020-07-28 09:04:21
 * @LastEditTime: 2020-07-31 17:15:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankManage\src\views\marketingmanage\meetingmanage\MeetingIndex.vue
--> 


<template>
  <div class="pro-query">
    <ui-form class="form-block" ref="ruleForm" :model="form" :rules="rules" label-width="100px">
      <ui-form-item label="会议标题" prop="meetingTitle">
        <ui-input v-model="form.meetingTitle"></ui-input>
      </ui-form-item>
      <ui-form-item label="活动时间" required>
        <ui-form-item prop="startDate">
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
    <ui-table :data="tableData" stripe v-if="showTable">
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
    <div style="textAlign: center; marginTop: 35px" v-if="showTable">
      <Button text="新增" backgroundColor="#9B7041" @click.native="goMeetingIncrease"></Button>
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
            message: '请选择日期',
            trigger: 'change',
          },
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
        path: '/marketingmanage/meetingmanage/meetingdetail',
        query: {
          detail: JSON.stringify(row),
        },
      })
    },
    goModify(row) {
      this.$router.push({
        path: '/marketingmanage/meetingmanage/meetingmodify',
        query: {
          detail: JSON.stringify(row),
        },
      })
    },

    goRepeal(row) {
      this.$router.push({
        path: '/marketingmanage/meetingmanage/meetingrepealconfirm',
        query: {
          detail: JSON.stringify(row),
        },
      })
    },
    goDelete(row) {
      this.$router.push({
        path: '/marketingmanage/meetingmanage/meetingdeleteconfirm',
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
      this.$router.push('/marketingmanage/meetingmanage/meetingincrease')
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