<!--
 * @Author: your name
 * @Date: 2020-07-29 10:16:02
 * @LastEditTime: 2020-07-29 10:16:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankManage\src\views\marketingmanage\trainingmanage\TrainingModifyConfirm.vue
--> 



<template>
  <div class="wrap">
    <div v-for="item in displayInfoArr" :key="item.title">
      <DisplayItem :title="item.title" :content="item.content"></DisplayItem>
    </div>
    <div style="textAlign: center; marginTop: 100px">
      <Button text="确认" backgroundColor="#CE2848" @click.native="goTrainingIndex()"></Button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayInfoArr: [
        {
          title: '培训标题',
          content: 'XXXX第一次培训',
        },
        {
          title: '发布对象',
          content: '所有人',
        },
        {
          title: '培训内容',
          content: '培训.mp4',
        },
      ],
    }
  },
  methods: {
    goTrainingIndex() {
      this.$router.push('/marketingmanage/trainingmanage/trainingindex')
    },
  },
}
</script>

<style lang="css" scoped>
.wrap {
  width: 500px;
  margin: 0 auto;
}
</style>