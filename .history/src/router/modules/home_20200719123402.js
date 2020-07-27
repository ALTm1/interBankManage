export default {
    path: 'home',
    name: 'home',
    redirect: { name: 'demo-business-bankInner' },
    component: layoutHeaderAside,
    // children: ( [
    //   {
    //     path: 'bankInner',
    //     name: `${pre}bankInner`,
    //     component: _import('demo/business/BankInner/BankInnerPre.vue'),
    //     meta: {
    //         title: '首页',
    //         auth: false
    //       },
    //   }
    // ])
  }