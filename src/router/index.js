import { createRouter, createWebHistory } from 'vue-router';

import TasksView from '../views/TasksView.vue';
import AboutView from '../views/AboutView.vue';
import NotFoundView from '../views/NotFoundView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: TasksView,
    },
    {
      path: '/about',
      component: AboutView,
    },
    {
      path: '/:notFound(.*)',
      component: NotFoundView,
    },
  ],
});

export default router;
