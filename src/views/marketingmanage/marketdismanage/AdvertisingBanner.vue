<!--
 * @Author: your name
 * @Date: 2020-07-29 15:07:58
 * @LastEditTime: 2020-08-04 17:29:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankManage\src\views\marketingmanage\marketdismanage\AdvertisingBanner.vue
--> 
<template>
  <div class="advertising-banner-wrap">
    <ui-upload
      list-type="picture-card"
      :file-list="bannerList"
      action="https://jsonplaceholder.typicode.com/posts/"
      :auto-upload="false"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
    >
      <i slot="default" class="ui-icon-plus"></i>
    </ui-upload>
    <ui-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt />
    </ui-dialog>
    <div class="buttons" style="paddingTop: 40px">
      <Button text="下一步" backgroundColor="#9B7041"></Button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      bannerList: [
        {
          id: 'picture1',
          url: require('@/assets/image/code.png'),
        },
        {
          id: 'picture2',
          url: require('@/assets/image/code.png'),
        },
        {
          id: 'picture3',
          url: require('@/assets/image/code.png'),
        },
        {
          id: 'picture4',
          url: require('@/assets/image/code.png'),
        },
      ],
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
  },
}
</script>

<style lang="css" scoped>
.advertising-banner-wrap {
  padding: 0 20px;
}
</style>