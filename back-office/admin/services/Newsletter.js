var path = require('path');

var service = {};
const models = require(path.join('..', 'model'))

service.create = data => {
    return models
        .__filename
        .split('/').pop()
        .split('.')[0]
        .create(data);
};

module.exports = service;
