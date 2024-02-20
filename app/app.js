const express = require("express");
const morgan = require("morgan");
const adminRouter = require("../routes/Staff/adminRouter");

const app = express();

// --- middleware
//http methods logging middleware
app.use(morgan("dev"));

//parse json
app.use(express.json());
// Admin Middleware for routing different endpoints
app.use("/api/v1/admins", adminRouter);


module.exports = app;
