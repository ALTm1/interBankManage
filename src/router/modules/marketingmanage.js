

export default [
  // 会议管理
  {
    path: '/marketingmanage/meetingmanage',
    name: 'meetingindex',
    component: () => import('@/views/marketingmanage/meetingmanage/MeetingIndex'),
    children: [
      {
        path: '/meetingqry',
        name: 'meetingqry',
        component: () => import('@/views/marketingmanage/meetingmanage/MeetingQry'),
        meta: {
          title: '会议管理'
        }
      },
      {
        path: '/meetingdetail',
        name: 'meetingdetail',
        component: () => import('@/views/marketingmanage/meetingmanage/MeetingDetail'),
        meta: {
          title: '会议详情'
        }
      },
      {
        path: '/meetingmodify',
        name: 'meetingmodify',
        component: () => import('@/views/marketingmanage/meetingmanage/MeetingModify'),
        meta: {
          title: '会议修改录入'
        }
      },
      {
        path: '/meetingmodifyconfirm',
        name: 'meetingmodifyconfirm',
        component: () => import('@/views/marketingmanage/meetingmanage/MeetingModifyConfirm'),
        meta: {
          title: '会议修改确认'
        }
      },
      {
        path: '/meetingrepealconfirm',
        name: 'meetingrepealconfirm',
        component: () => import('@/views/marketingmanage/meetingmanage/MeetingRepealConfirm'),
        meta: {
          title: '会议撤销确认'
        }
      },
      {
        path: '/meetingdeleteconfirm',
        name: 'meetingdeleteconfirm',
        component: () => import('@/views/marketingmanage/meetingmanage/MeetingDeleteConfirm'),
        meta: {
          title: '会议删除确认'
        }
      },
      {
        path: '/mettingdeletesucc',
        name: 'mettingdeletesucc',
        component: () => import('@/views/marketingmanage/meetingmanage/MettingDeleteSucc'),
        meta: {
          title: '会议删除结果'
        }
      },
      {
        path: '/meetingincrease',
        name: 'meetingincrease',
        component: () => import('@/views/marketingmanage/meetingmanage/MeetindIncrease'),
        meta: {
          title: '会议新增录入'
        }
      },
      {
        path: '/meetingincreaseconfirm',
        name: 'meetingincreaseconfirm',
        component: () => import('@/views/marketingmanage/meetingmanage/MeetingIncreaseConfirm'),
        meta: {
          title: '会议新增确认'
        }
      },
    ]
  },

  // 培训管理
  {
    path: '/marketingmanage/trainingmanage',
    name: 'trainingindex',
    component: () => import('@/views/marketingmanage/trainingmanage/TrainingIndex'),
    children: [
      {
        path: '/trainingqry',
        name: 'trainingqry',
        component: () => import('@/views/marketingmanage/trainingmanage/TrainingQry'),
        meta: {
          title: '培训管理'
        }
      },
      {
        path: '/trainingdetail',
        name: 'trainingdetail',
        component: () => import('@/views/marketingmanage/trainingmanage/TrainingDetail'),
        meta: {
          title: '培训详情'
        }
      },
      {
        path: '/trainingmodify',
        name: 'trainingmodify',
        component: () => import('@/views/marketingmanage/trainingmanage/TrainingModify'),
        meta: {
          title: '培训修改录入'
        }
      },
      {
        path: '/trainingmodifyconfirm',
        name: 'trainingmodifyconfirm',
        component: () => import('@/views/marketingmanage/trainingmanage/TrainingModifyConfirm'),
        meta: {
          title: '培训修改确认'
        }
      },
      {
        path: '/trainingdeleteconfirm',
        name: 'trainingdeleteconfirm',
        component: () => import('@/views/marketingmanage/trainingmanage/TrainingDeleteConfirm'),
        meta: {
          title: '培训删除确认'
        }
      },
      {
        path: '/trainingdeletesucc',
        name: 'trainingdeletesucc',
        component: () => import('@/views/marketingmanage/trainingmanage/TrainingDeleteSucc'),
        meta: {
          title: '培训删除成功'
        }
      },
      {
        path: '/trainingincrease',
        name: 'trainingincrease',
        component: () => import('@/views/marketingmanage/trainingmanage/TrainingIncrease'),
        meta: {
          title: '培训新增录入'
        }
      },
      {
        path: '/trainingincreaseconfirm',
        name: 'trainingincreaseconfirm',
        component: () => import('@/views/marketingmanage/trainingmanage/TrainingIncreaseConfirm'),
        meta: {
          title: '培训新增确认'
        }
      },
    ]
  },

  // 机构动态管理
  {
    path: '/marketingmanage/organmanage',
    name: 'organindex',
    component: () => import('@/views/marketingmanage/organmanage/OrganIndex'),
    children: [
      {
        path: '/organqry',
        name: 'organqry',
        component: () => import('@/views/marketingmanage/organmanage/OrganQry'),
        meta: {
          title: '机构动态管理'
        }
      },
      {
        path: '/organdetail',
        name: 'organdetail',
        component: () => import('@/views/marketingmanage/organmanage/OrganDetail'),
        meta: {
          title: '机构动态详情'
        }
      },
      {
        path: '/organmodify',
        name: 'organmodify',
        component: () => import('@/views/marketingmanage/organmanage/OrganModify'),
        meta: {
          title: '机构动态修改录入'
        }
      },
      {
        path: '/organmodifyconfirm',
        name: 'organmodifyconfirm',
        component: () => import('@/views/marketingmanage/organmanage/OrganModifyConfirm'),
        meta: {
          title: '机构动态修改确认'
        }
      },
      {
        path: '/organdeleteconfirm',
        name: 'organdeleteconfirm',
        component: () => import('@/views/marketingmanage/organmanage/OrganDeleteConfirm'),
        meta: {
          title: '机构动态删除确认'
        }
      },
      {
        path: '/organdeletesucc',
        name: 'organdeletesucc',
        component: () => import('@/views/marketingmanage/organmanage/OrganDeleteSucc'),
        meta: {
          title: '机构动态删除成功'
        }
      },
      {
        path: '/organincrease',
        name: 'organincrease',
        component: () => import('@/views/marketingmanage/organmanage/OrganIncrease'),
        meta: {
          title: '机构动态新增录入'
        }
      },
      {
        path: '/organincreaseconfirm',
        name: 'organincreaseconfirm',
        component: () => import('@/views/marketingmanage/organmanage/OrganIncreaseConfirm'),
        meta: {
          title: '机构动态新增确认'
        }
      },
    ]
  },



  // 营销展示管理
  {
    path: '/marketingmanage/marketdismanage',
    name: 'marketdisindex',
    component: () => import('@/views/marketingmanage/marketdismanage/MarketDisIndex'),
    meta: {
      title: '营销展示管理'
    },
    children: [
      {
        path: '/advertisingbanner',
        name: 'advertisingbanner',
        meta: {
          title: '广告轮播图'
        },
        component: () => import('@/views/marketingmanage/marketdismanage/AdvertisingBanner'),
      },
      {
        path: '/prorecommend',
        name: 'prorecommend',
        meta: {
          title: '产品推荐'
        },
        component: () => import('@/views/marketingmanage/marketdismanage/ProRecommend'),
      },
      {
        path: '/productmodify',
        name: 'productmodify',
        meta: {
          title: '产品推荐修改录入'
        },
        component: () => import('@/views/marketingmanage/marketdismanage/ProductModify'),
      },
      {
        path: '/productmodifyconfirm',
        name: 'productmodifyconfirm',
        meta: {
          title: '产品推荐修改确认'
        },
        component: () => import('@/views/marketingmanage/marketdismanage/ProductModifyConfirm'),
      },
      {
        path: '/dynamiczone',
        name: 'dynamiczone',
        meta: {
          title: '动态专区'
        },
        component: () => import('@/views/marketingmanage/marketdismanage/DynamicZone'),
      },
    ]
  },
]