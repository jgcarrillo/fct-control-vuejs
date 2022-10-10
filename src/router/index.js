import { createRouter, createWebHistory } from 'vue-router';

import TasksView from '../views/TasksView.vue';
import AboutView from '../views/AboutView.vue';
import NotFoundView from '../views/NotFoundView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: TasksView,
      meta: {
        title: 'Home - FCT',
      },
    },
    {
      path: '/about',
      component: AboutView,
      meta: {
        title: 'About',
      },
    },
    {
      path: '/:notFound(.*)',
      component: NotFoundView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
