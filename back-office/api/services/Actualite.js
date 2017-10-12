var path = require('path');

var service = {};
const models = require(path.join('..', 'model'))

service.getLast = () => {
  return models
      .__filename
      .split('/').pop()
      .split('.')[0]
      .findAll({
          limit: 4
      });
};

service.getAll = () => {
  return models
      .__filename
      .split('/').pop()
      .split('.')[0]
      .findAll();
};

module.exports = service;
