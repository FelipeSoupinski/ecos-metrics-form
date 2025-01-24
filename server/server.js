require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.SERVER_PORT;
const domain = process.env.SERVER_DOMAIN;
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
  const { name, email, wantResults } = req.body;
  db.run(
    `INSERT INTO user (name, email, wantResults) VALUES ('${name}', '${email}', '${wantResults}')`,
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
  const { scenario, userEmail, value } = req.body;
  db.run(
    `INSERT INTO response (scenario, userEmail, value) VALUES ('${scenario}', '${userEmail}', '${value}')`,
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
  console.log(`Server is running on ${domain}:${port}`);
});
