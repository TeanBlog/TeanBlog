'use strict';

const Controller = require('egg').Controller;

class AboutController extends Controller {
  async index() {
    const { ctx } = this;

    await ctx.render('about/index.js');
  }
}

module.exports = AboutController;
