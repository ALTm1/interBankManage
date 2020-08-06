<!--
 * @Author: your name
 * @Date: 2020-07-31 10:40:47
 * @LastEditTime: 2020-08-04 13:58:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankManage\src\views\approvalmanage\accreditedinstitution\accreditedinstitution.vue
--> 

<template>
  <div class="wrap">
    <div class="content">
      <BorderHeader title="机构认证审批"></BorderHeader>
      <ui-table :data="approvalTable">
        <ui-table-column label="请选择" width="80">
          <template slot-scope="scope">
            <ui-radio
              v-model="approvalRadio"
              :label="scope.$index"
              @change="getCurrentApprovalRow(scope.row)"
            >
              <i></i>
            </ui-radio>
          </template>
        </ui-table-column>
        <ui-table-column prop="serialNum" label="流水号" align="center" min-width="150px"></ui-table-column>
        <ui-table-column prop="submissionTime" label="提交时间" align="center" min-width="150px"></ui-table-column>
        <ui-table-column prop="userName" label="用户姓名" align="center" min-width="150px"></ui-table-column>
        <ui-table-column prop="organName" label="机构名称" align="center" min-width="150px"></ui-table-column>
        <ui-table-column prop="tradeState" label="交易状态" align="center" min-width="150px"></ui-table-column>
        <ui-table-column label="操作" align="center" min-width="200px">
          <template slot-scope="scope">
            <ui-button
              class="operator-button"
              @click="goApprove(scope.row)"
              type="text"
              size="small"
            >审批</ui-button>
          </template>
        </ui-table-column>
      </ui-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      approvalTable: [
        {
          order: 1,
          serialNum: '141235888',
          submissionTime: '2020-09-09',
          userName: '张三',
          organName: '江南农商银行',
          tradeState: '待审批',
        },
        {
          order: 2,
          serialNum: '141235888',
          submissionTime: '2020-09-09',
          userName: '张三',
          organName: '江南农商银行',
          tradeState: '待审批',
        },
      ],
      approvalRadio: '',
      choseApprovalRow: {},
    }
  },
  methods: {
    goApprove() {
      this.$router.push('/organapproverecord')
    },
    // 获取待审批选中行
    getCurrentApprovalRow(row) {
      this.choseApprovalRow = row
    },
  },
}
</script>

<style lang="css" scoped>
</style>