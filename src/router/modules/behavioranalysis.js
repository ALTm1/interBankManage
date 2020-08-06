

export default [
    /***
     * 授信管理
     * 
      */
    {
        path: '/behaviorAnalysis',
        name: "behaviorAnalysis",
        redirect: { name: 'accessFrequency' },
        component: () => import('@/views/behavioranalysis/behaviorAnalysis.vue'),
        children: [
            {
                path: '/accessFrequency',
                name: 'accessFrequency',
                meta: {
                    title: '功能模块访问频次'
                },
                component: () => import('@/views/behavioranalysis/accessFrequency.vue'),
            },
            {
                path: '/accessTime',
                name: 'accessTime',
                meta: {
                    title: '功能模块访问时长'
                },
                component: () => import('@/views/behavioranalysis/accessTime.vue'),
            },
        ]

    }
]
