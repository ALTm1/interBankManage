<!--
 * @Author: your name
 * @Date: 2020-07-31 16:12:51
 * @LastEditTime: 2020-07-31 16:49:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankManage\src\views\approvalmanage\backmanageapprove\BackManageApproveIndex.vue
--> 



<template>
  <div class="wrap">
    <div class="content">
      <ui-table :data="trainTable">
        <ui-table-column prop="order" label="请选择" align="center" min-width="150px">
          <template slot-scope="scope">
            <ui-radio v-model="trainRadio" :label="scope.row.order"></ui-radio>
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
      trainTable: [
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
      trainRadio: '',
    }
  },
  methods: {
    goApprove() {
      this.$router.push('/approvalmanage/backmanapprove/backManapproverecord')
    },
  },
}
</script>

<style lang="css" scoped>
</style>