<!--
 * @Author: your name
 * @Date: 2020-07-29 14:07:51
 * @LastEditTime: 2020-07-30 16:56:27
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
  <div class="pro-query">
    <ui-form class="form-block" ref="ruleForm" :model="form" :rules="rules" label-width="100px">
      <ui-form-item label="营销渠道" prop="marketChannel">
        <ui-select v-model="form.marketChannel" placeholder="请选择营销渠道">
          <ui-option label="APP端" value="APP端"></ui-option>
          <ui-option label="门户端" value="门户端"></ui-option>
        </ui-select>
      </ui-form-item>
      <!-- 按钮 -->
      <ui-form-item>
        <Button
          @click.native="submitForm('ruleForm')"
          text="查询"
          backgroundColor="#CE2848"
          margin="0px 60px 0px 0px"
        ></Button>
      </ui-form-item>
    </ui-form>
    <div>
      <ui-menu
        :default-active="menuActiveIndex"
        class="ui-menu-demo market-display-menu"
        mode="horizontal"
        @select="handleSelect"
        text-color="#333333"
        active-text-color="#9B7041"
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
      } else if (key == '2') {
      } else if (key == '3') {
      }
    },
  },
}
</script>

<style lang="css" scoped>
.form-block {
  width: 600px;
  margin: 0 auto;
}

.market-display-menu{
  background: none;
}
</style>
