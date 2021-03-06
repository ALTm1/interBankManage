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
                path: 'addconfirm',
                name: 'addconfirm',
                component: () => import('@/views/client/addConfirm.vue'),
                meta: {
                  title: '客户端版本新增确认'
                }
              },
              {
                path: 'addresult',
                name: 'addresult',
                component: () => import('@/views/client/addResult.vue'),
                meta: {
                  title: '客户端版本新增结果'
                }
              },
              {
                path: 'clientmodify',
                name: 'clientmodify',
                component: () => import('@/views/client/clientModify.vue'),
                meta: {
                  title: '客户端版本修改'
                }
              },
              {
                path: 'clientdelete',
                name: 'clientdelete',
                component: () => import('@/views/client/clientDelete.vue'),
                meta: {
                  title: '客户端版本删除'
                }
              },
              {
                path: 'deleteresult',
                name: 'deleteresult',
                component: () => import('@/views/client/deleteResult.vue'),
                meta: {
                  title: '客户端版本删除结果'
                }
              },
              {
                path: 'modifyconfirm',
                name: 'modifyconfirm',
                component: () => import('@/views/client/modifyConfirm.vue'),
                meta: {
                  title: '客户端版本修改确认页'
                }
              },
              {
                path: 'modifyresult',
                name: 'modifyresult',
                component: () => import('@/views/client/modifyResult.vue'),
                meta: {
                  title: '客户端版本修改结果页'
                }
              },
        ]   
      },
      
      
  ]
