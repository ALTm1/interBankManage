<!--
 * @Author: your name
 * @Date: 2020-07-29 13:36:30
 * @LastEditTime: 2020-07-29 13:41:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankManage\src\views\marketingmanage\organmanage\OrganDeleteConfirm.vue
--> 


<template>
  <div class="wrap">
    <div v-for="item in displayInfoArr" :key="item.title">
      <DisplayItem :title="item.title" :content="item.content"></DisplayItem>
    </div>
    <div style="textAlign: center; marginTop: 100px">
      <Button text="删除" backgroundColor="#CE2848" @click.native="goDeleteSucc()"></Button>
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
          title: '机构动态标题',
          content: 'XXXX第一次会议',
        },
        {
          title: '发布状态',
          content: '已发布',
        },
        {
          title: '机构动态内容',
          content: '培训.mp4',
        },
      ],
    }
  },
  methods: {
    goDeleteSucc() {
      this.$router.push('/marketingmanage/organmanage/organdeletesucc')
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