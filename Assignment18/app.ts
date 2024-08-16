import express = require("express");
import todoRoutes from "./routes/todos";

const app = express();
app.use(express.json());
app.use(todoRoutes);

app.listen(3000, ()=>{
  console.log("server run on 3000")
});
