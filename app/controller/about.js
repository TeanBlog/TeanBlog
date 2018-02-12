'use strict';

const Controller = require('egg').Controller;

class AboutController extends Controller {
  async index() {
    const { ctx } = this;

    await ctx.renderClient('about/index.js', { currentPage: 'about' });
  }
}

module.exports = AboutController;
