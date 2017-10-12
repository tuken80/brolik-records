var path = require('path');
var HTTPStatus = require('http-status');

var controllers = {};
var service = require(path.join(__dirname, '..', 'services', __filename.split('/').pop()));

controllers.getLast = (req, res, next) => {
    service
        .getLast()
        .then( data => {
            res.status(HTTPStatus.OK).send(data);
        });
};

controllers.getAll = (req, res, next) => {
    service
        .getAll()
        .then( data => {
            response.status(HTTPStatus.OK).send(data);
        });
};

module.exports = controllers;