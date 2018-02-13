'use strict';

/**
 * 默认配置
 * @param  {Egg.Application} app - Egg.js 应用
 * @return {Object} confug - 默认配置项
 */
module.exports = app => {
  const config = exports = {};
  const path = require('path');

  // appKey (example)
  config.keys = app.name + '123456';

  // middleware
  config.middleware = [];

  // view
  exports.view = {
    cache: false
  };

  exports.vuessr = {
    layout:        path.join(app.baseDir, 'app/web/view/layout.html'),
    renderOptions: {
      basedir: path.join(app.baseDir, 'app/view')
    }
  };

  // static
  config.static = {
    prefix: '/public/',
    dir:    path.join(app.baseDir, 'public')
  };

  return config;
};
