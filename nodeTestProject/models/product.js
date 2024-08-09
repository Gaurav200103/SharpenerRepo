const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const Product = sequelize.define("Product",{
  id:{
    type:Sequelize.INTEGER,
    primaryKey:true,
    autoIncrement: true
  },
  name:Sequelize.STRING,
  description:Sequelize.STRING,
  price: Sequelize.INTEGER,
  quantity: Sequelize.INTEGER
})

module.exports = Product;