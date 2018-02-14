import Vue from 'vue';
import '../filter';
import '../directive';
import '../component';
import ProgressBar from '../../../component/progressBar.vue';

export default function (options) {
  const bar = new Vue(ProgressBar).$mount();
  if (process.browser) {
    document.body.appendChild(bar.$el);
  }
  Vue.prototype.$bar = bar;
  Vue.prototype.$http = require('axios');

  if (options.store) {
    options.store.replaceState(Object.assign({}, window.__INITIAL_STATE__, options.store.state));
  } else if (window.__INITIAL_STATE__) {
    options.data = Object.assign(window.__INITIAL_STATE__, options.data && options.data());
  }
  const app = new Vue(options);
  app.$mount('#app');
}
