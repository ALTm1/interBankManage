<!--
 * @Author: your name
 * @Date: 2020-07-29 09:57:39
 * @LastEditTime: 2020-08-04 15:28:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankManage\src\views\marketingmanage\trainingmanage\TrainingIncreaseConfirm.vue
--> 


<template>
  <div class="wrap">
    <BorderHeader title="培训新增确认页"></BorderHeader>
    <div class="clear content">
      <div
        :class="[index%2==0?'float-left':'float-right']"
        v-for="(item,index) in displayInfoArr"
        :key="item.title"
      >
        <DisplayItem :title="item.title" :content="item.content"></DisplayItem>
      </div>
    </div>
    <div class="buttons">
      <Button text="确认" backgroundColor="#CE2848" @click.native="goResult()"></Button>
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
    goResult() {
      this.$router.push('/marketingmanage/trainingmanage/trainingdeletesucc')
    },
  },
}
</script>

<style lang="css" scoped>
.wrap {
  background: #ffffff;
}
.content {
  padding: 40px 0px 0px;
}
</style>