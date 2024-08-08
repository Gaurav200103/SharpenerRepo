const Sequelize = require("sequelize");

const sequelize = new Sequelize("product", "root", "password", {
  host:"localhost",
  dialect:"mysql"
})

sequelize.authenticate().then(() => console.log("database connected successfully"));

module.exports = sequelize;