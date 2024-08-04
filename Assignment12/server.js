const express = require("express");
const shopRoute = require("./route/shop.js")
const productRoute = require("./route/admin.js");
const contactRoute = require("./route/contact.js");
const app = express();
const path = require("path");
const routeDir = require("./util/path.js");


app.use(shopRoute);
app.use(productRoute);
app.use(contactRoute);
app.use((req, res)=>{
  res.sendFile(path.join(routeDir,"..", "view", "4o4.html"));
})
app.listen(3000);