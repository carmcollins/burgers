// Setting up the connection to MySQL
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected as ID " + connection.threadId);
});

// Exporting the connection
module.exports = connection;