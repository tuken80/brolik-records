'use strict';

var express = require('express');
var router = express.Router();

module.exports = function(actualiteController) {

  router.get('/last', actualiteController.getLastActualites);
  router.get('/all', actualiteController.getAllActualites);

  return router;
};
