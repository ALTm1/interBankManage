<template>
  <!-- 注销结果页 -->
  <div class="unionlap-cancel-res">
    <div class="right-wrap">
      <block-title blockTitle="联盟圈管理注销结果"></block-title>
      <result :status="true" :tadeSuccess="'交易成功'" :batch="'1234567890123'" @click="clickFinish"></result>
    </div>
  </div>
</template>
<script>
export default {
  name: 'unionlapCancelRes',
  computed: {},
  data() {
    return {}
  },
  methods: {
    // 点击完成
    clickFinish() {
      this.$router.push('/unionlapQuery')
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
