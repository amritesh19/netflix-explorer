const winston = require("winston");
const mongoose = require("mongoose");
const config = require("config");

// mongoose.set("strictQuery", false);

module.exports = function () {
  const db = config.get("db");
  console.log(db);
  mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => winston.info(`Connected to ${db}...`))
    .catch((err: any) => {
      console.error("App starting error:", err.stack);
    });
  console.log("hi");
};
export {};
