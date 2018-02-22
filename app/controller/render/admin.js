'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
  // 登录页面渲染
  async login() {
    const { ctx } = this;
    const resourceData = {};
    resourceData.config = ctx.app.config.renderData;

    await ctx.render('page/admin/login.tpl', { resourceData });
  }

  // 撰写编辑页面渲染
  async article() {
    const { ctx } = this;
    const id = ctx.params.id;
    let resourceData = {};

    if (id) {
      resourceData = await ctx.service.article.findById(id);
    }
    resourceData.config = ctx.app.config.renderData;

    await ctx.render('page/admin/article.tpl', { resourceData });
  }

  // 文章管理页面渲染
  async manage() {
    const { ctx } = this;
    const page = Number(ctx.params.page);
    const size = 10; // 默认

    const resourceData = await ctx.service.article.findAll(page, size);
    resourceData.current = page;
    resourceData.config = ctx.app.config.renderData;

    await ctx.render('page/admin/manage.tpl', { resourceData });
  }
}

module.exports = AdminController;
