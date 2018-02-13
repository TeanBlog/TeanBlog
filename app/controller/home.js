'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;

    await ctx.render('app/app.js', {
      url: ctx.url.replace(/\//, '')
    });
  }
}

module.exports = HomeController;
