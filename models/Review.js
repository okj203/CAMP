const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  rating: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  reviewer_id: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  teacher_id: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

module.exports = Tweet = mongoose.model("Review", ReviewSchema);
