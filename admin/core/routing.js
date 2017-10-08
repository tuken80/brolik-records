'use strict';

var path = require('path');

module.exports = function(app, controllers) {
  var index = require(path.join(__dirname, '..', 'routes', 'index'))(controllers.index);
  var newsletter = require(path.join(__dirname, '..', 'routes', 'newsletter'))(controllers.newsletter);
  var actualite = require(path.join(__dirname, '..', 'routes', 'actualite'))(controllers.actualite);

  app.use('/', index);
  app.use('/newsletter', newsletter);
  app.use('/actualites', actualite);
};
