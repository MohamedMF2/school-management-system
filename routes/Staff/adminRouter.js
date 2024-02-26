const express = require("express");
const {
  registerAdminCtrl,
  loginAdminCtrl,
  getAdminsCtrl,
  getAdminCtrl,
  updateAdminCtrl,
  deleteAdminCtrl,
  adminSuspendTeacherCtrl,
  adminUnsuspendTeacherCtrl,
  adminWithdrawTeacherCtrl,
  adminUnwithdrawTeacherCtrl,
  adminPublishExamCtrl,
  adminUnpublishExamCtrl,
} = require("../../controller/Staff/adminController");
const isLogin = require("../../middlewares/isLogin");

const adminRouter = express.Router();

adminRouter.post("/register", registerAdminCtrl);

//login admin
adminRouter.post("/login", loginAdminCtrl);

//GET admins
adminRouter.get("/", getAdminsCtrl);

//GET an admin
adminRouter.get("/:id", isLogin,getAdminCtrl);

//PUT -update an admin
adminRouter.put("/:id", updateAdminCtrl);

//DELETE -delete an admin
adminRouter.delete("/:id", deleteAdminCtrl);

//PUT -admin is suspending the teacher with the given id
adminRouter.put("/suspend/teacher/:id", adminSuspendTeacherCtrl);

//PUT -admin is unsuspending the teacher with the given id
adminRouter.put("/unsuspend/teacher/:id", adminUnsuspendTeacherCtrl);

//PUT -admin is withdrawing the teacher with the given id
adminRouter.put("/withdraw/teacher/:id", adminWithdrawTeacherCtrl);

//PUT -admin is unwithdrawing the teacher with the given id
adminRouter.put("/unwithdraw/teacher/:id", adminUnwithdrawTeacherCtrl);

//PUT -admin is publishing the exam with the given id
adminRouter.put("/publish/exam/:id",adminPublishExamCtrl );

//PUT -admin is unpublishing the exam with the given id
adminRouter.put("/unpublish/exam/:id", adminUnpublishExamCtrl);

module.exports = adminRouter;
