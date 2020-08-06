


<template>
  <div class="wrap">
    <div class="content">
      <BorderHeader title="审批记录查询"></BorderHeader>
      <div class="form-wrap">
        <ui-form
          class="form-block clear"
          ref="ruleForm"
          :model="form"
          :rules="rules"
          label-width="100px"
        >
          <div class="float-left">
            <ui-form-item label="审批类型" prop="approvalType" required>
              <ui-select v-model="form.approvalType" placeholder="请选择审批类型">
                <ui-option label="机构认证审批" value="机构认证审批"></ui-option>
                <ui-option label="后管交易审批" value="后管交易审批"></ui-option>
              </ui-select>
            </ui-form-item>
          </div>
          <div class="float-right">
            <ui-form-item label="机构名称" prop="organName" required>
              <ui-input v-model="form.organName" placeholder="请输入机构名称"></ui-input>
            </ui-form-item>
          </div>
          <div class="float-left">
            <ui-form-item label="机构用户" prop="organUser" required>
              <ui-input v-model="form.organUser" placeholder="请输入机构用户"></ui-input>
            </ui-form-item>
          </div>
          <div class="float-right">
            <ui-form-item label="操作员姓名" prop="operatorName" required>
              <ui-input v-model="form.operatorName" placeholder="请输入操作员姓名"></ui-input>
            </ui-form-item>
          </div>
          <div class="float-left">
            <ui-form-item label="交易名称" prop="tradeName" required>
              <ui-input v-model="form.tradeName" placeholder="请输入交易名称"></ui-input>
            </ui-form-item>
          </div>
          <div class="float-right">
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
          </div>
        </ui-form>
        <div class="buttons">
          <Button
            @click.native="submitForm('ruleForm')"
            text="查询"
            backgroundColor="#CE2848"
            marginRight="100px"
          ></Button>
          <Button @click.native="resetForm('ruleForm')" text="重置" backgroundColor="#9B7041"></Button>
        </div>
      </div>
      <div class="table-wrap" v-if="showTable">
        <BorderHeader title="查询结果"></BorderHeader>
        <ui-table :data="tableData">
          <ui-table-column prop="serialNum" label="流水号" align="center" min-width="100px"></ui-table-column>
          <ui-table-column prop="approvalType" label="审批类型" align="center" min-width="200px"></ui-table-column>
          <ui-table-column prop="submissionTime" label="提交时间" align="center" min-width="100px"></ui-table-column>
          <ui-table-column prop="operatorName" label="操作员姓名" align="center" min-width="100px"></ui-table-column>
          <ui-table-column prop="tradeName" label="交易名称" align="center" min-width="100px"></ui-table-column>
          <ui-table-column prop="approvalDate" label="审批时间" align="center" min-width="100px"></ui-table-column>
          <ui-table-column label="操作" align="center" min-width="200px">
            <template slot-scope="scope">
              <ui-button
                class="operator-button"
                @click="goDetail(scope.row)"
                type="text"
                size="small"
              >详情</ui-button>
            </template>
          </ui-table-column>
        </ui-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        approvalType: '',
        organName: '',
        organUser: '',
        operatorName: '',
        tradeName: '',
        startDate: '',
        endDate: '',
      },
      rules: {
        approvalType: [
          { required: true, message: '请输入审批类型', trigger: 'blur' },
        ],
        organName: [
          { required: true, message: '请输入机构名称', trigger: 'blur' },
        ],
        organUser: [
          { required: true, message: '请输入机构用户', trigger: 'blur' },
        ],
        operatorName: [
          { required: true, message: '请输入操作员姓名', trigger: 'blur' },
        ],
        tradeName: [
          { required: true, message: '请输入交易名称', trigger: 'blur' },
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
            message: '请选择终止时间',
            trigger: 'change',
          },
        ],
      },
      showTable: false,
      tableData: [
        {
          serialNum: '1490987909',
          approvalType: '后管交易审批',
          submissionTime: '2020-09-09',
          operatorName: '张三',
          tradeName: '操作员新增',
          approvalDate: '2020-09-09',
        },
        {
          serialNum: '1490987909',
          approvalType: '后管交易审批',
          submissionTime: '2020-09-09',
          operatorName: '张三',
          tradeName: '操作员新增',
          approvalDate: '2020-09-09',
        },
      ],
    }
  },
  methods: {
    goDetail(row) {
      this.$router.push({
        path: '/approvalrecorddetail',
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
  },
}
</script>

<style lang="css" scoped>
.wrap {
  text-align: center;
}
.content {
  width: 100%;
}
.form-block {
  padding: 50px 0px 0px;
  width: 1200px;
  box-sizing: border-box;
  margin: 0 auto;
}

.table-wrap {
  background: #ffffff;
}

.start-date-item {
  margin-bottom: 22px;
}

.query-buttons {
  width: 100%;
  margin-top: 50px;
}
.query-buttons /deep/ .ui-form-item__content {
  margin-left: 0px !important;
}
</style>