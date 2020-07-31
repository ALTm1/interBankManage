

export default [
  /***
   * 授信管理
   * 
    */
  {
    path: '/lineCreditQuery',
    name: 'lineCreditQuery',
    meta: {
      title: '授信额度查询'
    },
    component: () => import('@/views/creditManagement/lineCreditQuery.vue'),
  },
  {
    path: '/creditFilesManagement',
    name: 'creditFilesManagement',
    meta: {
      title: '授信额度查询'
    },
    component: () => import('@/views/creditManagement/creditFilesManagement.vue'),
  },


]
