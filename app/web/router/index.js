import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);


const TeanHome = () => import('../page/home');
const TeanAbout = () => import('../page/about');


const router = new VueRouter({
  mode:            'history',
  linkActiveClass: 'current',
  base:            '/',
  routes:          [
    { path: '/', component: TeanHome },
    { path: '/about', component: TeanAbout }
  ]
});

export default router;
