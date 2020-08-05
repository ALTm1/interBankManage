<!--
 * @Author: your name
 * @Date: 2020-07-29 11:24:32
 * @LastEditTime: 2020-08-05 10:35:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankManage\src\views\marketingmanage\organmanage\OrganDetail.vue
--> 


<template>
  <div class="wrap">
    <BorderHeader title="机构动态详情"></BorderHeader>
    <div class="content-wrap clear">
      <div
        :class="[index%2==0?'float-left':'float-right']"
        v-for="(item,index) in displayInfoArr"
        :key="item.title"
      >
        <DisplayItem :title="item.title" :content="item.content"></DisplayItem>
      </div>
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
}
</script>

<style lang="css" scoped>
.wrap {
  margin: 0 auto;
  background: #ffffff;
}
</style>