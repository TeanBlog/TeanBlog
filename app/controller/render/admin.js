'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
  async login() {
    const { ctx } = this;

    await ctx.render('page/admin/login.tpl');
  }

  async home() {
    const { ctx } = this;

    await ctx.render('page/admin/home.tpl');
  }

  async article() {
    const { ctx } = this;

    await ctx.render('page/admin/article.tpl');
  }

  async manage() {
    const { ctx } = this;

    await ctx.render('page/admin/manage.tpl');
  }
}

module.exports = AdminController;
