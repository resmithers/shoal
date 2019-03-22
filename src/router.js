import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/discussion/:id',
      name: 'discussion',
      component: () => import('./views/Discussion.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('./views/Signup.vue'),
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('./views/Dashboard.vue'),
    },
  ],
});
