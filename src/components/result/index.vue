<template>
  <div class="result">
    <img :src="src" alt class="result-img" />
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
    return {
      src: require('@/assets/image/success.png'),
      faliedSrc: require('@/assets/image/success.png'),
    }
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
    width: 260px;
    height: 170px;
    margin: 0 auto;
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
    margin: 18px 0 17px;
  }

  .batch {
    font-size: 12px;
    margin-bottom: 79px;
  }
  .back-btn {
    margin-right: 204px;
  }
  .ui-button + .ui-button {
    margin-left: 0;
  }
  .continue-next {
    background: #98243d !important;
    border-color: #98243d !important;
  }
}
</style>
