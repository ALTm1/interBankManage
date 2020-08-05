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
    redirect: { name: 'groupinfo' },
    component: () => import('@/views/report/group/group.vue'),
    meta: {
      title: '分组信息维护'
    },
    children: [
      {
        path: 'groupinfo',
        name: 'groupinfo',
        component: () => import('@/views/report/group/groupInfo.vue'),
        meta: {
          title: '分组信息维护'
        }
      },
      {
        path: 'groupmodify',
        name: 'groupmodify',
        component: () => import('@/views/report/group/groupModify.vue'),
        meta: {
          title: '分组信息维护修改'
        }
      },
      {
        path: 'modifyconfirm',
        name: 'modifyconfirm',
        component: () => import('@/views/report/group/modifyConfirm.vue'),
        meta: {
          title: '分组信息维护修改确认'
        }
      },
      {
        path: 'groupadd',
        name: 'groupadd',
        component: () => import('@/views/report/group/groupAdd.vue'),
        meta: {
          title: '新增分组录入'
        }
      },
      {
        path: 'groupresult',
        name: 'groupresult',
        component: () => import('@/views/report/group/groupResult.vue'),
        meta: {
          title: '分组新增结果页'
        }
      },
    ]
  },

]