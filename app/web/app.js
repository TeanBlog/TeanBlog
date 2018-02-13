import { sync } from 'vuex-router-sync';
import store from './store';
import router from './router';
import app from './app.vue';
import App from 'app';
import Layout from './component/layout/index';

App.component(Layout.name, Layout);

sync(store, router);

export default App.init({
  ...app,
  router,
  store
});
