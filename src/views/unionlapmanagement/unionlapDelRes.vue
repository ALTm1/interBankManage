<template>
  <!-- 删除结果页 -->
  <div class="unionlap--del-res">
    <div class="right-wrap">
      <result :status="true" :tadeSuccess="'交易成功'" :batch="'1234567890123'" @click="clickFinish"></result>
    </div>
  </div>
</template>
<script>
export default {
  name: 'unionlapDelRes',
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
