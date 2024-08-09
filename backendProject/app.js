const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require("./util/database");
const Product = require("./models/product");
const User = require("./models/user");
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const Cart = require('./models/cart');
const cartItem = require('./models/cart-item');
const { emit } = require('process');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(async (req, res, next)=>{
  const user= await User.findByPk(10);
  console.log(user.dataValues);
  req.user = user.dataValues;
  next();
})

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);




Product.belongsTo(User);
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, {through: cartItem});
Product.belongsToMany(Cart, {through: cartItem});

sequelize.sync().then(()=>{
  console.log("database connected successfully");
  app.listen(3000);
})