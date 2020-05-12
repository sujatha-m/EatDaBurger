//Set up MySQL connection.
const mysql = require("mysql2");

var dbconnection;

if(process.env.JAWSDB_URL) {
  dbconnection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  dbconnection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "luv2Code@",
  database: "burgers_db"
});
}

// Make connection.
dbconnection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + dbconnection.threadId);
});

// Export connection for our ORM to use.
module.exports = (dbconnection).promise()
