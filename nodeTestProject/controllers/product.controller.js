const Product = require("../models/product");


exports.getProducts = async (req, res)=>{
  const data = await Product.findAll();

  res.json({products : data});
}

exports.addProducts = async (req, res)=>{
  const {name, price, description, quantity} = req.body;

  await Product.create({name,price,description,quantity});

  res.send("product created successfully");
}

exports.updateQuantity = async (req,res) =>{
  const data = req.params;

  const product = await Product.findByPk(data.id);
  await Product.update({quantity: product.quantity-data.quantity}, {where: {id: data.id}});

  res.send("product updated successfully");
}