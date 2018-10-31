import Vue from 'vue';
import Router from 'vue-router';
import Listings from '@/components/Listings';
import Admin from '@/components/Admin';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Listings',
      component: Listings,
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
    },
  ],
});
