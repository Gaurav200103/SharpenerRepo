const path = require("path");
const express = require("express");
const routeDir = require("../util/path.js");
const addProduct = require("../controller/admin.controller.js");
const route = express.Router();

route.get("/add-product", addProduct)

module.exports = route;