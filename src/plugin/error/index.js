import store from '@/store'
import util from '@/libs/utils/index.js'

export default {
  install (Vue, options) {
    Vue.config.errorHandler = function (error, instance, info) {
      Vue.nextTick(() => {
        // store 追加 log
        store.dispatch('vxadmin/log/push', {
          message: `${info}: ${error.message}`,
          type: 'danger',
          meta: {
            error,
            instance
          }
        })
        // 只在开发模式下打印 log
        if (process.env.NODE_ENV === 'development') {
          util.log.capsule('VXAdmin', 'ErrorHandler', 'danger')
          util.log.danger('>>>>>> 错误信息 >>>>>>')
          console.log(info)
          util.log.danger('>>>>>> Vue 实例 >>>>>>')
          console.log(instance)
          util.log.danger('>>>>>> Error >>>>>>')
          console.log(error)
        }
      })
    }
  }
}
