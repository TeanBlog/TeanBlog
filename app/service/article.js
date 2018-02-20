'use strict';

const uniqid = require('uniqid');
const Service = require('egg').Service;

class ArticleService extends Service {
  async insertOne(model) {
    const { ctx } = this;

    const article = await ctx.model.Article.create({
        id: uniqid(),
        title: model.title,
        content: model.content,
        created_at: new Date().toLocaleString(),
        updated_at: new Date().toLocaleString()
    });

    return article
  }
}

module.exports = ArticleService;
