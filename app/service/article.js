'use strict';

const uniqid = require('uniqid');
const moment = require('moment');
const Service = require('egg').Service;

class ArticleService extends Service {
  async insertOne(model) {
    const { ctx } = this;

    await ctx.model.Article.create({
      id: uniqid(),
      title: model.title,
      content: model.content,
      created_at: new Date().toLocaleString(),
      updated_at: new Date().toLocaleString(),
      created_at_beauty: moment().format('YYYY-MM-DD HH:mm:ss'),
      updated_at_beauty: moment().format('YYYY-MM-DD HH:mm:ss')
    });
  }

  async findAll(page, size) {
    const { ctx } = this;

    const result = await ctx.model.Article.findAndCountAll({
      attributes: {
        exclude: ['content']
      },
      order: [
        ['updated_at', 'DESC'],
      ],
      offset: (page - 1) * size,
      limit: size
    });

    return result;
  }
}

module.exports = ArticleService;
