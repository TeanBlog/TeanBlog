'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  // 博客前台路由
  router.get('/', controller.render.index.home);
  router.get('/blog', controller.render.index.blog);
  router.get('/articles/post/:id', controller.render.index.article);

  // 博客后台路由
  router.get('/admin/login', controller.render.admin.login);
  router.get('/admin/home', controller.render.admin.home);
  router.get('/admin/article/new', controller.render.admin.article);
  router.get('/admin/article/edit/:id', controller.render.admin.article);
  router.get('/admin/article/manage/:page', controller.render.admin.manage);

  // RESTful API
  router.post('/api/login', controller.api.admin.login);
  router.post('/api/admin/auth', controller.api.admin.auth);
  router.post('/api/admin/article/add', controller.api.article.add);
  router.delete('/api/admin/article', controller.api.article.delete);
  router.patch('/api/admin/article', controller.api.article.update);
};
