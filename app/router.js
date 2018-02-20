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

  // RESTful API
  router.post('/api/admin/login', controller.api.admin.login);
};
