'use strict';

module.exports = function(app, services, models, sequelize) {
  var ActualiteControllers = {};

  ActualiteControllers.getLastActualites = function(request, response, next) {
    models.Actualite.findAll({ limit: 4 }).then(function(lastActualites){
      response.send(lastActualites);
    })
  };

  ActualiteControllers.getAllActualites = function(request, response, next) {
    models.Actualite.findAll().then(function(allActualites){
      response.send(allActualites);
    })
  };

  return ActualiteControllers;
};
