<!--
 * @Author: your name
 * @Date: 2020-07-28 17:40:25
 * @LastEditTime: 2020-07-28 18:42:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankManage\src\views\marketingmanage\meetingmanage\MeetingDelete.vue
--> 

<template>
  <div class="wrap">
    <div v-for="item in meetingInfoArr" :key="item.title">
      <DisplayItem :title="item.title" :content="item.content"></DisplayItem>
    </div>
    <div style="textAlign: center; marginTop: 35px">
      <Button text="删除" backgroundColor="#9B7041" @click.native="goMeetingDeleteSucc"></Button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      meetingInfoArr: [
        {
          title: '操作员姓名',
          content: '张三',
        },
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
          title: '发布状态',
          content: '已发布',
        },
        {
          title: '发布对象',
          content: '所有人',
        },
        {
          title: '发布时间',
          content: '2020-09-09',
        },
        {
          title: '会议图片',
          content: 'logo.png',
        },
        {
          title: '会议内容',
          content: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        },
      ],
    }
  },
  methods: {
    goMeetingDeleteSucc() {
      this.$router.push('/marketingmanage/meetingmanage/mettingdeletesucc')
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