const express = require('express');
const bodyParser = require('body-parser');
const adminRoute = require("./routers/admin");
const shopRoute = require("./routers/shop");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(adminRoute);
app.use(shopRoute);


app.get("*", (req, res)=>{
  res.status(404).send("page not found");
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
