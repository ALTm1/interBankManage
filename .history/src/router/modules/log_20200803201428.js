export default [
    {
        path: 'log',
        name: 'log',
        component: () => import('@/views/log/log.vue'),
        meta: {
          title: '资讯详情'
        }
    },
    {
        path: 'logdetail',
        name: 'logdetail',
        component: () => import('@/views/log/logDetail.vue'),
        meta: {
          title: '资讯详情'
        }
    },
    
  ]