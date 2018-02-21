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
      updated_at_beauty: moment().format('YYYY-MM-DD HH:mm:ss'),
    });
  }

  async findAll(page, size) {
    const { ctx } = this;
    let result = {};

    if (page && size) {
      result = await ctx.model.Article.findAndCountAll({
        attributes: {
          exclude: [ 'content' ],
        },
        order: [
          [ 'updated_at', 'DESC' ],
        ],
        offset: (page - 1) * size,
        limit: size,
      });
    } else {
      result = await ctx.model.Article.findAndCountAll({
        attributes: {
          exclude: [ 'content' ],
        },
        order: [
          [ 'updated_at', 'DESC' ],
        ],
      });
    }

    return result;
  }

  async findById(id) {
    const { ctx } = this;

    const result = await ctx.model.Article.findOne({
      where: {
        id,
      },
    });

    return result;
  }

  async deleteOne(id) {
    const { ctx } = this;

    await ctx.model.Article.destroy({
      where: {
        id,
      },
    });
  }

  async updateOne(id, model) {
    const { ctx } = this;

    await ctx.model.Article.update({
      title: model.title,
      content: model.content,
      updated_at: new Date().toLocaleString(),
      updated_at_beauty: moment().format('YYYY-MM-DD HH:mm:ss'),
    }, {
      where: {
        id,
      },
    });
  }
}

module.exports = ArticleService;
