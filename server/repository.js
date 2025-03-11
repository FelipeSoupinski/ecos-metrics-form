const db = require("./database");

const createUser = async (user, cb) => {
  const {
    name,
    email,
    wantResults,
    currentPosition,
    educationLevel,
    xpMonths,
    country,
    gender,
    degreeArea,
  } = user;

  db.run(
    "INSERT INTO user (name, email, wantResults, currentPosition, educationLevel, xpMonths, country, gender, degreeArea) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      name,
      email,
      wantResults,
      currentPosition,
      educationLevel,
      xpMonths,
      country,
      gender,
      degreeArea,
    ],
    (err, rows) => cb?.(err, rows)
  );
};

const getResponse = async (email, scenario, cb) => {
  db.get(
    "SELECT * FROM response WHERE userEmail = ? AND scenario = ? LIMIT 1",
    [email, scenario],
    (err, row) => cb?.(err, row)
  );
};

const upsertResponse = async (data, cb) => {
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

module.exports = {
  createUser,
  getResponse,
  upsertResponse,
};
