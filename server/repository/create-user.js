const db = require("./database");

module.exports = async (user, cb) => {
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
