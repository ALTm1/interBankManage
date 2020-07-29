<!--
 * @Author: your name
 * @Date: 2020-07-28 17:01:34
 * @LastEditTime: 2020-07-28 18:19:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankManage\src\views\marketingmanage\meetingmanage\MeetingDetail.vue
--> 


<template>
  <div class="wrap">
    <!-- 会议信息 -->
    <div v-for="item in meetingInfoArr" :key="item.title">
      <DisplayItem :title="item.title" :content="item.content"></DisplayItem>
    </div>
    <!-- 报名参会列表 -->
    <div>
      <ui-table :data="tableData" stripe>
        <ui-table-column prop="order" label="序号" align="center" min-width="100px"></ui-table-column>
        <ui-table-column prop="name" label="姓名" align="center" min-width="100px"></ui-table-column>
        <ui-table-column prop="contactPhone" label="联系电话" align="center" min-width="200px"></ui-table-column>
        <ui-table-column prop="subOrgan" label="所属机构" align="center" min-width="100px"></ui-table-column>
      </ui-table>
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
      tableData: [
        {
          order: 1,
          name: '张三',
          contactPhone: 13890786690,
          subOrgan: '江南农商',
        },
        {
          order: 2,
          name: '张三',
          contactPhone: 13890786690,
          subOrgan: '江南农商',
        },
        {
          order: 3,
          name: '张三',
          contactPhone: 13890786690,
          subOrgan: '江南农商',
        },
      ],
    }
  },
}
</script>

<style lang="css" scoped>
.wrap {
  width: 600px;
  margin: 0 auto;
}
</style>