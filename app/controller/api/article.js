'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
  async add() {
    const { ctx } = this;
    const model = ctx.request.body;

    console.log(model.title, 11111111111111111111111111)

    const result = await ctx.service.article.insertOne(model);

    ctx.body = {
      data: result
    }
    ctx.status = 201;
  }
}

module.exports = ArticleController;
