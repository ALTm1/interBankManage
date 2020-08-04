<template>
  <!-- 部门删除结果页 -->
  <!-- <div class="result-box">
    <div class="right-wrap">
  <block-title blockTitle="部门删除结果"></block-title>-->

  <div class="result">
    <img src alt class="result-img" />
    <div v-show="status">
      <div class="result-status">{{tadeSuccess}}</div>
      <div class="batch">交易流水号:{{batch}}</div>
    </div>
    <div class="waiting" v-show="!status">{{waiting}}</div>
    <ui-row class="btn">
      <ui-button type="primary" class="back-btn" @click="goBack">返回</ui-button>
      <ui-button type="primary" class="continue-next" @click="clickFinish">完成</ui-button>
    </ui-row>
  </div>
  <!-- </div>
  </div>-->
</template>
<script>
export default {
  name: 'result',
  props: {
    status: {
      type: Boolean,
      default: true,
    },
    tadeSuccess: {
      type: String,
      default: '交易成功',
    },
    batch: {
      type: String,
      default: '',
    },
    waiting: {
      type: String,
      default: '交易已经提交，待审核',
    },
  },
  data() {
    return {}
  },
  methods: {
    // 点击完成
    clickFinish() {
      this.$emit('click')
      //   this.$router.push('sectionService')
    },
    // 返回按钮
    goBack() {
      this.$router.go(-1)
    },
  },
}
</script>
<style lang="scss" scoped>
.result {
  padding: 79px 0 100px 0;
  background: #fff;
  .result-img {
    display: block;
    width: 257px;
    height: 158px;
    margin: 0 auto;
    background: #98243d;
  }

  .result-status,
  .batch,
  .waiting {
    text-align: center;
    font-size: 16px;
    font-family: SimHei;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
  }
  .waiting {
    margin: 40px 0;
  }
  .result-status {
    font-size: 16px;
    margin: 20px 0;
  }

  .batch {
    font-size: 12px;
    margin-bottom: 49px;
  }

  .continue-next {
    background: #98243d !important;
    border-color: #98243d !important;
  }
}
</style>
