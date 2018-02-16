'use strict';

const Controller = require('egg').Controller;

class AdminRenderController extends Controller {
  async index() {
    const { ctx } = this;

    await ctx.render('app/app.js', {
      url: ctx.url.replace(/\/admin/, '')
    });
  }
}

module.exports = AdminRenderController;
