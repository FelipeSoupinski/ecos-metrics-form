const db = require("./database");

module.exports = async (cb) =>
  db.all("SELECT * FROM response", [], (err, rows) => cb?.(err, rows));
