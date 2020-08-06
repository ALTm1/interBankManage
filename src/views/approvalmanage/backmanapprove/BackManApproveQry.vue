<!--
 * @Author: your name
 * @Date: 2020-07-31 16:12:51
 * @LastEditTime: 2020-08-04 14:01:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankManage\src\views\approvalmanage\backmanageapprove\BackManageApproveIndex.vue
--> 



<template>
  <div class="wrap">
    <div class="content">
      <BorderHeader title="后管交易审批"></BorderHeader>
      <ui-table :data="backManApprovalTable">
        <ui-table-column label="请选择" width="80">
          <template slot-scope="scope">
            <ui-radio
              v-model="backManApprovalRadio"
              :label="scope.$index"
              @change="getCurrentBackManApprovalRow(scope.row)"
            >
              <i></i>
            </ui-radio>
          </template>
        </ui-table-column>
        <ui-table-column prop="serialNum" label="流水号" align="center" min-width="150px"></ui-table-column>
        <ui-table-column prop="submissionTime" label="提交时间" align="center" min-width="150px"></ui-table-column>
        <ui-table-column prop="operatorName" label="操作员姓名" align="center" min-width="150px"></ui-table-column>
        <ui-table-column prop="tradeName" label="交易名称" align="center" min-width="150px"></ui-table-column>
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
      backManApprovalTable: [
        {
          order: 1,
          serialNum: '141235888',
          submissionTime: '2020-09-09',
          operatorName: '张三',
          tradeName: '操作员新增',
          tradeState: '待审批',
        },
        {
          order: 2,
          serialNum: '141235888',
          submissionTime: '2020-09-09',
          operatorName: '张三',
          tradeName: '操作员新增',
          tradeState: '待审批',
        },
      ],
      backManApprovalRadio: '',
      choseBackManApprovalRow: {},
    }
  },
  methods: {
    goApprove() {
      this.$router.push('/backManapproverecord')
    },
    // 获取待审批选中行
    getCurrentBackManApprovalRow(row) {
      this.choseBackManApprovalRow = row
    },
  },
}
</script>

<style lang="css" scoped>
</style>