'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;

    const result = await ctx.service.home.get();

    ctx.body = {
      result
    };
  }

  async test() {
    const dataList = {
      list: [
        { id: 1, title: 'this is news 1', url: '/news/1' },
        { id: 2, title: 'this is news 2', url: '/news/2' }
      ]
    };
    await this.ctx.render('test.tpl', dataList);
  }
}

module.exports = HomeController;
