// Importing the ORM object
var orm = require("../config/orm.js");

// Calls the ORM methods using burger-specific input
var burger = {

  all: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },

  create: function(name, cb) {
    orm.insertOne(name, function(res) {
      cb(res);
    });
  },

  update: function(id, cb) {
    orm.updateOne(id, function(res) {
      cb(res);
    });
  }
  
};

// Exporting the burger model
module.exports = burger;