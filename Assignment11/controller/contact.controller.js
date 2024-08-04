const path = require("path");
const routeDir = require("../util/path.js");

const contactUsFun = (req, res)=>{
  res.sendFile(path.join(routeDir, "..", "view", "contactus.html"));
}

const success = (req, res)=>{
  res.send("form successfully filled");
}

module.exports = {contactUsFun, success}