'use strict';

const Controller = require('egg').Controller;

class BlogController extends Controller {
  async index() {
    const { ctx } = this;

    await ctx.render('blog/index.js');
  }
}

module.exports = BlogController;
