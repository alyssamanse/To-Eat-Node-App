var express = require("express");
var burger = require("../models/burger.js");


var router = express.Router();

/*router.get("/", function(request, response) {
	burger.selectAll(function(data) {
		response.render("index", {burgers: data});
	});
});*/

router.post("/", function(request, response) {
	burger.insertOne(request.body.burger, function(result) {
		response.json({ id: result.insertId });
	})
});

router.put("/:id", function(request, response) {
	var condition = "id = " + request.params.id;

	console.log("condition: " + condition);

	burger.updateOne({devoured: true}, condition, function(result) {
		if (result.changedRows == 0) {
	      // If no rows were changed, then the ID must not exist, so 404
	      return res.status(404).end();
	    } else {
	      res.status(200).end();
	    }
	});
});

module.exports = router;