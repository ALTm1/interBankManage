export default [
    {
        path: 'system',
        name: "system",
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
                    title: '操作员新增录入页'
                }
            },
            {
                path: 'operatedetail',
                name: 'operatedetail',
                component: () => import('@/pages/system/operate/operateDetail.vue'),
                meta: {
                    title: '操作员详情'
                }
            },
            {
                path: 'operatemodify',
                name: 'operatemodify',
                component: () => import('@/pages/system/operate/operateModify.vue'),
                meta: {
                    title: '操作员修改录入页'
                }
            },
            {
                path: 'modifyresult',
                name: 'modifyresult',
                component: () => import('@/pages/system/operate/modifyResult.vue'),
                meta: {
                    title: '操作员修改结果页'
                }
            },
            {
                path: 'operatecancel',
                name: 'operatecancel',
                component: () => import('@/pages/system/operate/operateCancel.vue'),
                meta: {
                    title: '操作员注销确认页'
                }
            },
            {
                path: 'cancelresult',
                name: 'cancelresult',
                component: () => import('@/pages/system/operate/cancelResult.vue'),
                meta: {
                    title: '操作员注销确认页'
                }
            },
            {
                path: 'addconfirm',
                name: 'addconfirm',
                component: () => import('@/pages/system/operate/addConfirm.vue'),
                meta: {
                    title: '操作员新增确认页'
                }
            },
            {
                path: 'addresult',
                name: 'addresult',
                component: () => import('@/pages/system/operate/addResult.vue'),
                meta: {
                    title: '操作员新增结果页'
                }
            },
            {
                path: 'modifyconfirm',
                name: 'modifyconfirm',
                component: () => import('@/pages/system/operate/modifyConfirm.vue'),
                meta: {
                    title: '操作员修改确认页'
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
        children: [
            {
                path: 'roleManage',
                name: 'roleManage',
                component: () => import('@/pages/system/role/roleManage.vue'),
                meta: {
                    title: '角色查询'
                } 
            },
            {
                path: 'roledetail',
                name: 'roledetail',
                component: () => import('@/pages/system/role/roleDetail.vue'),
                meta: {
                    title: '角色查询'
                } 
            },
            {
                path: 'rolemodify',
                name: 'rolemodify',
                component: () => import('@/pages/system/role/roleModify.vue'),
                meta: {
                    title: '角色修改'
                } 
            },
            {
                path: 'modifyconfirm',
                name: 'modifyconfirm',
                component: () => import('@/pages/system/role/modifyConfirm.vue'),
                meta: {
                    title: '角色修改确认'
                } 
            },
            {
                path: 'modifyresult',
                name: 'modifyresult',
                component: () => import('@/pages/system/role/modifyResult.vue'),
                meta: {
                    title: '角色修改结果'
                } 
            },
            
            {
                path: 'roleadd',
                name: 'roleadd',
                component: () => import('@/pages/system/role/roleAdd.vue'),
                meta: {
                    title: '新增录入页'
                } 
            },
            
        ]
    },
]