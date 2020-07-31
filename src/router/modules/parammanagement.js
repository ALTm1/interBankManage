

export default [
  {
    path: '/productService',
    name: 'productService',
    meta: {
      title: '产品标签新增'
    },
    component: () => import('@/views/parammanagement/producttags/productService.vue'),
  },
  {
    path: '/productTagAdd',
    name: 'productTagAdd',
    meta: {
      title: '产品标签新增'
    },
    component: () => import('@/views/parammanagement/producttags/productTagAdd.vue'),

  },
  {
    path: '/productTagConf',
    name: 'productTagConf',
    meta: {
      title: '产品标签新增确认'
    },
    component: () => import('@/views/parammanagement/producttags/productTagConf.vue'),

  },
  {
    path: '/productTagRes',
    name: 'productTagRes',
    meta: {
      title: '产品标签新增结果页'
    },
    component: () => import('@/views/parammanagement/producttags/productTagRes.vue'),

  },
  {
    path: '/productTagModify',
    name: 'productTagModify',
    meta: {
      title: '产品标签修改'
    },
    component: () => import('@/views/parammanagement/producttags/productTagModify.vue'),

  },
  {
    path: '/productTagDel',
    name: 'productTagDel',
    meta: {
      title: '产品标签删除'
    },
    component: () => import('@/views/parammanagement/producttags/productTagDel.vue'),

  },
  {
    path: '/productTagDelRes',
    name: 'productTagDelRes',
    meta: {
      title: '产品标签删除'
    },
    component: () => import('@/views/parammanagement/producttags/productTagDelRes.vue'),

  },
  // 部门维护
  {
    path: '/sectionService',
    name: 'sectionService',
    meta: {
      title: '部门维护'
    },
    component: () => import('@/views/parammanagement/sectionservice/sectionService.vue'),

  },
  {
    path: '/sectionConf',
    name: 'sectionConf',
    meta: {
      title: '部门维护新增'
    },
    component: () => import('@/views/parammanagement/sectionservice/sectionConf.vue'),

  },
  {
    path: '/sectionRes',
    name: 'sectionRes',
    meta: {
      title: '部门维护结果'
    },
    component: () => import('@/views/parammanagement/sectionservice/sectionRes.vue'),

  },
  {
    path: '/sectionModify',
    name: 'sectionModify',
    meta: {
      title: '部门修改'
    },
    component: () => import('@/views/parammanagement/sectionservice/sectionModify.vue'),

  },
  {
    path: '/sectionDel',
    name: 'sectionDel',
    meta: {
      title: '部门删除'
    },
    component: () => import('@/views/parammanagement/sectionservice/sectionDel.vue'),

  },
  {
    path: '/sectionDelRes',
    name: 'sectionDelRes',
    meta: {
      title: '部门删除结果页'
    },
    component: () => import('@/views/parammanagement/sectionservice/sectionDelRes.vue'),

  },
  // 审批菜单维护
  {
    path: '/menuService',
    name: 'menuService',
    meta: {
      title: '审批菜单维护'
    },
    component: () => import('@/views/parammanagement/menuservice/menuService.vue'),

  },
  {
    path: '/menuServiceConf',
    name: 'menuServiceConf',
    meta: {
      title: '审批菜单维护'
    },
    component: () => import('@/views/parammanagement/menuservice/menuServiceConf.vue'),

  },
  {
    path: '/menuServiceRes',
    name: 'menuServiceRes',
    meta: {
      title: '审批菜单维护结果页'
    },
    component: () => import('@/views/parammanagement/menuservice/menuServiceRes.vue'),

  },

]
