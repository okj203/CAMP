const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ScheduleSchema = new Schema(
  {
    time: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    teacher_id: {
      type: Number,
      required: true,
    },
    student_id: {
      type: Number,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = Schedule = mongoose.model("Schedule", ScheduleSchema);