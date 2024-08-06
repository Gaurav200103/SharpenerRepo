const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const userRouter = require("./routers/user.router");

app.use(userRouter);


app.listen(3000);