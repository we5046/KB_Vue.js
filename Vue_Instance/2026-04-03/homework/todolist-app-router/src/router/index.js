import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/pages/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: HomeView,
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/pages/Home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/pages/About.vue'),
    },
    {
      path: '/TodoList',
      name: 'todoList',
      component: () => import('@/pages/TodoList.vue'),
    },
    {
      path: '/AddTodo',
      name: 'addTodo',
      component: () => import('@/pages/AddTodo.vue'),
    },
    {
      path: '/EditTodo',
      name: 'editTodo',
      component: () => import('@/pages/EditTodo.vue'),
    },
    {
      path: '/:paths(.*)*',
      name: 'notFound',
      component: () => import('@/pages/NotFound.vue'),
    },
  ],
});

export default router;
