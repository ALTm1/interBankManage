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
          title: '登录密码重置'
        }
    },
    
  ]