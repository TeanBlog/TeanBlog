'use strict';

const jwt = require('jsonwebtoken');
const ms = require('ms');
const Controller = require('egg').Controller;

class AdminController extends Controller {
  async login() {
    const { ctx } = this;
    const model = ctx.request.body;

    const isAuthenticated = await ctx.service.admin.findByLogin(model);

    if (isAuthenticated) {
      let cookieMxAgems = ms('1d');

      if (model.rememberMe === 'true') {
        cookieMxAgems = ms('30d');
      }

      const cookieValue = 'Bearer ' + jwt.sign({
        exp: cookieMxAgems,
      }, ctx.app.config.jwt.secret);

      ctx.cookies.set('TEAN_ADMIN', cookieValue, {
        maxAge: cookieMxAgems,
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
