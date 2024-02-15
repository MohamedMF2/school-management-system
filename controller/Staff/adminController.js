//@desc      Register a new admin
//@route     POST /api/v1/admins/register
//@access    Private (requires authentication)

exports.registerAdminCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin has been registered successfully.",
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      error: error.message,
    });
  }
};

//@desc      Login admin
//@route     POST /api/v1/admins/login
//@access    Private (requires authentication)

exports.loginAdminCtrl = (req, res) => {
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
};

//@desc      Get admins
//@route     GET /api/v1/admins
//@access    Private (requires authentication)

exports.getAdminsCtrl = (req, res) => {
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
};

//@desc      Get an admin
//@route     GET /api/v1/admins/:id
//@access    Private (requires authentication)

exports.getAdminCtrl = (req, res) => {
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
};

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
