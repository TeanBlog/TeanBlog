import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);


const TeanHome = () => import('../page/home');


const router = new VueRouter({
  mode:            'history',
  linkActiveClass: 'current',
  base:            '/admin',
  routes:          [
    { path: '/', component: TeanHome }
  ]
});

export default router;
