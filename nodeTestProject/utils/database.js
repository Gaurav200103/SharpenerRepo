const Sequelize = require("sequelize");

const sequelize = new Sequelize("nodeProject", "root", "password", {
  host:"localhost",
  dialect: "mysql"
})


module.exports = sequelize;