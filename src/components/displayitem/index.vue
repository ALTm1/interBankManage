<!--
 * @Author: your name
 * @Date: 2020-07-28 15:37:16
 * @LastEditTime: 2020-08-06 10:56:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankManage\src\components\displayitem\index.vue
--> 


<template>
  <div class="display-item">
    <span class="display-title">{{title}}</span>
    <span class="display-content" v-html="content"></span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '标题',
    },
    content: {
      type: String,
      default: '内容',
    },
  },
  data() {
    return {}
  },

  methods: {},
}
</script>


<style lang="css" scoped>
.display-item {
  display: inline-block;
  margin-bottom: 18px;
}
.display-title {
  width: 200px;
  height: 33px;
  line-height: 33px;
  text-align: right;
  display: inline-block;
  font-size: 14px;
  font-family: SourceHanSansCN;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  margin-right: 43px;
}
.display-content {
  display: inline-block;
  width: 330px;
  height: 33px;
  line-height: 33px;
  text-align: center;
  background: rgba(255, 255, 255, 1);
  border: 2px solid rgba(231, 232, 239, 1);
  border-radius: 3px;
  font-size: 12px;
  font-family: SourceHanSansCN;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
</style>
