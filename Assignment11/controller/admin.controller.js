const path = require("path");
const routeDir = require("../util/path.js");

const addProduct = (req, res)=>{
  res.sendFile(path.join(routeDir, "..", "view", "addProduct.html"));
}

module.exports = addProduct;