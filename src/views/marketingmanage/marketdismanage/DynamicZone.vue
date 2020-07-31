<!--
 * @Author: your name
 * @Date: 2020-07-30 19:52:15
 * @LastEditTime: 2020-07-31 09:29:55
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
    <!-- <ui-dialog title="会议列表" center :visible.sync="meetingDialog">
      <ui-table :data="tableData" v-if="showTable">
        <ui-table-column prop="order" label="序号" align="center" min-width="100px"></ui-table-column>
        <ui-table-column prop="proLevelOne" label="产品一级分类" align="center" min-width="100px"></ui-table-column>
        <ui-table-column prop="proLevelTwo" label="产品二级分类" align="center" min-width="100px"></ui-table-column>
        <ui-table-column prop="tradeDirec" label="交易方向" align="center" min-width="100px"></ui-table-column>
        <ui-table-column prop="proName" label="产品名称" align="center" min-width="100px"></ui-table-column>
        <ui-table-column prop="organName" label="机构全称" align="center" min-width="100px"></ui-table-column>
        <ui-table-column prop="proRate" label="利率" align="center" min-width="100px"></ui-table-column>
        <ui-table-column prop="timeLimit" label="期限" align="center" min-width="100px"></ui-table-column>
        <ui-table-column prop="money" label="金额" align="center" min-width="100px"></ui-table-column>
      </ui-table>
      <div class="footer">
        <span class="cancel-button float-left" @click="meetingDialog=!meetingDialog">取消</span>
        <span class="confirm-button float-right" @click="meetingDialog=!meetingDialog">确认</span>
      </div>
    </ui-dialog>-->
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
      // 会议列表弹框
      meetingDialog: false,
      meetingTable: [
        {
          order: 1,
          meetingTitle: '江南银行会议',
          releaseDate: '2020-09-09',
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