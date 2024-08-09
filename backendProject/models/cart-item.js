const Sequelize = require("sequelize");
const sequelize = require("../util/database");


const cartItem = sequelize.define("CartItem",{
  id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  quantity: Sequelize.INTEGER
})


module.exports = cartItem;