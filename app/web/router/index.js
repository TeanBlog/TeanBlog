import Vue from 'vue';
import VueRouter from 'vue-router';
import TeanHome from '../page/home';
// import TeanAbout from '../page/about';

Vue.use(VueRouter);


// const TeanHome = () => import('../page/home');
// const TeanHome = r => require.ensure([], () => r(require('../page/home')), 'tean-home');
// const TeanAbout = r => require.ensure([], () => r(require('../page/about')), 'tean-about');
const TeanAbout = () => import('../page/about');


const router = new VueRouter({
  mode:            'history',
  linkActiveClass: 'current',
  base:            '/',
  routes:          [
    {
      path:      '/',
      component: TeanHome
    }, {
      path:      '/about',
      component: TeanAbout
    }
  ]
});

export default router;
