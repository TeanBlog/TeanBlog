'use strict';

const Controller = require('egg').Controller;

class IndexController extends Controller {
  async home() {
    const { ctx } = this;

    const mockData = {
      banner: {
        title: '主页',
        secTitle: '主页副标题',
      },
    };

    await ctx.render('page/tean/home.tpl', mockData);
  }
}

module.exports = IndexController;
