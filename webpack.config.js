'use strict';

module.exports = {
  egg:       true,
  framework: 'vue',
  entry:     { 'app/app': 'app/web/app.js' },
  alias:     {
    app:       'app/web/framework/vue/app.js',
    asset:     'app/web/asset',
    component: 'app/web/component',
    framework: 'app/web/framework',
    store:     'app/web/store',
    vue:       'vue/dist/vue.esm.js',
  },
  dll:     [ 'vue', 'axios', 'vue-router', 'vuex', 'vuex-router-sync' ],
  loaders: {},
  plugins: {},
  done() {

  }
};