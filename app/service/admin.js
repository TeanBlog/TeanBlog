'use strict';

const Service = require('egg').Service;
const bcrypt = require('bcrypt');

class AdminService extends Service {
  /**
   * 登录校验
   * @param {Object} model - 管理员账号密码
   * @return {Boolean} 验证结果
   */
  async findByLogin(model) {
    const { ctx } = this;

    const admin = await ctx.model.Admin.findOne({
      where: {
        email: model.email,
      },
    });

    if (admin) {
      return await bcrypt.compare(model.password, admin.password);
    }

    return false;
  }
}

module.exports = AdminService;
