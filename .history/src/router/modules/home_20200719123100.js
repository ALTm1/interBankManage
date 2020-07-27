export default {
    path: '/demo/business',
    name: 'demo-business',
    redirect: { name: 'demo-business-bankInner' },
    component: layoutHeaderAside,
    children: (pre => [
      {
        path: 'bankInner',
        name: `${pre}bankInner`,
        component: _import('demo/business/BankInner/BankInnerPre.vue'),
        meta: ''
      }
    ])
  }