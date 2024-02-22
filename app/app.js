const express = require("express");
const morgan = require("morgan");

const adminRouter = require("../routes/Staff/adminRouter");
const {
  globalErrHandler,
  notFoundErr,
} = require("../middlewares/globalErrHandler");

const app = express();

//logging middleware
app.use(morgan("dev"));

//parsing JSON data middleware
app.use(express.json());

//routing Middleware
app.use("/api/v1/admins", adminRouter);

//not found middleware
app.use(notFoundErr);

//global error middleware
app.use(globalErrHandler);

module.exports = app;
