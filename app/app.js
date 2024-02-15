const express = require("express");
const morgan = require("morgan");

const app = express();

// --- middleware
app.use(morgan("dev"));

//---Routes

//register admin
app.post("/api/v1/admins/register", (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "admin has been registered",
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: error.message,
    });
  }
});

//login admin
app.post("/api/v1/admins/login", (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "admin is logged in",
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: error.message,
    });
  }
});

//GET admins
app.get("/api/v1/admins", (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: "admins are found and listed",
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      error: error.message,
    });
  }
});

//GET an admin
app.get("/api/v1/admins/:id", (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: "admin with the give id is found ",
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      error: error.message,
    });
  }
});

//PUT -update an admin
app.put("/api/v1/admins/:id", (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: "admin with the give id is updated ",
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: error.message,
    });
  }
});

//DELETE -update an admin
app.delete("/api/v1/admins/:id", (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: "admin with the give id is deleted successfully ",
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: error.message,
    });
  }
});

//PUT -admin is suspending the teacher with the given id
app.put("/api/v1/admins/suspend/teacher/:id", (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: "admin suspended the teacher successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: error.message,
    });
  }
});

//PUT -admin is unsuspending the teacher with the given id
app.put("/api/v1/admins/unsuspend/teacher/:id", (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: "admin unsuspended the teacher successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: error.message,
    });
  }
});

//PUT -admin is withdrawing the teacher with the given id
app.put("/api/v1/admins/withdraw/teacher/:id", (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: "admin withdrawed the teacher successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: error.message,
    });
  }
});

//PUT -admin is unwithdrawing the teacher with the given id
app.put("/api/v1/admins/unwithdraw/teacher/:id", (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: "admin unwithdrawed the teacher successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: error.message,
    });
  }
});

//PUT -admin is publishing the exam with the given id
app.put("/api/v1/admins/publish/exam/:id", (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: "admin published the exam successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: error.message,
    });
  }
});

//PUT -admin is unpublishing the exam with the given id
app.put("/api/v1/admins/unpublish/exam/:id", (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: "admin unpublished the exam successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: error.message,
    });
  }
});



module.exports = app;
