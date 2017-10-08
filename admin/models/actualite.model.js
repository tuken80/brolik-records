'use strict';

module.exports = (sequelize, DataTypes) => {
  var Actualite = sequelize.define('Actualite', {
    id:{
      type: DataTypes.UUID,
      validate: {
        isUUID: 4,
      },
      primaryKey: true,
      allowNull: false,
      defaultValue:DataTypes.UUIDV4,
      unique: true
    },
    titre:{
      type: DataTypes.STRING,
      allowNull: false
    },
    description:{
      type: DataTypes.TEXT,
      allowNull: false
    },
    imageName:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    classMethods: {
      associate: function(models) {
        //associations et relations ici
      }
    }
  });
  return Actualite;
};
