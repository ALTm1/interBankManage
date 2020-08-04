<template>
  <!-- 文件删除结果页 -->
  <div class="files-del-res">
    <div class="right-wrap">
      <block-title blockTitle="文件删除结果"></block-title>
      <result :status="true" :tadeSuccess="'交易成功'" :batch="'1234567890123'" @click="clickFinish"></result>
    </div>
  </div>
</template>
<script>
export default {
  name: 'filesDelRes',
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
