const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LessonSchema = new Schema(
  {
    number: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    flashCards: {
      type: String,
      required: true,
    },
    videos: {
      type: String,
      required: true,
    },
    worksheets: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Lesson = mongoose.model("Lesson", LessonSchema);
