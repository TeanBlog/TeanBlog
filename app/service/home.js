'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async get() {
    const results = await this.app.mysql.select('posts');
    return results;
  }
}

module.exports = HomeService;
