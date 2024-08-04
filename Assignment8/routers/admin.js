const express = require("express");

const router = express.Router();

router.get('/add-product', (req, res) => {
  res.send(`
      <form action="/add-product" method="POST">
          <label for="productName">Product Name:</label>
          <input type="text" id="productName" name="productName" required><br><br>
          <label for="productSize">Product Size:</label>
          <input type="text" id="productSize" name="productSize" required><br><br>
          <button type="submit">Add Product</button>
      </form>
  `);
});

router.post('/add-product', (req, res) => {
  const { productName, productSize } = req.body;
  console.log(`Product Name: ${productName}`);
  console.log(`Product Size: ${productSize}`);
  res.send('Product added successfully!');
});


module.exports = router;