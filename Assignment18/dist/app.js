"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const todos_1 = __importDefault(require("./routes/todos"));
const app = express();
app.use(express.json());
app.use(todos_1.default);
app.listen(3000, () => {
    console.log("server run on 3000");
});
