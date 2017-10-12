module.exports = (router, controllers) => {

    router.post('/', controllers.new);

    return router;
};
