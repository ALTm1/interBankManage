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
            
        ]

    },
    {
        
    }
]