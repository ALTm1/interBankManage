<!--
 * @Author: your name
 * @Date: 2020-07-30 19:52:15
 * @LastEditTime: 2020-07-30 20:00:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankManage\src\views\marketingmanage\marketdismanage\DynamicZone.vue
--> 

<template>
  <div class="wrap">
    <div v-for="item in displayInfoArr" :key="item.title">
      <DisplayItem :title="item.title" :content="item.content"></DisplayItem>
      <span class="choose-text">选择</span>
    </div>
    <div style="text-align: center">
      <Button text="提交" backgroundColor="#9B7041"></Button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayInfoArr: [
        {
          title: '推送会议',
          content: '会议标题1',
        },
        {
          title: '推送培训',
          content: '培训标题1',
        },
        {
          title: '推送机构动态',
          content: '机构动态标题1',
        },
      ],
    }
  },
}
</script>

<style lang="css" scoped>
.wrap {
  width: 550px;
  margin: 0 auto;
}
.choose-text {
  font-size: 14px;
  font-family: SimHei;
  font-weight: 400;
  text-decoration: underline;
  color: rgba(5, 141, 215, 1);
  margin-left: 20px;
}
</style>