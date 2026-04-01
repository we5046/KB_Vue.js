import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import CourseList from '@/pages/CourseList.vue';
import CourseDetail from '@/pages/CourseDetail.vue';
import StudentList from '@/pages/StudentList.vue';
import StudentDetail from '@/pages/StudentDetail.vue';
import Search from '@/pages/Search.vue';
import NotFound from '@/pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/courses',
      name: 'courses',
      component: CourseList,
    },
    {
      path: '/courses/:id',
      name: 'course-detail',
      component: CourseDetail,
      props: true,
    },
    {
      path: '/students',
      name: 'students',
      component: StudentList,
    },
    {
      path: '/students/:id',
      name: 'student-detail',
      component: StudentDetail,
      props: true,
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
    },
    {
      path: '/main',
      redirect: '/',
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound,
    },
  ],
});

router.beforeEach((to, from, next) => {
  console.log('이동 전:', from.fullPath, '->', to.fullPath);
  next();
});

export default router;
