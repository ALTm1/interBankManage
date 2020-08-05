export default [
    {
        path: 'log',
        name: 'log',
        component: () => import('@/views/log/log.vue'),
        meta: {
          title: '登录密码重置'
        }
    },
    {
        path: 'logdetail',
        name: 'logdetail',
        component: () => import('@/views/log/logDetail.vue'),
        meta: {
          title: '登录密码重置'
        }
    },
    
  ]