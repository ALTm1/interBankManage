<!--
 * @Author: your name
 * @Date: 2020-07-29 10:19:30
 * @LastEditTime: 2020-07-29 10:24:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankManage\src\views\marketingmanage\trainingmanage\TrainingDetail.vue
--> 

<template>
  <div class="wrap">
    <div v-for="item in displayInfoArr" :key="item.title">
      <DisplayItem :title="item.title" :content="item.content"></DisplayItem>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayInfoArr: [
        {
          title: '操作员姓名',
          content: '张三',
        },
        {
          title: '发布时间',
          content: '2020-09-09',
        },
        {
          title: '培训标题',
          content: 'XXXX第一次会议',
        },
        {
          title: '发布状态',
          content: '已发布',
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
}
</script>

<style lang="css" scoped>
.wrap {
  width: 500px;
  margin: 0 auto;
}
</style>