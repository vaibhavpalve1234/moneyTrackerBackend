const transcation = require("objection").Model.extend({
    tableName: "transactions",
    splits: function() {
      return this.hasMany(Split);
    }
  });
  
  const Split = require("objection").Model.extend({
    tableName: "splits",
    transaction: function() {
      return this.belongsTo(transcation);
    }
  });
  module.exports =  Split;