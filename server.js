// Dependencies
var express = require("express");
var bodyParser = require("body-parser");

// Setting up the Express app
var app = express();
var PORT = process.env.PORT || 8080;

// Setting up the app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("app/public")); // Static directory to be served? Do we need this?

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});