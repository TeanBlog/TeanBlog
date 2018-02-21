'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
  async add() {
    const { ctx } = this;
    const model = ctx.request.body;
    const rule = {
      title: {
        type: 'string',
        min: 1,
      },
      content: {
        type: 'string',
        min: 1,
      },
    };

    ctx.validate(rule);
    await ctx.service.article.insertOne(model);

    ctx.body = {
      msg: '新增成功',
    };
    ctx.status = 201;
  }

  async delete() {
    const { ctx } = this;
    const id = ctx.query.id;

    await ctx.service.article.deleteOne(id);

    ctx.body = {
      msg: '删除成功',
    };
    ctx.status = 200;
  }

  async update() {
    const { ctx } = this;
    const id = ctx.query.id;
    const model = ctx.request.body;
    const rule = {
      title: {
        type: 'string',
        min: 1,
        required: false,
      },
      content: {
        type: 'string',
        min: 1,
        required: false,
      },
    };

    ctx.validate(rule);
    await ctx.service.article.updateOne(id, model);

    ctx.body = {
      msg: '更新成功',
    };
    ctx.status = 201;
  }
}

module.exports = ArticleController;
