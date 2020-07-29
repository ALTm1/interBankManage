<!--
 * @Author: your name
 * @Date: 2020-07-29 10:32:37
 * @LastEditTime: 2020-07-29 13:45:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankManage\src\views\marketingmanage\trainingmanage\TrainingDeleteSucc.vue
--> 


<template>
  <div class="wrap">
    <img class="succ-logo" :src="succLogo" alt="succLogo" />
    <div class="succ-tips-one">
      <span>交易已提交,请等待审核</span>
    </div>
    <div class="succ-tips-two">
      <span>交易流水号：124122331434</span>
    </div>
    <div class="buttons">
      <Button text="完成" backgroundColor="#CE2848" margin="0 40px" @click.native="returnLast()"></Button>
      <Button text="返回" backgroundColor="#9B7041" @click.native="returnLast()"></Button>
    </div>
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
    returnLast() {
      this.$router.push('/marketingmanage/organmanage/organindex')
    },
  },
}
</script>

<style lang="css" scoped>
.wrap {
  width: 600px;
  margin: 0 auto;
  text-align: center;
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
.buttons {
  margin-top: 40px;
}
</style>