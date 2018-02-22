'use strict';

const marked = require('marked');
const Controller = require('egg').Controller;

class IndexController extends Controller {
  async home() {
    const { ctx } = this;
    const resourceData = {};

    const articles = await ctx.service.article.findAll(1, 5);
    resourceData.articles = articles.rows;
    resourceData.config = ctx.app.config.renderData;

    await ctx.render('page/tean/home.tpl', { resourceData });
  }

  async blog() {
    const { ctx } = this;
    const resourceData = {};

    const articles = await ctx.service.article.findAll(0, 0);
    resourceData.articles = articles.rows;
    resourceData.config = ctx.app.config.renderData;

    await ctx.render('page/tean/blog.tpl', { resourceData });
  }

  async article() {
    const { ctx } = this;
    const id = ctx.params.id;

    const resourceData = await ctx.service.article.findById(id);

    resourceData.content = marked(resourceData.content);
    resourceData.config = ctx.app.config.renderData;

    await ctx.render('page/tean/article.tpl', { resourceData });
  }

  async links() {
    const { ctx } = this;

    const resourceData = {};
    resourceData.config = ctx.app.config.renderData;

    await ctx.render('page/tean/links.tpl', { resourceData });
  }

  async about() {
    const { ctx } = this;

    const resourceData = {};
    resourceData.config = ctx.app.config.renderData;

    await ctx.render('page/tean/about.tpl', { resourceData });
  }

  async notFound() {
    const { ctx } = this;
    const errorCode = ctx.params.real_status;

    await ctx.render('page/tean/404.tpl');
  }

  async error() {
    const { ctx } = this;
    const errorCode = ctx.params.real_status;

    await ctx.render('page/tean/error.tpl');
  }
}

module.exports = IndexController;
