export default [
    {
        path: 'system',
        redirect: { name: 'operatemanage' },
        component: () => import('@/pages/system/operate/operate.vue'),
        children: [
            {
                path: 'operatemanage',
                name: 'operatemanage',
                component: () => import('@/pages/system/operate/operateManage.vue'),
                meta: {
                    title: '操作员管理'
                }
            },
            {
                path: 'operateAdd',
                name: 'operateAdd',
                component: () => import('@/pages/system/operate/operateAdd.vue'),
                meta: {
                    title: '操作员管理'
                }
            },
            {
                path: 'operatedetail',
                name: 'operatedetail',
                component: () => import('@/pages/system/operate/operateDetail.vue'),
                meta: {
                    title: '操作员管理'
                }
            },
            {
                path: 'operatemodify',
                name: 'operatemodify',
                component: () => import('@/pages/system/operate/operateModify.vue'),
                meta: {
                    title: '操作员管理'
                }
            },
            {
                path: 'modifyresult',
                name: 'modifyresult',
                component: () => import('@/pages/system/operate/modifyResult.vue'),
                meta: {
                    title: '操作员管理'
                }
            },
            
        ]

    },
    {
        path: 'role',
        name: 'role',
        redirect: { name: 'roleManage' },
        component: () => import('@/pages/system/role/role.vue'),
        meta: {
            title: '角色管理'
        },
        children:[
            {
                path: 'roleManage',
                name: 'roleManage',
                component: () => import('@/pages/system/role/roleManage.vue'),
                meta: {
                    title: '角色管理'
                } 
            }
        ]
    },
]