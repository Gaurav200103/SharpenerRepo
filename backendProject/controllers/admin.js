const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageUrl, description, price);
  
  Product.create({title, imageUrl, price, description});
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  

  Product.findAll().then((products)=>{
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  })
};

exports.deleteProduct = (req, res)=>{
  const {id} = req.params;
  console.log(id);
  Product.destroy({
    where:{
      id: id
    }
  }).then(()=>{
    res.render("admin/delete-product",{
      pageTitle: "Admin Products",
      path: "/admin/products"
    })
  })

  res.redirect("/")
}
