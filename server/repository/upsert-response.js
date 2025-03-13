const db = require("./database");
const getResponse = require("./get-response");

module.exports = async (data, cb) => {
  const { scenario, userEmail, value, additionalConsiderations } = data;

  const response = await getResponse(userEmail, scenario);

  if (response) {
    db.run(
      "UPDATE response SET value = ?, additionalConsiderations = ? WHERE scenario = ? AND userEmail = ?",
      [JSON.stringify(value), additionalConsiderations, scenario, userEmail],
      (err, rows) => cb?.(err, rows)
    );
  }

  if (!response) {
    db.run(
      "INSERT INTO response (scenario, userEmail, value, additionalConsiderations) VALUES (?, ?, ?, ?)",
      [scenario, userEmail, JSON.stringify(value), additionalConsiderations],
      (err, rows) => cb?.(err, rows)
    );
  }
};