<!--
 * @Author: your name
 * @Date: 2020-07-28 10:07:41
 * @LastEditTime: 2020-07-30 19:12:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankManage\src\components\button\index.vue
--> 


<template>
  <div
    class="button-item"
    :style="{'background':backgroundColor,'marginLeft':marginLeft,'marginRight':marginRight}"
  >
    <span class="button-text">{{text}}</span>
  </div>
</template>

<script>
export default {
  props: {
    backgroundColor: {
      type: String,
      default: '#CE2848',
    },
    marginLeft: {
      type: String,
      default: '0px',
    },
    marginRight: {
      type: String,
      default: '0px',
    },
    text: {
      type: String,
      default: '重置',
    },
  },
  data() {
    return {}
  },

  methods: {},
}
</script>


<style lang="css" scoped>
.button-item {
  display: inline-block;
  width: 129px;
  height: 39px;
  line-height: 39px;
  border-radius: 3px 3px 3px 3px;
  text-align: center;
}
.button-text {
  font-size: 14px;
  font-family: SourceHanSansCN;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
</style>
