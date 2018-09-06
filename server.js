// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 8080;

// Setting up the Express app
var app = express();

// Serving static content from the "public" folder
app.use(express.static("public"));

// Setting up the app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setting up Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Importing routes
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});