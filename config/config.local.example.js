'use strict';

/**
 * 本地环境配置示例
 * @param  {Egg.Application} app - Egg.js 应用
 * @return {Object} confug - 本地环境配置项示例
 */
module.exports = app => {
  const config = exports = {};
  const EasyWebpack = require('easywebpack-vue');

  config.keys = app.name + '你的 appKey';

  // webpack
  exports.webpack = {
    webpackConfigList: EasyWebpack.getWebpackConfig(),
  };

  // development
  exports.development = {
    watchDirs: [ 'build' ], // 指定监视的目录（包括子目录），当目录下的文件变化的时候自动重载应用，路径从项目根目录开始写
    ignoreDirs: [ 'app/web', 'public', 'config' ], // 指定过滤的目录（包括子目录）
  };

  return config;
};
