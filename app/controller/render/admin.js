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
    const id = ctx.params.id;
    let resourceData = {};

    if (id) {
      resourceData = await ctx.service.article.findById(id);
    }

    await ctx.render('page/admin/article.tpl', { resourceData });
  }

  async manage() {
    const { ctx } = this;
    const page = Number(ctx.params.page);
    const size = 10; // 默认

    const resourceData = await ctx.service.article.findAll(page, size);
    resourceData.current = page;

    await ctx.render('page/admin/manage.tpl', { resourceData });
  }
}

module.exports = AdminController;
