

export default [
    /***
     * 授信管理
     * 
      */
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
            title: '授信额度查询'
        },
        component: () => import('@/views/behavioranalysis/accessTime.vue'),
    },


]
