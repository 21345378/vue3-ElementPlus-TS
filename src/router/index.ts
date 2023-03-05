import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'loginView',
    component: () => import('@/views/login/loginView.vue'),
    meta: { hiddenSide: true }
  },
  {
    path: '/layout',
    name: 'layoutView',
    component: () => import('@/views/layout/layoutView.vue'),
    meta: { hiddenSide: false },
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import("@/views/homeView/homeView.vue"),
        meta: { hiddenSide: false, name: '首页', icon: 'House' },
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
