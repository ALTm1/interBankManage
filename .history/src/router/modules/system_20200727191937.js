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

    },
    
]