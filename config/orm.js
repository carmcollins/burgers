// Importing MySQL connection
var connection = require("./connection.js");

// Creating ORM methods
var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    insertOne: function(table, column, name, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, column, name], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    updateOne: function(table, column, condition, cb) {
        var queryString = "UPDATE ?? SET ?? WHERE ??";
        connection.query(queryString, [table, column, condition], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

// Exporting the ORM object
module.exports = orm;