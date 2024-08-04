const path = require("path");
const express = require("express");
const routeDir = require("../util/path.js");
const route = express.Router();

route.get("/add-product", (req, res)=>{
  res.sendFile(path.join(routeDir, "..", "view", "addProduct.html"));
})

module.exports = route;