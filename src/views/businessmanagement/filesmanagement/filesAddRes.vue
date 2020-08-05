<template>
  <!-- 文件新增结果 -->
  <div class="files-add-res">
    <div class="right-wrap">
      <result :status="true" :tadeSuccess="'交易成功'" :batch="'1234567890123'" @click="clickFinish"></result>
    </div>
  </div>
</template>
<script>
export default {
  name: 'filesAddRes',
  methods: {
    // 点击完成
    clickFinish() {
      this.$router.push('/filesManagement')
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
