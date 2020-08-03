<template>
  <div class="block-title">
    <ui-row class="handle-title">
      <ui-col :span="12">{{blockTitle}}</ui-col>
      <ui-col :span="12" class="img">
        <img src alt />
      </ui-col>
    </ui-row>
  </div>
</template>
<script>
export default {
  name: 'block-title',
  props: {
    blockTitle: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="scss">
.block-title {
  .handle-title {
    padding: 0 10px;
    height: 30px;
    line-height: 30px;
    margin-top: 80px;
    background: rgba(245, 246, 248, 1);
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.1);
    border-radius: 4px 4px 0px 0px;
  }

  .handle-title .img {
    img {
      float: right;
      display: block;
      width: 14px;
      height: 14px;
      margin: 8px 0;
      background: #f0f;
    }
  }
}
</style>
