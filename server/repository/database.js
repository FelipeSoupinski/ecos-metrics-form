const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.resolve(__dirname, "../db/database.sqlite");

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Error opening database:", dbPath, err.message);
  } else {
    console.log("Connected to the SQLite database.");
  }
});

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS user (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      wantResults BOOLEAN NOT NULL,
      currentPosition TEXT NOT NULL,
      educationLevel TEXT NOT NULL,
      xpMonths TEXT NOT NULL,
      country TEXT NOT NULL,
      gender TEXT,
      degreeArea TEXT
    )`);

  db.run(`CREATE TABLE IF NOT EXISTS response (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            scenario INTEGER NOT NULL,
            userEmail TEXT NOT NULL,
            value TEXT NOT NULL,
            additionalConsiderations TEXT
        )`);
});

module.exports = db;
