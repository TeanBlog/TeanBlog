import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);


const TeanHome = () => import('../page/home');
const TeanAbout = () => import('../page/about');
const Admin = () => import('../page/admin/layout');


const router = new VueRouter({
  mode:            'history',
  linkActiveClass: 'current',
  base:            '/admin/',
  routes:          [
    { path: '/', component: TeanHome },
    { path: '/about', component: TeanAbout },
    { path: '/admin', component: Admin }
  ]
});

export default router;
