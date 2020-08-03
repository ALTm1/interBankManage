<!--
 * @Author: your name
 * @Date: 2020-08-03 15:22:40
 * @LastEditTime: 2020-08-03 15:49:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankManage\src\components\borderheader\index.vue
--> 

<template>
  <div class="border-header-wrap clear">
    <div class="border-header-title float-left">{{title}}</div>
    <div class="border-header-content float-right">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '标题',
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="css" scoped>
.border-header-wrap {
  width: 100%;
  height: 30px;
  line-height: 30px;
  background: #f5f6f8;
  font-size: 14px;
  font-family: SourceHanSansCN;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}
.border-header-title {
  display: inline-block;
  padding-left: 10px;
  box-sizing: border-box;
}
.border-header-content {
  display: inline-block;
}
</style>
