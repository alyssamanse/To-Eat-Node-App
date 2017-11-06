var orm = require("../config/orm.js");

// create the code that will call the orm functions using burger specific input for the orm
var burger = {
	selectAll: function(callback) {
		orm.selectAll("burgers", function(response) {
			callback(response);
		});
	},

	insertOne: function(value, callback) {
		orm.insertOne("burgers", "burger_name", value, function(response) {
			callback(response);
		});
	}, 

	updateOne: function(columnValues, condition, callback) {
		orm.updateOne("burgers", columnValues, condition, function(response) {
			callback(response);
		});
	}
}

module.exports = burger;