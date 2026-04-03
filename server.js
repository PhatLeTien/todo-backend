// const express = require("express");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());

// const todoRoutes = require("./routes/todoRoutes");
// app.use("/api/todos", todoRoutes);

// app.listen(5000, () => console.log("Server running"));

const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors({
  origin: "*"
}));
app.use(express.json());

// Routes
const todoRoutes = require("./routes/todoRoutes");
app.use("/api/todos", todoRoutes);

// Test route (rất nên có để debug)
app.get("/", (req, res) => {
  res.send("API is running...");
});

// ⚠️ Quan trọng: dùng PORT từ môi trường
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});