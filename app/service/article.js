'use strict';

const uniqid = require('uniqid');
const moment = require('moment');
const Service = require('egg').Service;

class ArticleService extends Service {
  /**
   * 插入一条数据
   * @param {Object} model - 文章主体
   */
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

  /**
   * 查询全部
   * @param {Number} page - 页数
   * @param {Number} size - 大小
   * @return {Object} result - 查询结果
   */
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

  /**
   * 通过 id 查询
   * @param {String} id - 文章 Id
   * @return {Object} result - 查询结果
   */
  async findById(id) {
    const { ctx } = this;

    const result = await ctx.model.Article.findOne({
      where: {
        id,
      },
    });

    return result;
  }

  /**
   * 通过 id 删除
   * @param {String} id - 文章 Id
   */
  async deleteOne(id) {
    const { ctx } = this;

    await ctx.model.Article.destroy({
      where: {
        id,
      },
    });
  }

  /**
   * 通过 id 更新
   * @param {String} id - 文章 Id
   * @param {Object} model - 文章主体
   */
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
