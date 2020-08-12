const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ScheduleSchema = new Schema(
  {
    time: {
      type: string,
      required: true,
    },
    date: {
      type: Date,
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