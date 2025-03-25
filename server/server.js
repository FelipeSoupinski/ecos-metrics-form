require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.SERVER_PORT;
const domain = process.env.SERVER_DOMAIN;
const path = require("node:path");
const cors = require("cors");
const createUser = require("./repository/create-user");
const getResponse = require("./repository/get-response");
const upsertResponse = require("./repository/upsert-response");
const getAllUsers = require("./repository/get-all-users");
const getAllResponses = require("./repository/get-all-responses");

app.use(express.json());
app.use(cors());

app.get("/download-users", (req, res) => {
  const { token } = req.params;

  if (token !== process.env.REPORT_TOKEN) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  getAllUsers()
    .then((rows) => {
      const fileName = "users.json";
      const jsonContent = JSON.stringify(rows, null, 2);
      res.setHeader("Content-Disposition", `attachment; filename=${fileName}`);
      res.setHeader("Content-Type", "application/json");
      res.send(jsonContent);
    })
    .catch((err) => {
      if (err) res.status(500).json({ error: err.message });
    });
});

app.get("/download-responses", (req, res) => {
  const { token } = req.params;

  if (token !== process.env.REPORT_TOKEN) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  getAllResponses()
    .then((rows) => {
      const fileName = "responses.json";
      const jsonContent = JSON.stringify(rows, null, 2);
      res.setHeader("Content-Disposition", `attachment; filename=${fileName}`);
      res.setHeader("Content-Type", "application/json");
      res.send(jsonContent);
    })
    .catch((err) => {
      if (err) res.status(500).json({ error: err.message });
    });
});

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
