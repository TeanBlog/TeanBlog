'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
  async add() {
    const { ctx } = this;
    const model = ctx.request.body;

    await ctx.service.article.insertOne(model);

    ctx.body = {
      msg: '新增成功',
    };
    ctx.status = 201;
  }
}

module.exports = ArticleController;
