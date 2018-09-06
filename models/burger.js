// Importing the ORM object
var orm = require("../config/orm.js");

// Calls the ORM methods using burger-specific input
var burger = {
    all: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    create: function(name, cb) {
      orm.insertOne("burgers", "burger_name", name, function(res) {
        cb(res);
      });
    },
    update: function(id, cb) {
      var condition = "id=" + id;

      orm.updateOne("burgers", {
        devoured: true
      }, condition, cb);
    }
};

// Exporting the burger model
module.exports = burger;