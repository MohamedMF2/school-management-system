const mongoose = require("mongoose");

const programSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 4,
    },
    code: {
      type: String,
      default: function () {
        return this.name.split(" ")[0] + "-" + Math.floor(Math.random() * 1000) ;
      },
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
    teachers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Teacher",
        default: [],
      },
    ],
    students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        default: [],
      },
    ],
    subjects: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subject",
        default: [],
      },
    ],
  },
  { timestamps: true }
);

const Program = mongoose.model("Program", programSchema);

module.exports = Program;
