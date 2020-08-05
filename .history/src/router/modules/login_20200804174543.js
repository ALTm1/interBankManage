export default [
  {
    path: 'loginreset',
    name: 'loginreset',
    component: () => import('@/pages/login/loginReset.vue'),
    meta: {
      title: '登录密码重置'
    }
  },
  {
    path: 'resetresult',
    name: 'resetresult',
    component: () => import('@/pages/login/resetResult.vue'),
    meta: {
      title: '登录密码重置'
    }
  },
  {
    path: 'password',
    name: 'password',
    redirect: { name: 'modify' },
    component: () => import('@/pages/login/password/password.vue'),
    meta: {
      title: '登录密码重置'
    },
    children:[
      {
        path: 'modify',
        name: 'modify',
        component: () => import('@/pages/login/password/modify.vue'),
        meta: {
          title: '登录密码修改'
        }
      },
    ]
  },
]
