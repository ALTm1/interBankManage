/*
 * @Author: your name
 * @Date: 2020-07-31 10:38:23
 * @LastEditTime: 2020-07-31 18:15:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankManage\src\router\modules\approvalmanage.js
 */

export default [
  // 机构认证审批
  {
    path: '/approvalmanage/organapprove/organapproveindex',
    name: 'organapproveindex',
    component: () => import('@/views/approvalmanage/organapprove/OrganApproveIndex'),
    meta: {
      title: '机构认证'
    }
  },
  {
    path: '/approvalmanage/organapprove/organapproverecord',
    name: 'organapproverecord',
    component: () => import('@/views/approvalmanage/organapprove/OrganApproveRecord'),
    meta: {
      title: '机构认证审批录入'
    }
  },
  {
    path: '/approvalmanage/organapprove/organapproveconfirm',
    name: 'organapproveconfirm',
    component: () => import('@/views/approvalmanage/organapprove/OrganApproveConfirm'),
    meta: {
      title: '机构认证审批确认'
    }
  },
  {
    path: '/approvalmanage/organapprove/organapprovesucc',
    name: 'organapprovesucc',
    component: () => import('@/views/approvalmanage/organapprove/OrganApproveSucc'),
    meta: {
      title: '机构认证审批成功'
    }
  },
  // 后管交易审批
  {
    path: '/approvalmanage/backmanapprove/backmanapproveindex',
    name: 'backmanapproveindex',
    component: () => import('@/views/approvalmanage/backmanapprove/BackManApproveIndex'),
    meta: {
      title: '后管交易'
    }
  },
  {
    path: '/approvalmanage/backmanapprove/backManapproverecord',
    name: 'backManapproverecord',
    component: () => import('@/views/approvalmanage/backmanapprove/BackManApproveRecord'),
    meta: {
      title: '后管交易审批录入'
    }
  },
  {
    path: '/approvalmanage/backmanapprove/backmanapproveconfirm',
    name: 'backmanapproveconfirm',
    component: () => import('@/views/approvalmanage/backmanapprove/BackManApproveConfirm'),
    meta: {
      title: '后管交易审批确认'
    }
  },
  {
    path: '/approvalmanage/backmanapprove/backmanapprovesucc',
    name: 'backmanapprovesucc',
    component: () => import('@/views/approvalmanage/backmanapprove/BackManApproveSucc'),
    meta: {
      title: '后管交易审批结果'
    }
  },
  // 审批记录查询
  {
    path: '/approvalmanage/approvalrecord/approvalrecordqry',
    name: 'approvalrecordqry',
    component: () => import('@/views/approvalmanage/approvalrecord/ApprovalRecordQry'),
    meta: {
      title: '审批记录查询'
    }
  },
  {
    path: '/approvalmanage/approvalrecord/approvalrecorddetail',
    name: 'approvalrecorddetail',
    component: () => import('@/views/approvalmanage/approvalrecord/ApprovalRecordDetail'),
    meta: {
      title: '审批记录详情'
    }
  },
]