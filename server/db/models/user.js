'use strict';

var db = require('./database');
var Sequelize = require('sequelize');

// make sure postgres is running/postico (i <3 postico)

var User = db.define('User', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  type: {
    isAdmin: Sequelize.BOOLEAN,
    defaultValue: false
  }
}
module.exports = User;