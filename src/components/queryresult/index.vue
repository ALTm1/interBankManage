<template>
  <ui-row v-show="isResultShow">
    <ui-col class="query-result">查询结果</ui-col>
  </ui-row>
</template>
<script>
export default {
  name: 'queryResultTitle',
  props: {
    isResultShow: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style lang="scss" scoped>
.query-result {
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  font-family: SourceHanSansCN;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  padding: 0 10px;
  background: rgba(245, 246, 248, 1);
}
</style>
