// Just a mock data

const constantRoutes = [
  {
    path: '/redirect',
    component: 'layout/Layout',
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: 'views/redirect/index'
      }
    ]
  },
  {
    path: '/login',
    component: 'views/login/index',
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: 'views/login/auth-redirect',
    hidden: true
  },
  {
    path: '/404',
    component: 'views/error-page/404',
    hidden: true
  },
  {
    path: '/401',
    component: 'views/error-page/401',
    hidden: true
  },
  {
    path: '',
    component: 'layout/Layout',
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: 'views/dashboard/index',
        name: 'Dashboard',
        meta: { title: '首页', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/table',
    component: 'layout/Layout',
    children: [
      {
        path: 'index',
        component: 'views/table/index',
        name: 'Table',
        meta: { title: '列表', icon: 'table' }
      }
    ]
  }
]

const asyncRoutes = [
  {
    path: '/sysPermission',
    component: 'layout/Layout',
    redirect: '/sysPermission/page',
    alwaysShow: true,
    meta: {
      title: '系统管理',
      icon: 'lock',
      roles: ['admin', 'editor']
    },
    children: [
      {
        path: 'page',
        component: 'views/permission/page',
        name: 'PagePermission',
        meta: {
          title: '角色切换页面'
        }
      },
      {
        path: 'directive',
        component: 'views/permission/directive',
        name: 'DirectivePermission',
        meta: {
          title: '通用页面',
          roles: ['admin', 'editor']
        }
      },
      {
        path: 'role',
        component: 'views/permission/role',
        name: 'RolePermission',
        meta: {
          title: '角色管理',
          roles: ['admin']
        }
      }
    ]
  },
  {
    path: '/charts',
    component: 'layout/Layout',
    redirect: 'noRedirect',
    name: 'Charts',
    alwaysShow: true,
    meta: {
      title: '图表管理',
      icon: 'chart'
    },
    children: [
      {
        path: 'line',
        component: 'views/charts/line',
        name: 'LineChart',
        meta: { title: '折线图', noCache: true }
      },
      {
        path: 'mix-chart',
        component: 'views/charts/mix-chart',
        name: 'MixChart',
        meta: { title: '综合图表', noCache: true }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

module.exports = {
  constantRoutes,
  asyncRoutes
}
