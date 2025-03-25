const db = require("./database");

module.exports = async () => {
  db.get("SELECT * FROM response");
};
