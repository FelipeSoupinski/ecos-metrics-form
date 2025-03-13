const db = require("./database");

module.exports = async (email, scenario, cb) => {
  db.get(
    "SELECT * FROM response WHERE userEmail = ? AND scenario = ? LIMIT 1",
    [email, scenario],
    (err, row) => cb?.(err, row)
  );
};
