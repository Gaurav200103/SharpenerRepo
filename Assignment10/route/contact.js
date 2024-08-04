const path = require("path");
const express = require("express");
const routeDir = require("../util/path.js");
const route = express.Router();

route.get("/contactus", (req, res)=>{
  res.sendFile(path.join(routeDir, "..", "view", "contactus.html"));
})

route.get('/success', (req, res)=>{
  res.send("form successfully filled");
})

module.exports = route;