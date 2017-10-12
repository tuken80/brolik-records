var path = require('path');
var HTTPStatus = require('http-status');

var controllers = {};
var service = require(path.join(__dirname, '..', 'services', __filename.split('/').pop()));

controllers.new = (req, res, next) => {
    service
        .create(req.body)
        .then( data => {
          res.status(HTTPStatus.OK).send(data);
        });
};

module.exports = controllers;