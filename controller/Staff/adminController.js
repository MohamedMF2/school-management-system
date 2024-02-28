const Admin = require("../../model/Staff/Admin");
const generateToken = require("../../utils/generateToken");
const { hashPassword, verifyPasswords } = require("../../utils/passwordUtils");
const asyncHandler = require("express-async-handler");
const verifyToken = require("../../utils/verifyToken");

//@desc      Register a new admin
//@route     POST /api/v1/admins/register
//@access    Private (requires authentication)

exports.registerAdminCtrl = asyncHandler(async (req, res) => {
  //destructure the request body
  const { name, email, password } = req.body;

  //check if admin with the provided email exists
  const adminFound = await Admin.findOne({ email: email });

  if (adminFound) {
    throw new Error("admin exists");
  }

  //create new admin with hash the password using bcrypt
  const hashedPassword = await hashPassword(password);
  const newAdmin = await Admin.create({
    name,
    email,
    password: hashedPassword,
  });

  // respond with success message and the created resource
  res.status(201).json({
    status: "success",
    message: "Admin has been registered successfully.",
    data: newAdmin,
  });
});

//@desc      Login admin
//@route     POST /api/v1/admins/login
//@access    Private (requires authentication)

exports.loginAdminCtrl = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Find admin by email
  const user = await Admin.findOne({ email });

  if (!user) {
    return res.status(404).json({
      status: "failed",
      message: "invalid login credentials",
    });
  }

  // Compare input password with hashed password
  const passwordMatch = await verifyPasswords(password, user.password);

  if (user && passwordMatch) {
    // Passwords match
    const token = generateToken(user._id, 20);
    const verify = verifyToken(token);

    return res.status(200).json({
      status: "success",
      message: "Admin is logged in",
      data: generateToken(user._id, 20),
      user,
      verify,
    });
  } else {
    // Passwords don't match
    console.log("Passwords do not match!");
    return res.status(401).json({
      status: "failed",
      message: "Invalid credentials",
    });
  }
});

//@desc      Get admins
//@route     GET /api/v1/admins
//@access    Private (requires authentication)

exports.getAdminsCtrl = asyncHandler(async (req, res) => {
  const admins = await Admin.find();
  res.status(200).json({
    status: "success",
    message: "admins fetched successfully",
    data: admins,
  });
});

//@desc      Get an admin
//@route     GET /api/v1/admins/:id
//@access    Private (requires authentication)

exports.getAdminProfileCtrl = asyncHandler(async (req, res) => {
  console.log(`req.userAuth${req.userAuth}`);
  const admin =await Admin.findById(req.userAuth?._id).select("-createdAt -updatedAt -password  -_id");
  if (!admin) {
    throw new Error("admin not not found");
  } else {
    res.status(200).json({
      status: "success",
      message: "admin fetched successfully",
      data: admin,
    });
  }
});

//@desc      Update an admin
//@route     PUT /api/v1/admins/:id
//@access    Private (requires authentication)

exports.updateAdminCtrl = (req, res) => {
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
};

//@desc      Delete an admin
//@route     DELETE /api/v1/admins/:id
//@access    Private (requires authentication)

exports.deleteAdminCtrl = (req, res) => {
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
};

//@desc      Update as admin suspends teach with a given ID
//@route     PUT /api/v1/admins/suspend/teacher/:id
//@access    Private (requires authentication)

exports.adminSuspendTeacherCtrl = (req, res) => {
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
};

//@desc      Update as admin unsuspends teach with a given ID
//@route     PUT /api/v1/admins/unsuspend/teacher/:id
//@access    Private (requires authentication)

exports.adminUnsuspendTeacherCtrl = (req, res) => {
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
};

//@desc      admin is withdrawing the teacher with the given id
//@route     PUT /api/v1/admins/withdraw/teacher/:id
//@access    Private (requires authentication)

exports.adminWithdrawTeacherCtrl = (req, res) => {
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
};

//@desc      admin is unwithdrawing the teacher with the given id
//@route     PUT /api/v1/admins/unwithdraw/teacher/:id
//@access    Private (requires authentication)

exports.adminUnwithdrawTeacherCtrl = (req, res) => {
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
};

//@desc      admin is publish the exam with the given id
//@route     PUT /api/v1/admins/publish/exam/:id
//@access    Private (requires authentication)

exports.adminPublishExamCtrl = (req, res) => {
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
};

//@desc      admin is unpublish the exam with the given id
//@route     PUT /api/v1/admins/unpublish/exam/:id
//@access    Private (requires authentication)

exports.adminUnpublishExamCtrl = (req, res) => {
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
};
