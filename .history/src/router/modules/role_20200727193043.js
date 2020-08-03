export default [
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