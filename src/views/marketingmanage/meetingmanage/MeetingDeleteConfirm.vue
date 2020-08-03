<!--
 * @Author: your name
 * @Date: 2020-07-28 17:40:25
 * @LastEditTime: 2020-08-03 17:31:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankManage\src\views\marketingmanage\meetingmanage\MeetingDelete.vue
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
      <Button text="删除" backgroundColor="#9B7041" @click.native="goResult"></Button>
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
    goResult() {
      this.$router.push('/marketingmanage/meetingmanage/mettingdeletesucc')
    },
  },
}
</script>

<style lang="css" scoped>
.wrap {
  margin: 0 auto;
  background: #ffffff;
}
.content {
  padding: 40px;
}
</style>