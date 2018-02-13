import Vue from 'vue';
import VueRouter from 'vue-router';
import TeanHome from '../page/home';
import TeanAbout from '../page/about';


Vue.use(VueRouter);

const router = new VueRouter({
  mode:   'history',
  base:   '/',
  routes: [
    {
      path:      '/',
      name:      'tean-home',
      component: TeanHome
    }, {
      path:      '/about',
      name:      'tean-about',
      component: TeanAbout
    }
  ]
});

export default router;