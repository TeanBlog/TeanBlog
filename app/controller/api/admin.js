'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
  async login() {
    const { ctx } = this;
    const model = ctx.request.body;

    const isAuthenticated = await ctx.service.admin.findByLogin(model);

    if (isAuthenticated) {
      ctx.body = {
        msg: '成功',
      };
    } else {
      ctx.body = {
        error: '用户账号密码错误',
      };
    }
  }
}

module.exports = AdminController;
