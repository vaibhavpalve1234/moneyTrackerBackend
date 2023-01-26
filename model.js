const { Model } = require('objection');
const Knex = require('knex');
const { local } = require('./knex');
const knex = Knex(local);
Model.knex(knex);

module.exports = Model;
