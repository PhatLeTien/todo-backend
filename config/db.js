const mysql = require("mysql2");

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "123",
//   database: "todo_app",
// });

const db = mysql.createConnection({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
});

// ❗ KHÔNG throw error (tránh crash)
db.connect(err => {
  if (err) {
    console.log("DB connection error:", err);
  } else {
    console.log("MySQL Connected");
  }
});

module.exports = db;