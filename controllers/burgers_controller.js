// Importing Express and the burger model
var express = require("express");
var burger = require("../models/burger.js");

// Creating the router app
var router = express.Router();

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});
  
router.post("/api/burgers", function(req, res) {
    burger.create(req.body.burger_name, function(result) {
        res.json({ id: result.insertId });
    });
});
  
router.put("/api/burgers/:id", function(req, res) {
    burger.update(req.params.id, function(result) {
        res.sendStatus(200);
    });
});
  
// Exporting routes
module.exports = router;