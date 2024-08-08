const Expence = require("../model/expence.module");


exports.saveExpence = async (req, res) =>{
  const {expence, type, description} = req.body;

  
  const data = await new Expence(expence, type, description).save();

  

  res.send("expence added successfully");
}

exports.getExpences = async (req, res)=>{
  const data = await Expence.findAll();

  

  res.json({expences: data[0]});
};

exports.deleteExpence = async (req, res)=>{
  const {id} = req.params;
  await Expence.deleteExpence(id);

  res.send("expence deleted successfully");
}