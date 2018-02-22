'use strict';

const jwt = require('jsonwebtoken');
const ms = require('ms');
const Controller = require('egg').Controller;

class AdminController extends Controller {
  // 管理员登录
  async login() {
    const { ctx } = this;
    const model = ctx.request.body;

    const isAuthenticated = await ctx.service.admin.findByLogin(model);

    if (isAuthenticated) {
      let cookieMxAge = ms('1d');
      let jwtMxAge = Math.floor(Date.now() / 1000) + (60 * 60 * 24);

      if (model.rememberMe === 'true') {
        cookieMxAge = ms('30d');
        jwtMxAge = Math.floor(Date.now() / 1000) + (60 * 60 * 30 * 24);
      }

      const cookieValue = 'Bearer ' + jwt.sign({
        exp: jwtMxAge,
      }, ctx.app.config.jwt.secret);

      ctx.cookies.set('TEAN_ADMIN', cookieValue, {
        maxAge: cookieMxAge,
        httpOnly: false,
        signed: false,
      });

      ctx.body = {
        cookie: cookieValue,
      };
      ctx.status = 200;
    } else {
      ctx.body = {
        error: '用户账号密码错误',
      };
      ctx.status = 401;
    }
  }

  // 管理员鉴权
  async auth() {
    const { ctx } = this;

    ctx.body = {
      msg: '鉴权成功',
    };
    ctx.status = 200;
  }
}

module.exports = AdminController;
