const mongoose = require("mongoose");
const { Schema } = mongoose;

const yearGroupSchema = new Schema(
  {
    name: { type: String, required: true },
    createdBy: { type: mongoose.Types.ObjectId, ref: "Admin", required: true },
    academicYear: {
      type: mongoose.Types.ObjectId,
      ref: "AcademicYear",
      required: true,
    },
  },
  { timestamps: true }
);

const YearGroup = mongoose.model("YearGroup", yearGroupSchema);
module.exports = YearGroup;
