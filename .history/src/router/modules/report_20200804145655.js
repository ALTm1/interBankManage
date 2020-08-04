export default [
    {
        path: 'personalbill',
        name: 'personalbill',
        component: () => import('@/views/report/personalBill.vue'),
        meta: {
          title: '个人票据统计'
        }
    },
    {
        path: 'teambill',
        name: 'teambill',
        component: () => import('@/views/report/teamBill.vue'),
        meta: {
          title: '团队票据统计'
        }
    },
    {
      path: 'group',
      name: 'group',
      component: () => import('@/views/report/group/group.vue'),
      meta: {
        title: '团队票据统计'
      }
  },
    {
        path: 'groupinfo',
        name: 'groupinfo',
        component: () => import('@/views/report/group/groupInfo.vue'),
        meta: {
          title: '团队票据统计'
        }
    },
    {
        path: 'groupadd',
        name: 'groupadd',
        component: () => import('@/views/report/group/groupAdd.vue'),
        meta: {
          title: '团队票据统计'
        }
    },
  ]