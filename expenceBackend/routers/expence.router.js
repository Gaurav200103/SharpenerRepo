const { saveExpence, getExpences, deleteExpence } = require("../controller/expence.controller");
const Expence = require("../model/expence.module");
const express = require("express");
const router = express.Router();


router.post("/addExpence", saveExpence);

router.get("/getExpences", getExpences);

router.delete("/deleteExpence/:id", deleteExpence);

module.exports = router;