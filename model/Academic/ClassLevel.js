const mongoose = require("mongoose");
const { Schema } = mongoose;

const classLevelSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    createdBy: { type: mongoose.Types.ObjectId, ref: "Admin", required: true },
    students: [{ type: mongoose.Types.ObjectId, ref: "Student" }],
    teachers: [{ type: mongoose.Types.ObjectId, ref: "Teacher" }],
    subjects: [{ type: mongoose.Types.ObjectId, ref: "Subject" }],
  },
  { timestamps: true }
);

const ClassLevel = mongoose.model("ClassLevel", classLevelSchema);

module.exports = ClassLevel;
