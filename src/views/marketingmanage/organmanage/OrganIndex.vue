<!--
 * @Author: your name
 * @Date: 2020-07-29 10:51:31
 * @LastEditTime: 2020-07-29 13:55:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankManage\src\views\marketingmanage\organmanage\OrganIndex.vue
--> 



<template>
  <div>
    <ui-form class="form-block" ref="ruleForm" :model="form" :rules="rules" label-width="120px">
      <ui-form-item label="机构动态标题" prop="organTitle">
        <ui-input v-model="form.organTitle"></ui-input>
      </ui-form-item>
      <ui-form-item label="发布时间" required>
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
          margin="0px 60px 0px 0px"
        ></Button>
        <Button @click.native="resetForm('ruleForm')" text="重置" backgroundColor="#9B7041"></Button>
      </ui-form-item>
    </ui-form>
    <ui-table :data="tableData" stripe v-if="showTable">
      <ui-table-column prop="order" label="序号" align="center" min-width="100px"></ui-table-column>
      <ui-table-column prop="organTitle" label="会议标题" align="center" min-width="200px"></ui-table-column>
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
            @click="goDelete(scope.row)"
            type="text"
            size="small"
          >删除</ui-button>
        </template>
      </ui-table-column>
    </ui-table>
    <div style="textAlign: center; marginTop: 35px" v-if="showTable">
      <Button text="新增" backgroundColor="#9B7041" @click.native="goTrainingIncrease"></Button>
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
        organTitle: [
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
          organTitle: '江南农商XXXX会议',
          releaseTime: '2020-09-09',
          operatorName: '张三',
          releaseType: '已发布',
        },
        {
          order: 2,
          organTitle: '江南农商XXXX会议',
          releaseTime: '2020-09-09',
          operatorName: '张三',
          releaseType: '已发布',
        },
        {
          order: 3,
          organTitle: '江南农商XXXX会议',
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
        path: '/marketingmanage/organmanage/organdetail',
        query: {
          detail: JSON.stringify(row),
        },
      })
    },
    goModify(row) {
      this.$router.push({
        path: '/marketingmanage/organmanage/organmodify',
        query: {
          detail: JSON.stringify(row),
        },
      })
    },
    goDelete(row) {
      this.$router.push({
        path: '/marketingmanage/organmanage/organdeleteconfirm',
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
    goTrainingIncrease() {
      this.$router.push('/marketingmanage/organmanage/organincrease')
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