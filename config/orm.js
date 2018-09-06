// Importing MySQL connection
var connection = require("./connection.js");

// Creating ORMs
var orm = {
    selectAll: function(tableInput) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    insertOne: function(tableInput, columnInput, dataInput) {
        var queryString = "INSERT INTO ?? (??) VALUES ('?')";
        connection.query(queryString, [tableInput, columnInput, dataInput], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    updateOne: function(tableInput, columnInput, idInput, idValue) {
        var queryString = "UPDATE ?? SET ?? WHERE ?? = ?";
        connection.query(queryString, [tableInput, columnInput, idInput, idValue], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
};

module.exports = orm;