<!--
 * @Author: your name
 * @Date: 2020-08-06 10:37:33
 * @LastEditTime: 2020-08-06 13:40:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankManage\src\views\marketingmanage\marketdismanage\ProductModifyConfirm.vue
-->


<template>
  <div class="wrap">
    <div class="content-wrap">
      <div class="clear">
        <div
          :class="[index%2==0?'float-left':'float-right']"
          v-for="(item,index) in displayInfoArr"
          :key="item.title"
        >
          <DisplayItem :title="item.title" :content="item.content"></DisplayItem>
        </div>
      </div>
      <div class="buttons">
        <Button text="确定" backgroundColor="#CE2848" @click.native="returnIndex"></Button>
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
          title: '产品一级分类',
          content: '同业存款',
        },
        {
          title: '产品二级分类',
          content: '线上资金',
        },
        {
          title: '交易方向',
          content: '买入',
        },
        {
          title: '产品名称',
          content: 'XXXXXXX',
        },
        {
          title: '机构全称',
          content: 'XXXXXXX',
        },
        {
          title: '利率',
          content: '4.5%',
        },
        {
          title: '期限',
          content: '360天',
        },
        {
          title: '金额',
          content: '3000',
        },
      ],
    }
  },
  created() {
    var displayInfoArrTemp = JSON.parse(this.$route.query.form)
    debugger
    this.displayInfoArr = [
      {
        title: '产品一级分类',
        content: displayInfoArrTemp.proLevelOne,
      },
      {
        title: '产品二级分类',
        content: displayInfoArrTemp.proLevelTwo,
      },
      {
        title: '交易方向',
        content: displayInfoArrTemp.tradeDirec,
      },
      {
        title: '产品名称',
        content: displayInfoArrTemp.proName,
      },
      {
        title: '机构全称',
        content: displayInfoArrTemp.organName,
      },
      {
        title: '利率',
        content: displayInfoArrTemp.proRate,
      },
      {
        title: '期限',
        content: displayInfoArrTemp.timeLimit,
      },
      {
        title: '金额',
        content: displayInfoArrTemp.money,
      },
    ]
  },
  methods: {
    returnIndex() {
      this.$router.push('/prorecommend')
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