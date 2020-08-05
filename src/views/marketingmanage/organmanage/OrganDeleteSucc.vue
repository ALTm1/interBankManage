<!--
 * @Author: your name
 * @Date: 2020-07-29 13:44:00
 * @LastEditTime: 2020-08-05 15:26:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankManage\src\views\marketingmanage\organmanage\OrganDeleteSucc.vue
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
      this.$router.push('/marketingmanage/organmanage/organindex')
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