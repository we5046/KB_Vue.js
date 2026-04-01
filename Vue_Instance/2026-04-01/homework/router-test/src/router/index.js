import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/pages/Home.vue';
// import About from '@/pages/About.vue';
// import Members from '@/pages/Members.vue';
// import Videos from '@/pages/Videos.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/pages/About.vue'),
    },
    {
      path: '/members',
      name: 'members',
      component: () => import('@/pages/Members.vue'),
    },
    {
      path: '/videos',
      name: 'videos',
      component: () => import('@/pages/Videos.vue'),
    },
  ],
});

export default router;
