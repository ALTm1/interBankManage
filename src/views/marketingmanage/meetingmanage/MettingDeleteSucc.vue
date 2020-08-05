<!--
 * @Author: your name
 * @Date: 2020-07-28 18:20:49
 * @LastEditTime: 2020-08-05 09:34:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankManage\src\views\marketingmanage\meetingmanage\MettingDeleteSucc.vue
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
    return {
      succLogo: require('@/assets/image/logo.png'),
    }
  },
  methods: {
    // 点击完成
    clickFinish() {
      this.$router.push('/marketingmanage/meetingmanage/meetingindex')
    },
    // 返回按钮
    goBack() {
      this.$router.go(-1)
    },
  },
}
</script>

<style lang="css" scoped>
.wrap {
  width: 100%;
  margin: 0 auto;
  text-align: center;
  background: #ffffff;
}
.succ-logo {
  width: 257px;
  height: 158px;
  margin-bottom: 25px;
}
.succ-tips-one {
  font-size: 16px;
  font-family: SimHei;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.succ-tips-two {
  font-size: 12px;
  font-family: SimHei;
  font-weight: bold;
  margin-top: 17px;
}
</style>