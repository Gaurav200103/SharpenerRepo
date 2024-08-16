"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos = [];
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.status(200).json({ todos });
});
router.post("/addTodo", (req, res) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
    res.status(200).json({ todos });
});
router.delete("/delete", (req, res) => {
    const { id } = req.body;
    if (id == null) {
        res.status(404);
    }
    const newTodo = todos.filter(item => {
        return item.id != id;
    });
    res.json({ todos: newTodo });
});
router.put("/update", (req, res) => {
    const { id, text } = req.body;
    if (id == null) {
        res.status(404);
    }
    const updated = todos.map(item => {
        item.text = item.id == id ? item.text = text : item.text;
        return item;
    });
    console.log(updated);
    res.json({ todos: updated });
});
exports.default = router;
