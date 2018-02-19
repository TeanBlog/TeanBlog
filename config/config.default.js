'use strict';

/**
 * 默认配置
 * @param  {Egg.Application} app - Egg.js 应用
 * @return {Object} confug - 默认配置项
 */
module.exports = app => {
  const config = exports = {};

  // appKey (example)
  config.keys = app.name + '123456';

  // middleware
  config.middleware = [
    'responseHandler',
    'errorHandler',
  ];

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
    },
  };

  // security
  config.security = {
    methodnoallow: {
      enable: false,
    },
    csrf: {
      enable: false,
    },
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

  // response_hander
  config.responseHandler = {
    enable: true,
    match: [
      /\/api/,
    ],
  };

  // jwt
  config.jwt = {
    enable: true,
    key: 'user',
    match: [
      /\/api/,
      /(?!.*\/login)^.*$/
    ],
  };

  return config;
};
