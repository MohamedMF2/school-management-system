const express = require("express");
const morgan = require("morgan");

const app = express();

// ---- middleware
app.use(morgan("dev"));

module.exports = app;
