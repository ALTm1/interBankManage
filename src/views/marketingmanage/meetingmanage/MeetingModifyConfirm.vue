<!--
 * @Author: your name
 * @Date: 2020-07-28 16:35:32
 * @LastEditTime: 2020-08-03 16:53:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankManage\src\views\marketingmanage\meetingmanage\MeetingModifyConfirm.vue
--> 


<template>
  <div class="wrap">
    <BorderHeader title="详情页"></BorderHeader>
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
  methods: {
    goResult() {
      this.$router.push('/marketingmanage/meetingmanage/mettingdeletesucc')
    },
  },
}
</script>

<style lang="css" scoped>
.wrap {
  background: #ffffff;
}
.content {
  padding: 40px;
}
.buttons {
  text-align: center;
  padding-bottom: 50px;
}
</style>