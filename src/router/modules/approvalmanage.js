

export default [
  // 机构认证审批
  {
    path: '/approvalmanage/organapprove',
    name: 'organapproveindex',
    component: () => import('@/views/approvalmanage/organapprove/OrganApproveIndex'),
    children: [
      {
        path: '/organapproveqry',
        name: 'organapproveqry',
        component: () => import('@/views/approvalmanage/organapprove/OrganApproveQry'),
        meta: {
          title: '机构认证'
        }
      },
      {
        path: '/organapproverecord',
        name: 'organapproverecord',
        component: () => import('@/views/approvalmanage/organapprove/OrganApproveRecord'),
        meta: {
          title: '机构认证审批录入'
        }
      },
      {
        path: '/organapproveconfirm',
        name: 'organapproveconfirm',
        component: () => import('@/views/approvalmanage/organapprove/OrganApproveConfirm'),
        meta: {
          title: '机构认证审批确认'
        }
      },
      {
        path: '/organapprovesucc',
        name: 'organapprovesucc',
        component: () => import('@/views/approvalmanage/organapprove/OrganApproveSucc'),
        meta: {
          title: '机构认证审批成功'
        }
      },
    ]
  },

  // 后管交易审批
  {
    path: '/approvalmanage/organapprove',
    name: 'organapproveindex',
    component: () => import('@/views/approvalmanage/organapprove/OrganApproveIndex'),
    children: [
      {
        path: '/backmanapproveqry',
        name: 'backmanapproveqry',
        component: () => import('@/views/approvalmanage/backmanapprove/BackManApproveQry'),
        meta: {
          title: '后管交易'
        }
      },
      {
        path: '/backManapproverecord',
        name: 'backManapproverecord',
        component: () => import('@/views/approvalmanage/backmanapprove/BackManApproveRecord'),
        meta: {
          title: '后管交易审批录入'
        }
      },
      {
        path: '/backmanapproveconfirm',
        name: 'backmanapproveconfirm',
        component: () => import('@/views/approvalmanage/backmanapprove/BackManApproveConfirm'),
        meta: {
          title: '后管交易审批确认'
        }
      },
      {
        path: '/backmanapprovesucc',
        name: 'backmanapprovesucc',
        component: () => import('@/views/approvalmanage/backmanapprove/BackManApproveSucc'),
        meta: {
          title: '后管交易审批结果'
        }
      },
    ]
  },

  // 审批记录查询
  {
    path: '/approvalmanage/approvalrecord',
    name: 'organapproveindex',
    component: () => import('@/views/approvalmanage/approvalrecord/ApprovalRecordIndex'),
    children: [
      {
        path: '/approvalrecordqry',
        name: 'approvalrecordqry',
        component: () => import('@/views/approvalmanage/approvalrecord/ApprovalRecordQry'),
        meta: {
          title: '审批记录查询'
        }
      },
      {
        path: '/approvalrecorddetail',
        name: 'approvalrecorddetail',
        component: () => import('@/views/approvalmanage/approvalrecord/ApprovalRecordDetail'),
        meta: {
          title: '审批记录详情'
        }
      },
    ]
  },
]