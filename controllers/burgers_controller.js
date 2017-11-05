var express = require("express");
var burger = require("../models/burger.js");


var router = express.Router();

router.get("/", function(request, response) {
	burger.selectAll(function(data) {
		response.render("index", {burgers: data});
	});
});

router.post("/burgers", function(request, response) {
	burger.insertOne([request.body.burger], function(result) {
		response.redirect("/");
	})
});

router.put("/burgers/:id", function(request, response) {
	var condition = "id = " + request.params.id;

	burger.updateOne(condition, function(result) {
		response.redirect("/");
	});
});

module.exports = router;