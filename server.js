var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

// Import routes and give the server access to them
var burgerController = require("./controllers/burgers_controller.js");

var port = 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(methodOverride("_method"));

app.use("/", burgerController);

app.listen(port);