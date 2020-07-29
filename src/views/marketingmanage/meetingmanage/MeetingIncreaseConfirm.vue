<!--
 * @Author: your name
 * @Date: 2020-07-28 15:28:41
 * @LastEditTime: 2020-07-28 16:20:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankManage\src\views\marketingmanage\meetingmanage\MeetingIncreaseConfirm.vue
--> 

<template>
  <div class="wrap">
    <div v-for="item in displayInfoArr" :key="item.title">
      <DisplayItem :title="item.title" :content="item.content"></DisplayItem>
    </div>
    <div style="textAlign: center">
      <Button text="确认" backgroundColor="#CE2848"></Button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayInfoArr: [
        {
          title: '发布格式',
          content: '图文',
        },
        {
          title: '报名截止日期',
          content: '2020-09-09',
        },
        {
          title: '会议标题',
          content: 'XXXX第一次会议',
        },
        {
          title: '发布对象',
          content: '所有人',
        },
        {
          title: '会议图片',
          content: 'logo.png',
        },
        {
          title: '会议内容',
          content: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
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