var orm = require("../config/orm.js");

// create the code that will call the orm functions using burger specific input for the orm
var burger = {
	selectAll: function() {
		orm.selectAll();
	},

	insertOne: function() {
		orm.insertOne();
	}, 

	updateOne: function() {
		orm.updateOne();
	}
}

module.exports = burger;