<!--
 * @Author: your name
 * @Date: 2020-07-29 13:50:33
 * @LastEditTime: 2020-07-29 13:51:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankManage\src\views\marketingmanage\organmanage\OrganIncreaseConfirm.vue
--> 



<template>
  <div class="wrap">
    <div v-for="item in displayInfoArr" :key="item.title">
      <DisplayItem :title="item.title" :content="item.content"></DisplayItem>
    </div>
    <div style="textAlign: center; marginTop: 100px">
      <Button text="确认" backgroundColor="#CE2848" @click.native="goOrganIndex()"></Button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayInfoArr: [
        {
          title: '机构动态标题',
          content: 'XXXXXXXXXXX',
        },
        {
          title: '机构动态内容',
          content: '动态.pdf',
        },
      ],
    }
  },
  methods: {
    goOrganIndex() {
      this.$router.push('/marketingmanage/organmanage/organindex')
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