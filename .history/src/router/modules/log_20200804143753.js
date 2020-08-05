export default [
    {
        path: 'log',
        name: 'log',
        component: () => import('@/views/log/log.vue'),
        meta: {
          title: '日志查询'
        }
    },
    {
        path: 'logdetail',
        name: 'logdetail',
        component: () => import('@/views/log/logDetail.vue'),
        meta: {
          title: '操作日志详情'
        }
    },
    
  ]