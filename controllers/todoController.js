const Todo = require("../models/todoModel");

exports.getTodos = (req, res) => {
  Todo.getAll((err, data) => {
    if (err) return res.send(err);
    res.json(data);
  });
};

exports.createTodo = (req, res) => {
  Todo.create(req.body.title, (err) => {
    if (err) return res.send(err);
    res.send("Created");
  });
};

exports.updateTodo = (req, res) => {
  Todo.update(req.params.id, req.body.completed, (err) => {
    if (err) return res.send(err);
    res.send("Updated");
  });
};

exports.deleteTodo = (req, res) => {
  Todo.delete(req.params.id, (err) => {
    if (err) return res.send(err);
    res.send("Deleted");
  });
};