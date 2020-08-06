

export default [
  /***
   * 授信管理
   * 
    */
  {
    path: 'creditManage',
    name: "creditManage",
    redirect: { name: 'lineCreditQuery' },
    component: () => import('@/views/creditmanagement/creditManage.vue'),
    children: [
      {
        path: '/lineCreditQuery',
        name: 'lineCreditQuery',
        meta: {
          title: '授信额度查询'
        },
        component: () => import('@/views/creditmanagement/lineCreditQuery.vue'),
      },
      {
        path: '/creditFilesManagement',
        name: 'creditFilesManagement',
        meta: {
          title: '授信文件管理'
        },
        component: () => import('@/views/creditmanagement/creditFilesManagement.vue'),
      },
    ]
  }
]
