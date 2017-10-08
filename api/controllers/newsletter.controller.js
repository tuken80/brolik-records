'use strict';

module.exports = function(app, services, models, sequelize) {
  var NewsletterControllers = {};

  NewsletterControllers.InscriptionNewsletter = function(request, response, next) {
    var promesses = [];

    promesses.push(services.newsletter.inscription(models, request.body));

    Promise.all(promesses).then(function(newsletter){
      response.send(newsletter[0].dataValues);
    }).catch(function(err) {
      console.log(err);
    });
  };

  return NewsletterControllers;
};
