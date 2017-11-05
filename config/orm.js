var connection = require("../config/connection.js");

function printQuestionMarks(number) {
  var array = [];

  for (var i = 0; i < number; i++) {
    array.push("?");
  }

  return array.toString();
}

function objectToSql(object) {
  var array = [];

  for (var key in object) {
    var value = object[key];

    if (Object.hasOwnProperty.call(object, key)) {

      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      
      array.push(key + "=" + value);
    }
  }

  return array.toString();
}

var orm = {

	selectAll: function(table, callback) {
		var queryString = "SELECT * FROM ";
		queryString += table;

		console.log(queryString);

		connection.query(queryString, function(error, results) {
			if (error) throw error;
			callback(results);
		})
	}, 

	insertOne: function(table, column, value, callback) {
		var queryString = "INSERT INTO ";
		queryString += table;
		queryString += " (";
		queryString += column;
		queryString += ") ";
		queryString += "VALUES (";
		queryString += value;
		queryString += ")";

		console.log(queryString);

		connection.query(queryString, function(error, result) {
			if (error) throw error;

			callback(result);
		})
	}, 

	updateOne: function(table, column, boolean, condition, callback) {
		var queryString = "UPDATE ";
		queryString += table;
		queryString += " SET ";
		queryString += column + " = " + boolean;
		queryString += " WHERE ";
		queryString += condition;

		console.log(queryString);

		connection.query(queryString, function(error, result) {
			if (error) throw error;

			callback(result);
		})
	}
};

module.exports = orm;	