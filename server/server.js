require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.SERVER_PORT;
const domain = process.env.SERVER_DOMAIN;
const db = require("./database");
const path = require("node:path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.post("/user", (req, res) => {
  const { name, email, wantResults } = req.body;
  db.run(
    "INSERT INTO user (name, email, wantResults) VALUES (?, ?, ?)",
    [name, email, wantResults],
    (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({ data: rows });
    }
  );
});

app.get("/response", (req, res) => {
  const { email, scenario } = req.query;
  db.get(
    "SELECT * FROM response WHERE userEmail = ? AND scenario = ? LIMIT 1",
    [email, scenario],
    (err, row) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({ data: row });
    }
  );
});

app.post("/response", (req, res) => {
  const { scenario, userEmail, value, additionalConsiderations } = req.body;

  db.get(
    "SELECT * FROM response WHERE scenario = ? AND userEmail = ?",
    [scenario, userEmail],
    (err, row) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }

      if (row) {
        db.run(
          "UPDATE response SET value = ?, additionalConsiderations = ? WHERE scenario = ? AND userEmail = ?",
          [
            JSON.stringify(value),
            additionalConsiderations,
            scenario,
            userEmail,
          ],
          (err) => {
            if (err) {
              res.status(400).json({ error: err.message });
              return;
            }
            res.json({ message: "Response updated successfully" });
          }
        );
      } else {
        db.run(
          "INSERT INTO response (scenario, userEmail, value, additionalConsiderations) VALUES (?, ?, ?, ?)",
          [
            scenario,
            userEmail,
            JSON.stringify(value),
            additionalConsiderations,
          ],
          (err) => {
            if (err) {
              res.status(400).json({ error: err.message });
              return;
            }
            res.json({ message: "Response added successfully" });
          }
        );
      }
    }
  );
});

app.use(express.static(path.join(__dirname, '../build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on ${domain}:${port}`);
});
