// Set up MySQL connection.
var mysql = require("mysql");

// mysql://b581aefbd1fe9f:f0db50f9@us-cdbr-iron-east-05.cleardb.net/heroku_dd2237c1f9f8771?reconnect=true

var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-05.cleardb.net",
  user: "b581aefbd1fe9f",
  password: "f0db50f9",
  database: "heroku_dd2237c1f9f8771"
});

// Make connection.
connection.connect(function(error) {
  if (error) {
    console.error("error connecting: " + error.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;