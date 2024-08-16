"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var todos_1 = require("./routes/todos");
var app = express();
app.use(express.json());
app.use(todos_1.default);
app.listen(3000, function () {
    console.log("server run on 3000");
});
