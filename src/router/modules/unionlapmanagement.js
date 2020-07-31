

export default [
  {
    path: '/unionlapQuery',
    name: 'unionlapQuery',
    meta: {
      title: '联盟圈管理'
    },
    component: () => import('@/views/unionlapmanagement/unionlapQuery.vue'),

  },
  {
    path: '/unionlapDetail',
    name: 'unionlapDetail',
    meta: {
      title: '联盟圈新增'
    },
    component: () => import('@/views/unionlapmanagement/unionlapDetail.vue'),

  },
  {
    path: '/unionlapAdd',
    name: 'unionlapAdd',
    meta: {
      title: '联盟圈新增'
    },
    component: () => import('@/views/unionlapmanagement/unionlapAdd.vue'),

  },
  {
    path: '/unionlapAddConf',
    name: 'unionlapAddConf',
    meta: {
      title: '联盟圈新增确认'
    },
    component: () => import('@/views/unionlapmanagement/unionlapAddConf.vue'),

  },
  {
    path: '/unionlapAddRes',
    name: 'unionlapAddRes',
    meta: {
      title: '联盟圈新增结果'
    },
    component: () => import('@/views/unionlapmanagement/unionlapAddRes.vue'),

  },
  {
    path: '/unionlapModify',
    name: 'unionlapModify',
    meta: {
      title: '联盟圈修改'
    },
    component: () => import('@/views/unionlapmanagement/unionlapModify.vue'),

  },
  {
    path: '/unionlapModifyConf',
    name: 'unionlapModifyConf',
    meta: {
      title: '联盟圈新增确认'
    },
    component: () => import('@/views/unionlapmanagement/unionlapModifyConf.vue'),

  },
  {
    path: '/unionlapModifyRes',
    name: 'unionlapModifyRes',
    meta: {
      title: '联盟圈新增结果'
    },
    component: () => import('@/views/unionlapmanagement/unionlapModifyRes.vue'),

  },
  {
    path: '/unionlapDelConf',
    name: 'unionlapDelConf',
    meta: {
      title: '联盟圈新增确认'
    },
    component: () => import('@/views/unionlapmanagement/unionlapDelConf.vue'),

  },
  {
    path: '/unionlapDelRes',
    name: 'unionlapDelRes',
    meta: {
      title: '联盟圈新增结果'
    },
    component: () => import('@/views/unionlapmanagement/unionlapDelRes.vue'),

  },
  {
    path: '/unionlapCancelConf',
    name: 'unionlapCancelConf',
    meta: {
      title: '联盟圈注销确认'
    },
    component: () => import('@/views/unionlapmanagement/unionlapCancelConf.vue'),

  },
  {
    path: '/unionlapCancelRes',
    name: 'unionlapCancelRes',
    meta: {
      title: '联盟圈注销结果'
    },
    component: () => import('@/views/unionlapmanagement/unionlapCancelRes.vue'),

  },


]
