<!--
 * @Author: your name
 * @Date: 2020-07-28 16:35:32
 * @LastEditTime: 2020-08-05 18:37:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankManage\src\views\marketingmanage\meetingmanage\MeetingModifyConfirm.vue
--> 


<template>
  <div class="wrap">
    <BorderHeader title="会议修改确认页"></BorderHeader>
    <div class="content-wrap clear">
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
  created() {
    var displayInfoArrTemp = JSON.parse(this.$route.query.form)
    // 报名截止日期
    var endDate = new Date(displayInfoArrTemp.endDate).Format('yyyy-MM-dd')
    // 会议图片
    var fileList = ''
    for (var i = 0; i < displayInfoArrTemp.fileList.length; i++) {
      fileList = fileList + displayInfoArrTemp.fileList[i].name + ' '
    }
    this.displayInfoArr = [
      {
        title: '发布格式',
        content: displayInfoArrTemp.releaseFormat,
      },
      {
        title: '报名截止日期',
        content: endDate,
      },
      {
        title: '会议标题',
        content: displayInfoArrTemp.meetingTitle,
      },
      {
        title: '发布对象',
        content: displayInfoArrTemp.releaseObj.join(','),
      },
      {
        title: '会议图片',
        content: fileList,
      },
      {
        title: '会议内容',
        content: displayInfoArrTemp.meetingContent,
      },
    ]
  },
  methods: {
    goResult() {
      this.$router.push('/mettingdeletesucc')
    },
  },
}
</script>

<style lang="css" scoped>
.wrap {
  background: #ffffff;
}
</style>