<template>
  <!-- 产品标签新增结果页 -->
  <div class="product-tag-res">
    <div class="right-wrap">
      <div class="result">
        <div>
          <img src alt class="result-img" />
          <div class="result-status">交易成功</div>
          <div class="batch">交易流水号:33445566888</div>
        </div>
        <div class="waiting" style="display:none">信息已经提交待审核</div>
        <ui-row class="btn">
          <ui-button type="primary" class="back-btn" @click="goBack">返回</ui-button>
          <ui-button type="primary" class="continue-next" @click="clickFinish">完成</ui-button>
        </ui-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'productTagRes',
  computed: {},
  data() {
    return {}
  },
  methods: {
    // 点击完成
    clickFinish() {
      this.$router.push('sectionService')
    },
    // 返回按钮
    goBack() {
      this.$router.go(-1)
    },
  },
}
</script>
<style lang="scss">
</style>
