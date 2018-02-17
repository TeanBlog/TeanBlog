import Vue from 'vue'
import Router from 'vue-router'
import Home from '../view/page/home.vue'
import Test from '../view/page/test.vue'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/aaa',
      name: 'test',
      component: Test,
    }
  ]
})

export default router
