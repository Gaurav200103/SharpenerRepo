const mysql = require("mysql2");

const pool = mysql.createPool({
  user:"root",
  password:"password",
  host:"localhost",
  database:"appointment"
})

module.exports = pool.promise();