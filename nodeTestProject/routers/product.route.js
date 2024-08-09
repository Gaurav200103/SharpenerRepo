const express = require("express");
const { getProducts, addProducts, updateQuantity } = require("../controllers/product.controller");
const router = express.Router();

router.get("/getProducts", getProducts);

router.post("/addProduct", addProducts);

router.patch("/updateQuantity/:id/:quantity", updateQuantity)

module.exports = router;