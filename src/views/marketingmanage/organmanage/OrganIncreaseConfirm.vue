<!--
 * @Author: your name
 * @Date: 2020-07-29 13:50:33
 * @LastEditTime: 2020-08-05 10:47:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankManage\src\views\marketingmanage\organmanage\OrganIncreaseConfirm.vue
--> 



<template>
  <div class="wrap">
    <BorderHeader title="机构动态新增确认页"></BorderHeader>
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
    goResult() {
      this.$router.push('/organdeletesucc')
    },
  },
}
</script>

<style lang="css" scoped>
.wrap {
  margin: 0 auto;
  background: #ffffff;
}
</style>