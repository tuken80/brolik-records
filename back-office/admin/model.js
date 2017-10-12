var fs = require('fs');
var path = require('path');
const Sequelize = require('sequelize');

const conf = require(path.join(__dirname, 'conf', 'database.json'));

const sequelize = new Sequelize(conf.database, conf.username, conf.password, {
  host: conf.hostname,
  dialect: conf.dialect,
  pool: {
    max: conf.pool.max,
    min: conf.pool.min,
    idle: conf.pool.idle,
  }
});
var models = {};

fs
  .readdirSync(path.join(__dirname, 'models'))
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var mdl = sequelize['import'](path.join(__dirname, 'models', file));
    models[mdl.name] = mdl;
  });

Object
  .keys(models)
  .forEach(mdlName => {
    if (models[mdlName].associate)
      models[mdlName].associate(models);
  });

sequelize.sync();

module.exports = models;
