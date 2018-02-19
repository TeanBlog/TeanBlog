'use strict';

module.exports = () => {
  /**
   * 数据格式处理中间件
   * @param {Object} ctx 上下文
   * @param {Function} next 继续下文
   * @return {void}
   */
  return async function responseHandler(ctx, next) {
    await next();
    if (ctx.body && !ctx.body.error) {
      ctx.body = {
        msg: 'Success',
        data: ctx.body.data,
      };
    } else if (ctx.body && ctx.body.error) {
      ctx.body = {
        msg: ctx.body.error,
      };
    } else {
      ctx.body = {
        msg: 'Not Found',
      };
      ctx.status = 404;
    }
  };
};
