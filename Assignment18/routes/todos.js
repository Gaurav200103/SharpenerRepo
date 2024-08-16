"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var todos = [];
var router = (0, express_1.Router)();
router.get("/", function (req, res) {
    res.status(200).json({ todos: todos });
});
router.post("/addTodo", function (req, res) {
    var newTodo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
    res.status(200).json({ todos: todos });
});
router.delete("/delete", function (req, res) {
    var id = req.body.id;
    if (id == null) {
        res.status(404);
    }
    var newTodo = todos.filter(function (item) {
        return item.id != id;
    });
    res.json({ todos: newTodo });
});
router.put("/update", function (req, res) {
    var _a = req.body, id = _a.id, text = _a.text;
    if (id == null) {
        res.status(404);
    }
    var updated = todos.map(function (item) {
        item.text = item.id == id ? item.text = text : item.text;
        return item;
    });
    console.log(updated);
    res.json({ todos: updated });
});
exports.default = router;
