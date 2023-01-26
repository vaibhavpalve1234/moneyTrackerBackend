'use strict';
const Model = require('../model');
// const Model = require('objection').Model;

class User extends Model {
  static get tableName() {
    return 'users';
  }

  static get idColumn() {
    return 'id';
  }
}
module.exports = User;
