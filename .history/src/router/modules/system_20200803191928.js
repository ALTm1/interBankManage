export default [
    {
        path: 'system',
        name:'system',
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
            {
                path: 'operatecancel',
                name: 'operatecancel',
                component: () => import('@/pages/system/operate/operateCancel.vue'),
                meta: {
                    title: '操作员管理'
                }
            },
            {
                path: 'cancelresult',
                name: 'cancelresult',
                component: () => import('@/pages/system/operate/cancelResult.vue'),
                meta: {
                    title: '操作员管理'
                }
            },
            {
                path: 'addconfirm',
                name: 'addconfirm',
                component: () => import('@/pages/system/operate/addConfirm.vue'),
                meta: {
                    title: '操作员管理'
                }
            },
            {
                path: 'addresult',
                name: 'addresult',
                component: () => import('@/pages/system/operate/addResult.vue'),
                meta: {
                    title: '操作员管理'
                }
            },
            {
                path: 'modifyconfirm',
                name: 'modifyconfirm',
                component: () => import('@/pages/system/operate/modifyConfirm.vue'),
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
            },
            {
                path: 'roledetail',
                name: 'roledetail',
                component: () => import('@/pages/system/role/roleDetail.vue'),
                meta: {
                    title: '角色管理'
                } 
            },
            {
                path: 'roleadd',
                name: 'roleadd',
                component: () => import('@/pages/system/role/roleAdd.vue'),
                meta: {
                    title: '角色管理'
                } 
            },
            
        ]
    },
]