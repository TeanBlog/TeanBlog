'use strict';

/**
 * 本地环境配置示例
 * @param  {Egg.Application} app - Egg.js 应用
 * @return {Object} confug - 本地环境配置项示例
 */
module.exports = app => {
  const config = exports = {};

  config.keys = app.name + '你的 key';

  // squelize
  config.sequelize = {
    username: '你的数据库账号',
    password: '你的数据库密码',
  };

  // jwt
  config.jwt = {
    secret: '你的 jwt 秘钥',
  };

  return config;
};
