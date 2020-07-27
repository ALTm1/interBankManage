export default {
    path: '/demo/business',
    name: 'demo-business',
    meta,
    redirect: { name: 'demo-business-bankInner' },
    component: layoutHeaderAside,
    children: (pre => [
      {
        path: 'bankInner',
        name: `${pre}bankInner`,
        component: _import('demo/business/BankInner/BankInnerPre.vue'),
        meta: {
          ...meta,
          // 是否缓存组件
          cache: true,
          title: '行内转账'
        }
      }
    ])
  }