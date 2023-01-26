'use strict';
const Model = require('../model');
// const Model = require('objection').Model;

class transactions extends Model {
  static get tableName() {
    return 'transactions';
  }

  static get idColumn() {
    return 'user_id';
  }
}
module.exports = transactions;
