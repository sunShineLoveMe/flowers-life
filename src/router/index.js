import Vue from 'vue';
import Router from 'vue-router';

import goods from './../components/goods/goods';
import seller from './../components/seller/seller';
import ratings from './../components/ratings/ratings';

Vue.use(Router);

const routes = [
  {
    path: '/goods',
    component: goods,
  },
  {
    path: '/seller',
    component: seller,
  },
  { path: '/ratings',
    component: ratings,
  },
];

const router = new Router({
  routes,
  linkActiveClass: 'active',
});

export default router;
