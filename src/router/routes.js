import business from './modules/business'
import layoutHeaderAside from '@/layout/header-aside'
import home from './modules/home'
// 参数管理路由
import parammanagement from './modules/parammanagement'
// 业务管理
import businessmanagement from './modules/businessmanagement'
// 审批管理
import creditmanagement from './modules/creditmanagement'
// 行为分析
import behavioranalysis from './modules/behavioranalysis'
// 联盟圈
import unionlapmanagement from './modules/unionlapmanagement'
// 引入营销管理路由
import marketingmanage from './modules/marketingmanage'


// import header from './modules'
// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/utils/util.import.' + process.env.NODE_ENV)

// 导出需要显示菜单的
export const frameInRoutes = [
  {
    path: '/',
    redirect: { name: 'index' },
    component: layoutHeaderAside,
    children: [
      // 系统 前端日志
      {
        path: 'log',
        name: 'log',
        meta: {
          title: '前端日志',
          auth: false
        },
        component: _import('system/log')
      },

    ]
  },
  business,

]
/**
 * 在主框架内显示
 */
const frameIn = [
  {
    path: '/',
    redirect: { name: 'index' },
    component: layoutHeaderAside,
    children: [
      // 首页
      {
        path: 'index',
        name: 'index',
        redirect: { name: 'operatemanage' },
        meta: {
          auth: false,
          close: true
        },
        component: _import('system/index'),
        children: [
          {
            path: 'operatemanage',
            name: 'operatemanage',
            component: () => import('@/pages/system/operateManage.vue'),
            meta: {
              title: '操作员管理'
            }
          },
          {
            path: 'rolemanage',
            name: 'rolemanage',
            component: () => import('@/pages/system/roleManage.vue'),
            meta: {
              title: '角色管理'
            }
          },
          ...parammanagement,
          ...businessmanagement,
          ...creditmanagement,
          ...behavioranalysis,
          ...unionlapmanagement
        ]
      },
      // 系统 前端日志
      {
        path: 'blank',
        name: 'blank',
        meta: {
          title: '过渡页面',
          auth: false,
          close: true
        },
        component: _import('system/blank')
      },
      // 刷新页面 必须保留
      {
        path: 'refresh',
        name: 'refresh',
        meta: {
          auth: false
        },
        hidden: true,
        component: _import('system/function/refresh')
      },
      // 页面重定向 必须保留
      {
        path: 'redirect/:route*',
        name: 'redirect',
        meta: {
          auth: false
        },
        hidden: true,
        component: _import('system/function/redirect')
      },


      // 营销管理
      ...marketingmanage,
    ]
  },
  ...frameInRoutes,

]

/**
 * 在主框架之外显示
 */
const frameOut = [
  // 登录
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: _import('system/login')
  // },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/page.vue'),
    // component: _import('../pages/login/page.vue')
  }
]

/**
 * 错误页面
 */
const errorPage = [
  {
    path: '*',
    name: '404',
    component: _import('system/error/404')
  }
]

// 重新组织后导出
export default [
  ...frameIn,
  ...frameOut,
  ...errorPage
]
