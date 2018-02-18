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
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  // cluster
  config.cluster = {
    listen: {
      port: 7001,
      hostname: '127.0.0.1',
    }
  }

  // session
  config.session = {
    key: 'TEAN_SESS',
    maxAge: 24 * 3600 * 1000, // 1 天
    httpOnly: true,
    encrypt: true,
  };

  // sequelize
  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'TeanBlog',
    host: '127.0.0.1',
    port: '3306',
    username: 'root',
    password: '',
  };

  return config;
};
