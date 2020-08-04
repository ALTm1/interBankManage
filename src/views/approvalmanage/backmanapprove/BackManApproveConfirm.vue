


<template>
  <div class="wrap">
    <BorderHeader title="审批信息确认"></BorderHeader>
    <div class="content">
      <div class="summary-info clear">
        <HeaderItem text="审批信息"></HeaderItem>
        <div
          :class="[index%2==0?'float-left':'float-right']"
          v-for="(item,index) in summaryInfo"
          :key="item.title"
        >
          <DisplayItem :title="item.title" :content="item.content"></DisplayItem>
        </div>
      </div>
      <div class="trade-info clear">
        <HeaderItem text="交易要素"></HeaderItem>
        <div
          :class="[index%2==0?'float-left':'float-right']"
          v-for="(item,index) in tradeInfo"
          :key="item.title"
        >
          <DisplayItem :title="item.title" :content="item.content"></DisplayItem>
        </div>
      </div>
      <div class="approval-info clear">
        <HeaderItem text="审批信息录入"></HeaderItem>
        <div class="approval-info-item float-left">
          <span class="approval-info-title">审核</span>
          <div class="approval-info-content">
            <ui-radio v-model="opinionRadio" label="1">通过</ui-radio>
            <ui-radio v-model="opinionRadio" label="2" disabled>拒绝</ui-radio>
          </div>
        </div>
        <div class="approval-info-item float-right">
          <DisplayItem title="拒绝原因" content="XXXXXXXXX"></DisplayItem>
        </div>
      </div>
      <div class="buttons" style="paddingTop: 40px">
        <Button text="确认" backgroundColor="#CE2848" @click.native="goResult()"></Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      summaryInfo: [
        {
          title: '流水号',
          content: '32909084888',
        },
        {
          title: '提交时间',
          content: '2020-09-09',
        },
        {
          title: '操作员ID',
          content: '00001',
        },
        {
          title: '操作员姓名',
          content: '张三',
        },
        {
          title: '交易名称',
          content: '操作员新增',
        },
        {
          title: '交易状态',
          content: '待审批',
        },
      ],
      // 交易要素
      tradeInfo: [
        {
          title: '操作员ID',
          content: '111000',
        },
        {
          title: '操作员姓名',
          content: '张三',
        },
        {
          title: '证件号',
          content: '1290789980',
        },
        {
          title: '工号',
          content: '88888',
        },
        {
          title: '联系电话',
          content: '18990886890',
        },
        {
          title: '邮箱',
          content: '12896789@jk.cn',
        },
        {
          title: '所属机构',
          content: '江南农商银行总行',
        },
        {
          title: '所属部门',
          content: '金融同业部',
        },
        {
          title: '操作员角色',
          content: '交易员',
        },
        {
          title: '状态',
          content: '正常',
        },
      ],
      // 审批信息录入
      opinionRadio: '1',
    }
  },
  methods: {
    goResult() {
      this.$router.push('/approvalmanage/backmanapprove/backmanapprovesucc')
    },
  },
}
</script>
<style lang="css" scoped>
.wrap {
  background: #ffffff;
}

/deep/ .ui-input__inner {
  width: 330px;
}
.content {
  display: inline-block;
  padding: 0 50px;
}

/* 审批信息录入 */
.approval-info {
  width: 100%;
}
.approval-info-item {
  display: inline-block;
  margin-bottom: 18px;
}
.approval-info-title {
  width: 200px;
  height: 33px;
  line-height: 33px;
  text-align: right;
  display: inline-block;
  font-size: 14px;
  font-family: SourceHanSansCN;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  margin-right: 43px;
}
.approval-info-content {
  display: inline-block;
  width: 330px;
  height: 33px;
  line-height: 33px;
  text-align: center;
  background: rgba(255, 255, 255, 1);
  border: 2px solid rgba(231, 232, 239, 1);
  border-radius: 3px;
  font-size: 12px;
  font-family: SourceHanSansCN;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
</style>