<!--
 * @Author: your name
 * @Date: 2020-07-29 14:07:51
 * @LastEditTime: 2020-08-03 18:09:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankManage\src\views\marketingmanage\marketdismanage\MarketDisIndex.vue
--> 

<!--
 * @Author: your name
 * @Date: 2020-07-28 11:14:20
 * @LastEditTime: 2020-07-28 18:47:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Ed
 * @FilePath: \interBankManage\src\views\marketingmanage\meetingmanage\MeetindIncrease.vue
--> 


<template>
  <div class="wrap">
    <BorderHeader title="详情页"></BorderHeader>
    <ui-form class="form-block" ref="ruleForm" :model="form" :rules="rules" label-width="100px">
      <ui-form-item label="营销渠道" prop="marketChannel">
        <ui-select v-model="form.marketChannel" placeholder="请选择营销渠道">
          <ui-option label="APP端" value="APP端"></ui-option>
          <ui-option label="门户端" value="门户端"></ui-option>
        </ui-select>
      </ui-form-item>
      <!-- 按钮 -->
      <Button
        @click.native="submitForm('ruleForm')"
        text="查询"
        backgroundColor="#CE2848"
        margin="0px 60px 0px 0px"
      ></Button>
    </ui-form>
    <div v-if="resultShow">
      <ui-menu
        :default-active="menuActiveIndex"
        class="ui-menu-demo market-display-menu"
        mode="horizontal"
        @select="handleSelect"
      >
        <ui-menu-item index="1">广告轮播图</ui-menu-item>
        <ui-menu-item index="2">产品推荐</ui-menu-item>
        <ui-menu-item index="3">动态专区</ui-menu-item>
      </ui-menu>
      <div style="marginTop: 20px">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        marketChannel: '',
      },
      rules: {
        marketChannel: [
          { required: true, message: '请选择营销渠道', trigger: 'change' },
        ],
      },
      resultShow: false,
      menuActiveIndex: '1',
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.resultShow = true
          this.$router.push('/advertisingbanner')
        } else {
          this.resultShow = false
        }
      })
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
      if (key == '1') {
        this.$router.push('/advertisingbanner')
      } else if (key == '2') {
        this.$router.push('/prorecommend')
      } else if (key == '3') {
        this.$router.push('/dynamiczone')
      }
    },
  },
}
</script>

<style lang="css" scoped>
.wrap {
  margin: 0 auto;
  background: #ffffff;
}
.form-block {
  width: 600px;
  margin: 0 auto;
  padding: 40px;
}

.market-display-menu {
  background: none;
}

/* 修改ui-menu默认样式 */
.wrap /deep/ .ui-menu-item {
  height: 40px;
  line-height: 40px;
  padding: 0 0;
  margin: 0px 10px;
  font-size: 14px;
  font-family: SourceHanSansCN;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}
.wrap /deep/ .ui-menu--horizontal > .ui-menu-item.is-active {
  border-bottom: 3px solid #9b7041;
}
.wrap /deep/ .ui-menu--horizontal > .ui-menu-item:not(.is-disabled):focus {
  background: none;
}
</style>
