const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  studentId: {
    type: String,
    required: true,
    default: function () {
      return (
        "STU" +
        Math.floor(100 + Math.random() * 900) +
        Date.now().toString().slice(2, 4) +
        this.name
          .split("")
          .map((name) => name[0])
          .join("")
          .toUpperCase()
      );
    },
  },
  role: { type: String, default: "Student" },
  classLevels: [
    { type: Schema.Types.ObjectId, ref: "ClassLevel", required: true },
  ],
  currentClassLevel: {
    type: String,
    default: function () {
      return this.classLevels[this.classLevels.length - 1];
    },
  },
  academicYear: {
    type: Schema.Types.ObjectId,
    ref: "AcademicYear",
    required: true,
  },
  examResults: { type: Schema.Types.ObjectId, ref: "ExamResult" },
  dateAdmitted: { type: Date, default: Date.now },

  program: { type: Schema.Types.ObjectId, ref: "Program", required: true },
  isPromotedToLevel200: { type: Boolean, default: false },
  isPromotedToLevel300: { type: Boolean, default: false },
  isPromotedToLevel400: { type: Boolean, default: false },
  isGraduated: { type: Boolean, default: false },
  isWithDrawn: { type: Boolean, default: false },
  perfectName: { type: String },
  yearGraduated: { type: String },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
