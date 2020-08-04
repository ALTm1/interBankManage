<template>
  <!-- 机构注销结果页 -->
  <div class="organ-cancel-res">
    <div class="right-wrap">
      <block-title blockTitle="机构注销结果"></block-title>

      <div class="result">
        <img src alt class="result-img" />
        <div class="result-status">交易成功</div>
        <div class="batch">交易流水号:33445566888</div>
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
  name: 'organCancelRes',
  computed: {},
  data() {
    return {}
  },
  methods: {
    // 点击完成
    clickFinish() {
      this.$router.push('/outBankInfoMaintain')
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
