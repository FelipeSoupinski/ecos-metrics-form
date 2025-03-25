const db = require("./database");

module.exports = async (cb) =>
  db.all("SELECT * FROM user", [], (err, rows) => cb?.(err, rows));
