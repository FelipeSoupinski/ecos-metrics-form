require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.SERVER_PORT;
const domain = process.env.SERVER_DOMAIN;
const path = require("node:path");
const cors = require("cors");
const { createUser, getResponse, upsertResponse } = require("./repository.js");

app.use(express.json());
app.use(cors());

app.post("/user", (req, res) => {
  createUser(req.body, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ data: rows });
  });
});

app.get("/response", (req, res) => {
  const { email, scenario } = req.query;
  getResponse(email, scenario, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ data: row });
  });
});

app.post("/response", (req, res) => {
  upsertResponse(req.body, (err) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ message: "Response updated successfully" });
  });
});

app.use(express.static(path.join(__dirname, "../build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on ${domain}:${port}`);
});
