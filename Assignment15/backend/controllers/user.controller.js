const db = require("../util/database");
const User = require("../models/User");

exports.addUser= (req, res)=>{
  const {username, phone, email} = req.body;

  
  new User(username, phone, email).save();

  res.send("user added successfully");
}

exports.getUsers  =async (req, res)=>{
  const users = await User.findAll();

  res.json({users: users[0]});
}

exports.deleteUser = async(req, res)=>{
  const {id} = req.params;
  await User.deleteById(id);
  res.send("user deleted successfully");
}

exports.updateUser = async (req, res)=>{
  const body = req.body;

  await User.updateUser(body);

  res.send("user updated successfully");
}

exports.findUserById = async (req, res)=>{
  const {id} = req.params;

  let user =await User.findById(id);

  res.json({user: user[0][0]});
}