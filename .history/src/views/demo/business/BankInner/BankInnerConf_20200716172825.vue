<template>
  <ui-container-full class="bank-inner-conf">
    <ui-form label-width="150px">
      <ui-row class="bordB">
        <ui-col :span="20" :offset="4">
          <ui-form-item label="付款账户：">{{confirmData.payerAccountNo|formatAcNo}}</ui-form-item>
          <ui-form-item label="收款人账号：">{{confirmData.payeeAccountAcNo|formatAcNo}}</ui-form-item>
          <ui-form-item label="转账金额：">{{confirmData.trsAmount|number(2)}}</ui-form-item>
          <ui-form-item label="大写金额：">{{confirmData.trsAmount|amount}}</ui-form-item>
        </ui-col>
      </ui-row>
      <ui-row class="text-center padtop20">
        <ui-button type="primary" @click="goBack">上一步</ui-button>
        <ui-button type="primary" @click="next">提交</ui-button>
      </ui-row>
    </ui-form>
    <div>
          <ui-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></ui-tree>

    </div>
  </ui-container-full>
</template>

<script>
export default {
  name: 'InnerTransferConf',
  data() {
    return {
      confirmData: {},
      data: [
        {
          label: "系统管理员",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        },
        {
          label: "系统管理",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "参数管理",
          children: [
            {
              label: "产品标签维护",
            },
            {
              label: "部门维护",
            },
            {
              label: "审批菜单维护",
            },
          ]
        },
        {
          label: "业务管理",
          children: [
            {
              label: "产品标签维护",
            },
            {
              label: "部门维护",
            },
            {
              label: "审批菜单维护",
            },
            {
              label: "审批菜单维护",
            },
          ]
        },
        {
          label: "授信管理",
          children: [
            {
              label: "产品标签维护",
            },
            {
              label: "部门维护",
            },
            {
              label: "审批菜单维护",
            },
            {
              label: "审批菜单维护",
            },
          ]
        },
        {
          label: "营销管理",
          children: [
            {
              label: "产品标签维护",
            },
            {
              label: "部门维护",
            },
            {
              label: "审批菜单维护",
            },
            {
              label: "审批菜单维护",
            },
          ]
        },
        {
          label: "审批管理",
          children: [
            {
              label: "产品标签维护",
            },
            {
              label: "部门维护",
            },
            {
              label: "审批菜单维护",
            },
            {
              label: "审批菜单维护",
            },
          ]
        },
        {
          label: "联盟圈管理",
          children: [
            {
              label: "产品标签维护",
            },
            {
              label: "部门维护",
            },
            {
              label: "审批菜单维护",
            },
            {
              label: "审批菜单维护",
            },
          ]
        },
        {
          label: "报表管理",
          children: [
            {
              label: "产品标签维护",
            },
            {
              label: "部门维护",
            },
            {
              label: "审批菜单维护",
            },
            {
              label: "审批菜单维护",
            },
          ]
        },
        {
          label: "客户端版本管理",
          children: [
            {
              label: "产品标签维护",
            },
            {
              label: "部门维护",
            },
            {
              label: "审批菜单维护",
            },
            {
              label: "审批菜单维护",
            },
          ]
        },
        {
          label: "行为分析",
          children: [
            {
              label: "产品标签维护",
            },
            {
              label: "部门维护",
            },
            {
              label: "审批菜单维护",
            },
            {
              label: "审批菜单维护",
            },
          ]
        },
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    }
  },
  created() {
    const params = this.$route.params
    if (params && params.info) {
      // 获得录入页面传递过来的数据
      this.confirmData = params.info
    } else {
      // 刷新页面跳转到录入页面
      this.goBack()
    }
  },
  methods: {
    next() {
      const pargs = this.confirmData
      this.$axios
        .post('eweb-transfer.BankInnerTransfer.do', pargs)
        .then(() => {
          // 跳转到结果页面
          this.goto({
            name: 'demo-business-bankInnerRes',
            params: { info: pargs }
          })
        })
        .catch(data => {
          // 重新获得token
          this.getToken(data, function(tokenData) {
            this.confirmData._token = tokenData._token
          })
        })
    },
    goBack() {
      // 刷新页面跳转到录入页面
      this.goto({ name: 'demo-business-bankInner' })
    }
  }
}
</script>
<style lang="scss">
.bank-inner-conf {
  .text-center {
    text-align: center;
  }
  .padtop20 {
    padding-top: 20px;
  }
}
</style>
