'use strict';

const jwt = require('jsonwebtoken');
const Controller = require('egg').Controller;

class AdminController extends Controller {
  async login() {
    const { ctx } = this;
    const model = ctx.request.body;

    const isAuthenticated = await ctx.service.admin.findByLogin(model);

    if (isAuthenticated) {
      const cookieValue = 'Bearer ' + jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60),
      }, ctx.app.config.jwt.secret);

      ctx.cookies.set('TEAN_KEY', cookieValue, {
        httpOnly: false,
        signed: false,
      });

      ctx.body = {};
      ctx.status = 200;
    } else {
      ctx.body = {
        error: '用户账号密码错误',
      };
      ctx.status = 401;
    }
  }
}

module.exports = AdminController;
