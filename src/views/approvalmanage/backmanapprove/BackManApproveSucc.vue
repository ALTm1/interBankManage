<!--
 * @Author: your name
 * @Date: 2020-07-31 17:05:44
 * @LastEditTime: 2020-08-05 15:25:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankManage\src\views\approvalmanage\backmanapprove\BackManApproveSucc.vue
--> 



<template>
  <div class="wrap">
    <BorderHeader title="结果页"></BorderHeader>

    <result :status="true" :tadeSuccess="'交易成功'" :batch="'1234567890123'" @click="clickFinish"></result>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    // 点击完成
    clickFinish() {
      this.$router.push('/approvalmanage/backmanapprove/backmanapproveindex')
    },
    // 返回按钮
    goBack() {
      this.$router.go(-1)
    },
  },
}
</script>

<style lang="css" scoped>

</style>