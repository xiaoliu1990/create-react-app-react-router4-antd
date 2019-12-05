import asyncComponent from 'components/AsyncComponent';

export default [
  { 
    path: '/',
    exact: true,
    meta: {
      title: '首页'
    },
    component: asyncComponent(() => import('./Index'))
  },
  {
    path: '/Annual',
    exact:true,
    meta: {
      title: '个人面板'
    },
    component: asyncComponent(() => import('./Annual'))
  },
  {
    path: '/Annual/:id',
    meta: {
      title: '面板详情'
    },
    component: asyncComponent(() => import('./Details'))
  },
  {
    path: '/Doctor',
    meta: {
      title: '医生面板'
    },
    component: asyncComponent(() => import('./Doctor'))
  }

]