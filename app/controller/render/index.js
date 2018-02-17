'use strict';

const Controller = require('egg').Controller;

class IndexRenderController extends Controller {
  async home() {
    const { ctx } = this;

    const mockData = {
      banner: {
        title: '主页',
        secTitle: '主页副标题'
      }
    };

    await this.ctx.render('render/page/home.tpl', mockData);
  }
}

module.exports = IndexRenderController;