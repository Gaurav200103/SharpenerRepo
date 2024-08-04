const path = require("path");
const express = require("express");
const routeDir = require("../util/path.js");
const route = express.Router();

route.get("/", (req, res)=>{
  res.sendFile(path.join(routeDir, "..", "view", "shop.html"));
})

module.exports = route;