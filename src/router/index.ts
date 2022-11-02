import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/comp',
    name: 'comp',
    meta: {
      title: '组件',
      keepAlive: true,
      requireAuth: false
    },
    component: () => import('@/pages/comp.vue')
  },
  {
    path: '/',
    name: 'Index',
    meta: {
      title: '首页',
      keepAlive: true,
      requireAuth: true
    },
    component: () => import('@/pages/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;