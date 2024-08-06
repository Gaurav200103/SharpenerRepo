const express = require("express");
const { addUser, getUsers, updateUser, deleteUser, findUserById } = require("../controllers/user.controller");

const router = express.Router();

router.post("/addUser", addUser);

router.get('/getUsers', getUsers);

router.put("/editUser", updateUser);

router.delete("/deleteUser/:id", deleteUser)

router.get("/getUser/:id", findUserById);

module.exports = router;