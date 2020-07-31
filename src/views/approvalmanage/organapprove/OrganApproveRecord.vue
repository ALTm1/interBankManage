<!--
 * @Author: your name
 * @Date: 2020-07-31 13:17:05
 * @LastEditTime: 2020-07-31 15:50:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankManage\src\views\approvalmanage\accreditedinstitution\AccreditedInstitutionRecord.vue
--> 
<template>
  <div class="wrap">
    <div class="content">
      <div class="summary-info clear">
        <HeaderItem text="认证信息"></HeaderItem>
        <div
          :class="[index%2==0?'float-left':'float-right']"
          v-for="(item,index) in summaryInfo"
          :key="item.title"
        >
          <DisplayItem :title="item.title" :content="item.content"></DisplayItem>
        </div>
      </div>
      <div class="organ-info clear">
        <HeaderItem text="机构信息"></HeaderItem>
        <div
          :class="[index%2==0?'float-left':'float-right']"
          v-for="(item,index) in organInfo"
          :key="item.title"
        >
          <DisplayItem :title="item.title" :content="item.content"></DisplayItem>
        </div>
      </div>
      <div class="id-info clear">
        <HeaderItem text="证件信息"></HeaderItem>
        <div
          :class="[index%2==0?'float-left':'float-right']"
          v-for="(item,index) in idInfo"
          :key="item.title"
        >
          <DisplayItem :title="item.title" :content="item.content"></DisplayItem>
        </div>
      </div>
      <div class="user-info clear">
        <HeaderItem text="用户信息"></HeaderItem>
        <div
          :class="[index%2==0?'float-left':'float-right']"
          v-for="(item,index) in userInfo"
          :key="item.title"
        >
          <DisplayItem :title="item.title" :content="item.content"></DisplayItem>
        </div>
      </div>
      <div class="approval-info clear">
        <HeaderItem text="审批信息录入"></HeaderItem>
        <div class="approval-info-item float-left">
          <span class="approval-info-title">选择角色</span>
          <div class="approval-info-content">
            <ui-radio v-model="roleRadio" label="1">交易员</ui-radio>
            <ui-radio v-model="roleRadio" label="2">审批员</ui-radio>
          </div>
        </div>
        <div class="approval-info-item float-right">
          <span class="approval-info-title">审核</span>
          <div class="approval-info-content">
            <ui-radio v-model="opinionRadio" label="1">通过</ui-radio>
            <ui-radio v-model="opinionRadio" label="2">拒绝</ui-radio>
          </div>
        </div>
        <div class="approval-info-item float-left">
          <span class="approval-info-title">拒绝原因</span>
          <div class="approval-info-content">
            <ui-input v-model="reasonInput" placeholder="请输入拒绝原因"></ui-input>
          </div>
        </div>
      </div>
      <div style="textAlign: center">
        <Button text="提交" backgroundColor="#CE2848" @click.native="goConfirm"></Button>
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
          title: '交易状态',
          content: '待审批',
        },
      ],
      // 机构信息
      organInfo: [
        {
          title: '机构全称',
          content: '江南农商银行XX分行',
        },
        {
          title: '机构类型',
          content: '银行机构',
        },
        {
          title: '是否总机构',
          content: '否',
        },
        {
          title: '归属机构全称',
          content: '江南农村商业银行',
        },
        {
          title: '归属机构统一社会信用代码',
          content: 'XC23907837483',
        },
        {
          title: '归属机构统组织机构代码',
          content: 'XC88888888888',
        },
        {
          title: '附件-营业执照扫描件(加盖公章)',
          content: '查看',
        },
        {
          title: '附件-授权委托书(加盖公章)',
          content: '查看',
        },
      ],
      // 证件信息
      idInfo: [
        {
          title: '统一社会信用代码',
          content: '暂无',
        },
        {
          title: '组织机构代码证',
          content: 'XC89898989',
        },
        {
          title: '法定代表人',
          content: '张三',
        },
        {
          title: '资产规模(亿)',
          content: '40',
        },
        {
          title: '净资产(亿)',
          content: '30',
        },
      ],
      // 当前机构地址
      organAddress: [
        {
          title: '省',
          content: '江苏省',
        },
        {
          title: '市',
          content: '常州市',
        },
        {
          title: '详细地址',
          content: '金坛区XX路XXX号',
        },
        {
          title: '联系人',
          content: '张三',
        },
        {
          title: '电话',
          content: '010-1234908',
        },
        {
          title: '手机号码',
          content: '13890889088',
        },
        {
          title: '传真',
          content: '010-1290897',
        },
        {
          title: '电子邮箱',
          content: '5689789@jsdj.cn',
        },
        {
          title: '用户信息描述',
          content: '无',
        },
        {
          title: '附件-营业执照扫描件(加盖公章)',
          content: '查看',
        },
        {
          title: '附件-授权委托书(加盖公章)',
          content: '查看',
        },
      ],
      // 用户信息
      userInfo: [
        {
          title: '姓名',
          content: '张三三',
        },
        {
          title: '登录名',
          content: 'dfgh',
        },
        {
          title: '机构简称',
          content: '江南银行',
        },
        {
          title: '身份证号码',
          content: '187907867890088',
        },
        {
          title: '手机号码',
          content: '13890678988',
        },
        {
          title: '邮箱',
          content: '89889087@jk.cn',
        },
      ],
      // 审批信息录入
      roleRadio: '',
      opinionRadio: '',
      reasonInput: '',
    }
  },
  methods: {
    goConfirm() {
      this.$router.push('/approvalmanage/organapprove/organapproveconfirm')
    },
  },
}
</script>
<style lang="css" scoped>
.content {
  display: inline-block;
  padding: 0 50px;
}

/* 审批信息录入 */
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

/deep/ .ui-input__inner {
  width: 330px;
}
</style>