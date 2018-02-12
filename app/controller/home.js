'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;

    await ctx.render('home/index.js', { message: 'hi, TeanBlog', currentPage: 'home' });
  }
}

module.exports = HomeController;
