/*
 * @Author: your name
 * @Date: 2020-07-27 19:06:58
 * @LastEditTime: 2020-08-05 17:56:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankManage\src\libs\mixins\index.js
 */
import Vue from 'vue'
// 混入全局服务
import { $locale } from '@/libs/mixins/service'
// 混入Date格式化方法
import '@/libs/mixins/dateformat'

Vue.mixin({
  methods: {
    // 相当于定义全局方法
    $field: function (key) {
      return $locale.FIELDS[key]
    },
    $msg: function (key) {
      return $locale.MESSAGES[key]
    },
    // 重新获得验证码图片
    switchCode(verifyid) {
      document.getElementById(verifyid).setAttribute('src', 'eweb-common.GenTokenImg.do?timestrap=' + Date.now())
    },

    // 获得防重复提交token
    getToken: function (callback) {
      // 获得token
      this.$axios.post('eweb-common.SingleGetToken.do', {}).then(function (data) {
        // 成功后执行回调函数
        if (callback && typeof callback === 'function') {
          callback(data)
        }
      })
    },

  }
})
