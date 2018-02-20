'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.get('/', controller.render.index.home);
  router.get('/admin/login', controller.render.admin.login);
  router.get('/admin/home', controller.render.admin.home);
  router.get('/admin/article/new', controller.render.admin.article);
  router.get('/admin/article/edit/:id', controller.render.admin.article);
  router.get('/admin/article/manage', controller.render.admin.manage);

  // RESTful API
  router.post('/api/admin/auth', controller.api.admin.auth);
  router.post('/api/login', controller.api.admin.login);
};
