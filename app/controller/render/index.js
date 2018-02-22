'use strict';

const Controller = require('egg').Controller;

class IndexController extends Controller {
  // 主页面渲染
  async home() {
    const { ctx } = this;
    const resourceData = {};

    const articles = await ctx.service.article.findAll(1, 5);
    resourceData.articles = articles.rows;
    resourceData.config = ctx.app.config.renderData;

    await ctx.render('page/tean/home.tpl', { resourceData });
  }

  // 博客页面渲染
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

    resourceData.content = ctx.helper.md2html(resourceData.content);
    resourceData.created_at_beauty = ctx.helper.beautyTime(resourceData.created_at_beauty);
    resourceData.updated_at_beauty = ctx.helper.beautyTime(resourceData.updated_at_beauty);
    resourceData.config = ctx.app.config.renderData;

    await ctx.render('page/tean/article.tpl', { resourceData });
  }

  // 友链页面渲染
  async links() {
    const { ctx } = this;

    const resourceData = {};
    resourceData.config = ctx.app.config.renderData;

    await ctx.render('page/tean/links.tpl', { resourceData });
  }

  // 关于页面渲染
  async about() {
    const { ctx } = this;

    const resourceData = {};
    resourceData.config = ctx.app.config.renderData;

    await ctx.render('page/tean/about.tpl', { resourceData });
  }

  // JSON Feed
  async feed() {
    const { ctx } = this;

    const articles = await ctx.service.article.findAll(1, 5);

    ctx.body = ctx.helper.generationFeed(articles.rows);
  }

  // 404页面渲染
  async notFound() {
    const { ctx } = this;

    await ctx.render('page/tean/404.tpl');
  }

  // Error页面渲染
  async error() {
    const { ctx } = this;

    await ctx.render('page/tean/error.tpl');
  }
}

module.exports = IndexController;
