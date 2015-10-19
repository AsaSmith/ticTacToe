'use strict';
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        user.hasMany(models.board, { as: 'XPlayer', foreignKey: 'xPlayerId' });
        user.hasMany(models.board, { as: 'OPlayer', foreignKey: 'oPlayerId' });
      }
    },
    instanceMethods: {
      getboards: function() {
        return sequelize.Promise.all([
          (this.XPlayer || this.getXPlayer()),
          (this.OPlayer || this.getOPlayer())
        ]).then(function(boards) {
          return boards.reduce(function(a, b) { return a.concat(b); }, []);
        })
      }
    },
    scopes: {
      knownValues: {
        where: {
          id: 1
        }
      },
      withboards: function() {
        return {
          include: [
            { association: user.associations.XPlayer },
            { association: user.associations.OPlayer }
          ]
        }
      }
    }
  });
  return user;
};
