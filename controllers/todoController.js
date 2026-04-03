const db = require("../config/db");

// GET TODOS
exports.getTodos = (req, res) => {
  db.query("SELECT * FROM todos", (err, result) => {
    if (err) {
      console.log("❌ DB Error:", err);

      // ❗ LUÔN trả array
      return res.json([]);
    }

    // ❗ đảm bảo là array
    if (!Array.isArray(result)) {
      return res.json([]);
    }

    res.json(result);
  });
};

// CREATE
exports.createTodo = (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Title required" });
  }

  db.query(
    "INSERT INTO todos (title) VALUES (?)",
    [title],
    (err) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Create failed" });
      }

      res.json({ message: "Created" });
    }
  );
};

// UPDATE
exports.updateTodo = (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;

  db.query(
    "UPDATE todos SET completed=? WHERE id=?",
    [completed, id],
    (err) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Update failed" });
      }

      res.json({ message: "Updated" });
    }
  );
};

// DELETE
exports.deleteTodo = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM todos WHERE id=?", [id], (err) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Delete failed" });
    }

    res.json({ message: "Deleted" });
  });
};