const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const todoRoutes = require("./routes/todoRoutes");
app.use("/api/todos", todoRoutes);

app.listen(5000, () => console.log("Server running"));