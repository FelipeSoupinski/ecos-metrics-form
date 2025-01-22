const express = require("express");
const app = express();
const port = 5000;
const db = require("./database");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  db.all("SELECT * FROM user", [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ data: rows });
  });
});

app.post("/user", (req, res) => {
  const { name, email } = req.body;
  db.run(
    `INSERT INTO user (name, email) VALUES ('${name}', '${email}')`,
    [],
    (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({ data: rows });
    }
  );
});

app.post("/response", (req, res) => {
  const { scenario, userId, value } = req.body;
  db.run(
    `INSERT INTO response (scenario, userId, value) VALUES ('${scenario}', '${userId}', '${value}')`,
    [],
    (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({ data: rows });
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
