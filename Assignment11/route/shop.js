const path = require("path");
const express = require("express");
const routeDir = require("../util/path.js");
const home = require("../controller/shop.controller.js");
const route = express.Router();

route.get("/", home);

module.exports = route;