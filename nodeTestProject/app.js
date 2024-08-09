const express = require("express");
const app = express();
const cors = require("cors");
const sequelize = require("./utils/database");
const productRouter = require("./routers/product.route");
app.use(cors());
app.use(express.json());
app.use(productRouter);



sequelize.sync().then(()=>{
  app.listen(3000);
})