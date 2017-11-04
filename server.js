var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

// delete this
var connection = require("./config/connection.js");

var port = 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/index", function(request, response) {
	connection.query("SELECT * FROM burgers", function(error, data) {
		if (error) throw error;

		response.render("index", {burgers: data});
	})
})

app.listen(port);