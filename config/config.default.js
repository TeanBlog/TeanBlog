'use strict';

const fs = require('fs');
const YAML = require('yamljs');

function loadYAMLFile (file) {
  return YAML.parse(fs.readFileSync(file).toString());
}

const _config = loadYAMLFile('config.local.yml');

/**
 * 默认配置
 * @param  {Egg.Application} app - Egg.js 应用
 * @return {Object} confug - 默认配置项
 */
module.exports = app => {
  const config = exports = {};

  // appKey (example)
  config.keys = app.name + _config._system.key;

  // middleware
  config.middleware = [
    'responseHandler',
    // 'errorHandler',
    'jwt',
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
      port: 8003,
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
    charset: 'utf8',
    dialectOptions: {
      collate: 'utf8_general_ci',
    },
    username: _config._system.db.username,
    password: _config._system.db.password
  };

  // response_hander
  config.responseHandler = {
    enable: true,
    match: [
      /\/api\//,
    ],
  };

  // jwt
  config.jwt = {
    enable: true,
    secret: _config._system.jwt,
    match: [
      /\/api\/admin/,
    ],
  };

  // gitalk
  config.gitalk = {
    enable: _config._gitalk.enable,
    clientId: _config._gitalk.clientId,
    clientSecret: _config._gitalk.clientSecret,
    repo: _config._gitalk.repo,
    owner: _config._gitalk.owner,
    admin: _config._gitalk.admin
  };

  // 错误处理
  config.onerror = {
    errorPageUrl: () => '/error'
  };

  // renderData
  config.renderData = {
    _name: _config._name,
    _desc: _config._desc,
    _home: _config._home,
    _blog: _config._blog,
    _link: _config._link,
    _about: _config._about,
    _gitalk: _config._gitalk
  }

  return config;
};
