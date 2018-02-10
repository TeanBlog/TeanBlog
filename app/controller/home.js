'use strict';

const Controller = require('egg').Controller;

module.exports = () => {
  return class HomeController extends Controller {
    async index() {
      const { ctx } = this;
      await ctx.render('home/index.js', { message: 'hi, TeanBlog' });
    }
  }
}
