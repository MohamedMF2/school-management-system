const mongoose = require("mongoose");
const { Schema } = mongoose;

const classLevelSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    createdBy: { type: Schema.Types.ObjectId, ref: "Admin", required: true },
    students: [{ type: Schema.Types.ObjectId, ref: "Student" }],
    teachers: [{ type: Schema.Types.ObjectId, ref: "Teacher" }],
    subjects: [{ type: Schema.Types.ObjectId, ref: "Subject" }],
  },
  { timestamps: true }
);

const ClassLevel = mongoose.model("ClassLevel", classLevelSchema);

module.exports = ClassLevel;
