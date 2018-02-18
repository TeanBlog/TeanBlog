'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
  async login() {
    const { ctx } = this;
    console.log(ctx.session)
    await ctx.render('page/admin/login.tpl');
  }
}

module.exports = AdminController;
