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
              {
                path: 'clientadd',
                name: 'clientadd',
                component: () => import('@/views/client/clientAdd.vue'),
                meta: {
                  title: '客户端版本新增'
                }
              },
              {
                path: 'clientmodify',
                name: 'clientmodify',
                component: () => import('@/views/client/clientModify.vue'),
                meta: {
                  title: '客户端版本新增'
                }
              },
        ]   
      },
      
      
  ]
