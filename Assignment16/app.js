const path = require('path');
const sequelize = require("./util/database");
const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const db = require("./util/database");
const app = express();
const Product = require("./models/product");
const User= require("./models/user");

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);


Product.belongsTo(User);
User.hasMany(Product);

sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
    app.listen(3000);
  });


