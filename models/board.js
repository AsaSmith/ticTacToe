'use strict';
module.exports = function(sequelize, DataTypes) {
  var Board = sequelize.define('Board', {
board: {validate: {
    len: 9,
    is: {
        args: /^[XO ]+$/,
        msg: 'Must be a valid tic tac toe board'
    }
},
    type: DataTypes.STRING,
    get: function() {
        // Just trust me on this
        // This will split the string into groups of three
        return this.getDataValue('board').match(/.{3}/g).map(function(row) {
            return row.split('');
        });
    }
}
  });
  return Board;
};
