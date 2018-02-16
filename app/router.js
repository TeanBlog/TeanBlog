'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.get(/admin/, controller.render.admin.index);
  // router.get('/api/home', controller.home.index);
  router.get('/', controller.render.index.home);
};
