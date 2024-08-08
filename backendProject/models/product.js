
const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Product = sequelize.define("Product", {
  id:{
    type:Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  imageUrl: Sequelize.STRING,
  price: Sequelize.INTEGER,
})

module.exports = Product;
