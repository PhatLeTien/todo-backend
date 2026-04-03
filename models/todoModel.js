const db = require("../config/db");

exports.getAll = (callback) => {
  db.query("SELECT * FROM todos", callback);
};

exports.create = (title, callback) => {
  db.query("INSERT INTO todos (title) VALUES (?)", [title], callback);
};

exports.update = (id, completed, callback) => {
  db.query(
    "UPDATE todos SET completed=? WHERE id=?",
    [completed, id],
    callback
  );
};

exports.delete = (id, callback) => {
  db.query("DELETE FROM todos WHERE id=?", [id], callback);
};