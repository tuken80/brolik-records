module.exports = (router, controllers) => {

  router.get('/', controllers.getAll);
  router.get('/last', controllers.getLast);

  return router;
};
