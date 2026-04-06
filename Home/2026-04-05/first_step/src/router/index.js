import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/pages/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/list',
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/pages/About.vue'),
    },
    {
      path: '/list',
      component: () => import('@/pages/PostList.vue'),
    },
    {
      path: '/detail/:id',
      component: () => import('@/pages/PostDetail.vue'),
    },
    {
      path: '/write',
      component: () => import('@/pages/PostWrite.vue'),
    },
  ],
});

export default router;
