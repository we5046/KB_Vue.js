import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import TodoList from '@/pages/TodoList.vue';
import AddTodo from '@/pages/AddTodo.vue';
import EditTodo from '@/pages/EditTodo.vue';
import NotFound from '@/pages/NotFound.vue';

// 실제로는, 필요할때 불러오는 방식으로 하는게 좋음.
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/todos' },
    // { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/todos', name: 'todos', component: TodoList },
    { path: '/todos/add', component: AddTodo },
    { path: '/todos/edit/:id', component: EditTodo },
    // 위에서 부터 아래로 조사를 해서
    // 마지막까지 없다면, 404페이지로 이동하라는 의미
    { path: '/:paths(.*)*', component: NotFound },
  ],
});

export default router;
