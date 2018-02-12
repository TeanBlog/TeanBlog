'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  // 博客评论 GitHub 回调地址
  // router.get('/comment/github/login');

  // 博客前台页面路由
  router.get('/', controller.home.index);
  router.get('/blog', controller.blog.index);
  router.get('/about', controller.about.index);
};
