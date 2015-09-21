'use strict';
module.exports = function(sequelize, DataTypes) {
  var Board = sequelize.define('Board', {
    board: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Board;
};