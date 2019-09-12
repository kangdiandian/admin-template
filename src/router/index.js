import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/Home.vue';
import Layout from '@/views/layout/Layout';

Vue.use(Router);

const _import =
  process.env.NODE_ENV === 'production'
    ? file => import(`@/views/${file}.vue`)
    : file => require(`@/views/${file}.vue`).default;

export const constantRouterMap = [
  {
    path: '',
    component: Layout,
    redirect: 'home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: _import('Home'),
        meta: {
          title: '首页',
        },
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: _import('Login'),
    children: [],
  },
];

export default new Router({
  mode: 'history',
  base: '',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap,
});

export const asyncRouterMap = [
  {
    path: '/about',
    component: Layout,
    redirect: 'noredirect',
    name: 'about',
    meta: {
      title: '相关',
    },
    children: [
      {
        path: 'page',
        name: 'about-page',
        component: () => import('@/views/About.vue'),
        meta: {
          title: '相关页面',
        },
      },
    ],
  },
];
