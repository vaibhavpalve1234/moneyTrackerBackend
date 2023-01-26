'use strict';
const Model = require('../model');
// const Model = require('objection').Model;

class Split extends Model {
  static get tableName() {
    return 'split';
  }

  static get idColumn() {
    return 'user_id';
  }
}
module.exports = Split;
