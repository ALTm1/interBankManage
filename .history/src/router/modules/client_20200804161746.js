export default [
    {
        path: 'client',
        name: 'client',
        component: () => import('@/views/client/client.vue'),
        meta: {
          title: '登录密码重置'
        }
      },
      {
        path: 'resetresult',
        name: 'resetresult',
        component: () => import('@/pages/login/resetResult.vue'),
        meta: {
          title: '登录密码重置'
        }
      },
      
  ]
