


<template>
  <div class="wrap">
    <div class="breadcrumb-header">
      <ui-breadcrumb separator-class="ui-icon-arrow-right">
        <ui-breadcrumb-item>您的位置: 营销管理</ui-breadcrumb-item>
        <ui-breadcrumb-item>营销展示管理</ui-breadcrumb-item>
        <ui-breadcrumb-item v-show="name!='营销展示管理'">{{name}}</ui-breadcrumb-item>
      </ui-breadcrumb>
    </div>
    <BorderHeader title="营销展示管理"></BorderHeader>
    <div class="form-wrap">
      <ui-form class="form-block" ref="ruleForm" :model="form" :rules="rules" label-width="auto">
        <ui-form-item label="营销渠道" prop="marketChannel">
          <ui-select v-model="form.marketChannel" placeholder="请选择营销渠道">
            <ui-option label="APP端" value="APP端"></ui-option>
            <ui-option label="门户端" value="门户端"></ui-option>
          </ui-select>
        </ui-form-item>
        <!-- 按钮 -->
        <div class="buttons" style="padding-top: 40px">
          <Button
            @click.native="submitForm('ruleForm')"
            text="查询"
            backgroundColor="#CE2848"
            margin="0px 60px 0px 0px"
          ></Button>
        </div>
      </ui-form>
    </div>
    <div v-if="resultShow" class="content">
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
      // 路由组件meta信息
      name: '',
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
  watch: {
    $route: {
      handler: function (route) {
        this.name = route.meta.title
      },
      immediate: true,
    },
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
.breadcrumb-header {
  margin-bottom: 40px;
}
.form-block {
  padding: 50px;
  width: 600px;
  box-sizing: border-box;
  margin: 0 auto;
}

.wrap /deep/ .ui-form-item {
  display: inline-block;
}
.content {
  background: #fff;
  margin-top: 20px;
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
