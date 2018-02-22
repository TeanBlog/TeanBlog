'use strict';

const marked = require('marked');
const Controller = require('egg').Controller;

class IndexController extends Controller {
  // 主页
  async home() {
    const { ctx } = this;
    const resourceData = {};

    const articles = await ctx.service.article.findAll(1, 5);
    resourceData.articles = articles.rows;
    resourceData.config = ctx.app.config.renderData;

    await ctx.render('page/tean/home.tpl', { resourceData });
  }

  // 博客页
  async blog() {
    const { ctx } = this;
    const resourceData = {};

    const articles = await ctx.service.article.findAll(0, 0);
    resourceData.articles = articles.rows;
    resourceData.config = ctx.app.config.renderData;

    await ctx.render('page/tean/blog.tpl', { resourceData });
  }

  // 文章页
  async article() {
    const { ctx } = this;
    const id = ctx.params.id;

    const resourceData = await ctx.service.article.findById(id);

    resourceData.content = marked(resourceData.content);
    resourceData.config = ctx.app.config.renderData;

    await ctx.render('page/tean/article.tpl', { resourceData });
  }

  // 友链页
  async links() {
    const { ctx } = this;

    const resourceData = {};
    resourceData.config = ctx.app.config.renderData;

    await ctx.render('page/tean/links.tpl', { resourceData });
  }

  // 关于页
  async about() {
    const { ctx } = this;

    const resourceData = {};
    resourceData.config = ctx.app.config.renderData;

    await ctx.render('page/tean/about.tpl', { resourceData });
  }

  // 404
  async notFound() {
    const { ctx } = this;

    await ctx.render('page/tean/404.tpl');
  }

  // error
  async error() {
    const { ctx } = this;

    await ctx.render('page/tean/error.tpl');
  }
}

module.exports = IndexController;
