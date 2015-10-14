'use strict';
module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define('Users', {
    user_name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.hasMany(models.Board, {as: 'XPLAYER', foreignKey: 'xPlayerId'});
        User.hasMany(models.Board, {as: 'OPLAYER', foreignKey: 'oPlayerId'});
      }
    }
  });
  return Users;
};
