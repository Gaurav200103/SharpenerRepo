const path = require("path");
const express = require("express");
const routeDir = require("../util/path.js");
const { contactUsFun, success } = require("../controller/contact.controller.js");
const route = express.Router();

route.get("/contactus", contactUsFun)

route.get('/success', success)

module.exports = route;