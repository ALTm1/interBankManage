export default [
    {
        path: 'client',
        name: 'client',
        
        component: () => import('@/views/client/client.vue'),
        meta: {
          title: '登录密码重置'
        },
        children:[
            {
                path: 'clientpage',
                name: 'clientpage',
                component: () => import('@/views/login/clientPage.vue'),
                meta: {
                  title: '登录密码重置'
                }
              },
        ]   
      },
      
      
  ]
