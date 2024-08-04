const path = require("path");
const express = require("express");
const routeDir = require("../util/path.js");


const home = (req, res)=>{
  res.sendFile(path.join(routeDir, "..", "view", "shop.html"));
};

module.exports = home;