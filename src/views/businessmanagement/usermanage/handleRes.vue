<template>
  <!-- 停用结果页 -->
  <div class="recording-res">
    <div class="right-wrap">
      <ui-row class="handle-title">
        <ui-col :span="12">机构信息</ui-col>
        <ui-col :span="12" class="back">返回</ui-col>
      </ui-row>
      <div class="result">
        <div>
          <img src alt class="result-img" />
          <div class="result-status">交易成功</div>
          <div class="batch">交易流水号:33445566888</div>
        </div>
        <!-- <div class="result-status">信息已提交，请等待审核</div> -->
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
  name: 'recordingRes',
  computed: {},
  data() {
    return {}
  },
  methods: {
    // 点击完成
    clickFinish() {
      this.$router.push('/userQuery')
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
