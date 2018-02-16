'use strict';

module.exports = {
  egg:       true,
  framework: 'vue',
  entry:     {
    include: [ 'app/web/page',
      { 'app/app': 'app/web//app.js?loader=false' }
    ],
    exclude: [ 'app/web/page/[a-z]+/component', 'app/web/page' ],
    loader:  {
      client: 'app/web/framework/vue/entry/client-loader.js',
      server: 'app/web/framework/vue/entry/server-loader.js',
    }
  },
  loaders: {
    eslint: {
      options: {
        fix: true
      }
    }
  },
  alias: {
    app:       'app/web/framework/vue/app.js',
    asset:     'app/web/asset',
    component: 'app/web/component',
    framework: 'app/web/framework',
    store:     'app/web/store',
    vue:       'vue/dist/vue.esm.js',
  },
  dll: [ 'vue', 'axios', 'vue-router', 'vuex', 'vuex-router-sync' ]
};