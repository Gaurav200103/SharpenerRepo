const mysql = require("mysql2");

const pool = mysql.createPool({
  database:"expence",
  user:"root",
  password:"password",
  host:"localhost"
})

module.exports = pool.promise();