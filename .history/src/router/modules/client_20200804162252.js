export default [
    {
        path: 'client',
        name: 'client',
        redirect: { name: 'clientpage' },
        component: () => import('@/views/client/client.vue'),
        meta: {
          title: '客户端版本管理'
        },
        children:[
            {
                path: 'clientpage',
                name: 'clientpage',
                component: () => import('@/views/client/clientPage.vue'),
                meta: {
                  title: '客户端版本管理'
                }
              },
        ]   
      },
      
      
  ]
