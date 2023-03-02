const express = require("express");
const { Express } = require("express");
const list = require("../routes/list");
const seed = require("../routes/seed");
const reset = require("../routes/reset");

module.exports = function (app: any) {
  app.use(express.json());
  app.use("/api/list", list);
  app.use("/api/seed", seed);
  app.use("/api/reset", reset);
};
export {};
