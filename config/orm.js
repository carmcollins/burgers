// Importing MySQL connection
var connection = require("./connection.js");

// Creating ORM methods
var orm = {
    
    selectAll: function(cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    insertOne: function(name, cb) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, [name], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    updateOne: function(id, cb) {
        var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
        connection.query(queryString, [id], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

// Exporting the ORM object
module.exports = orm;