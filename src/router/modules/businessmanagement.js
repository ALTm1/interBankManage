

export default [

  // 业务管理
  {
    path: 'businessManagement',
    name: "businessManagement",
    redirect: { name: 'outBankInfoMaintain' },
    component: () => import('@/views/businessmanagement/businessManagement.vue'),
    children: [
      {
        path: '/outBankInfoMaintain',
        name: 'outBankInfoMaintain',
        meta: {
          title: '行外机构信息维护'
        },
        component: () => import('@/views/businessmanagement/outbank/outBankInfoMaintain.vue'),
      },
      {
        path: '/infoDetail',
        name: 'infoDetail',
        meta: {
          title: '行外机构信息详情'
        },
        component: () => import('@/views/businessmanagement/outbank/infoDetail.vue'),
      },
      {
        path: '/addRecording',
        name: 'addRecording',
        meta: {
          title: '行外机构信息补录'
        },
        component: () => import('@/views/businessmanagement/outbank/addRecording.vue'),
      },
      {
        path: '/recordingRes',
        name: 'recordingRes',
        meta: {
          title: '行外机构信息补录结果页'
        },
        component: () => import('@/views/businessmanagement/outbank/recordingRes.vue'),
      },
      {
        path: '/organCancel',
        name: 'organCancel',
        meta: {
          title: '行外机构信息补录'
        },
        component: () => import('@/views/businessmanagement/outbank/organCancel.vue'),
      },
      {
        path: '/organCancelRes',
        name: 'organCancelRes',
        meta: {
          title: '行外机构信息补录结果页'
        },
        component: () => import('@/views/businessmanagement/outbank/organCancelRes.vue'),
      },
      /**
       * 用户管理
       */
      {
        path: '/userQuery',
        name: 'userQuery',
        meta: {
          title: '用户查询'
        },
        component: () => import('@/views/businessmanagement/usermanage/userQuery.vue'),
      },
      {
        path: '/userDetail',
        name: 'userDetail',
        meta: {
          title: '用户详情'
        },
        component: () => import('@/views/businessmanagement/usermanage/userDetail.vue'),
      },
      {
        path: '/handleConf',
        name: 'handleConf',
        meta: {
          title: '操作确认页'
        },
        component: () => import('@/views/businessmanagement/usermanage/handleConf.vue'),
      },
      {
        path: '/handleRes',
        name: 'handleRes',
        meta: {
          title: '操作结果页'
        },
        component: () => import('@/views/businessmanagement/usermanage/handleRes.vue'),
      },
      {
        path: '/passResetRes',
        name: 'passResetRes',
        meta: {
          title: '密码重置结果页'
        },
        component: () => import('@/views/businessmanagement/usermanage/passResetRes.vue'),
      },
      /***
       * 产品维护
       */
      {
        path: '/productQuery',
        name: 'productQuery',
        meta: {
          title: '产品查询'
        },
        component: () => import('@/views/businessmanagement/productmaintence/productQuery.vue'),
      },
      {
        path: '/productDetail',
        name: 'productDetail',
        meta: {
          title: '产品查询详情'
        },
        component: () => import('@/views/businessmanagement/productmaintence/productDetail.vue'),
      },
      {
        path: '/soldOut',
        name: 'soldOut',
        meta: {
          title: '下架确认'
        },
        component: () => import('@/views/businessmanagement/productmaintence/soldOut.vue'),
      },
      {
        path: '/soldOutRes',
        name: 'soldOutRes',
        meta: {
          title: '下架确认结果页'
        },
        component: () => import('@/views/businessmanagement/productmaintence/soldOutRes.vue'),
      },
      /***
       * 文件管理
       */
      {
        path: '/filesManagement',
        name: 'filesManagement',
        meta: {
          title: '文件管理'
        },
        component: () => import('@/views/businessmanagement/filesmanagement/filesManagement.vue'),
      },
      {
        path: '/filesDetail',
        name: 'filesDetail',
        meta: {
          title: '文件详情'
        },
        component: () => import('@/views/businessmanagement/filesmanagement/filesDetail.vue'),
      },
      {
        path: '/filesAdd',
        name: 'filesAdd',
        meta: {
          title: '文件新增'
        },
        component: () => import('@/views/businessmanagement/filesmanagement/filesAdd.vue'),
      },
      {
        path: '/filesAddConf',
        name: 'filesAddConf',
        meta: {
          title: '文件新增'
        },
        component: () => import('@/views/businessmanagement/filesmanagement/filesAddConf.vue'),
      },
      {
        path: '/filesAddRes',
        name: 'filesAddRes',
        meta: {
          title: '文件新增'
        },
        component: () => import('@/views/businessmanagement/filesmanagement/filesAddRes.vue'),
      },
      {
        path: '/filesModify',
        name: 'filesModify',
        meta: {
          title: '文件修改'
        },
        component: () => import('@/views/businessmanagement/filesmanagement/filesModify.vue'),
      },
      {
        path: '/filesModifyConf',
        name: 'filesModifyConf',
        meta: {
          title: '文件新增'
        },
        component: () => import('@/views/businessmanagement/filesmanagement/filesModifyConf.vue'),
      },
      {
        path: '/filesModifyRes',
        name: 'filesModifyRes',
        meta: {
          title: '文件修改结果'
        },
        component: () => import('@/views/businessmanagement/filesmanagement/filesModifyRes.vue'),
      },
      {
        path: '/filesDelConf',
        name: 'filesDelConf',
        meta: {
          title: '文件新增'
        },
        component: () => import('@/views/businessmanagement/filesmanagement/filesDelConf.vue'),
      },
      {
        path: '/filesDelRes',
        name: 'filesDelRes',
        meta: {
          title: '文件修改结果'
        },
        component: () => import('@/views/businessmanagement/filesmanagement/filesDelRes.vue'),
      },
    ]
  }

]
