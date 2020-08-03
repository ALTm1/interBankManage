export default [
    {
        path: 'operatemanage',
        name: 'operatemanage',
        component: () => import('@/pages/system/operateManage.vue'),
        meta: {
          title: '操作员管理'
        }
      },
      {
        path: 'rolemanage',
        name: 'rolemanage',
        component: () => import('@/pages/system/role/roleManage.vue'),
        meta: {
          title: '角色管理'
        }
      },
  ]