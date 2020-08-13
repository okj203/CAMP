const mongoose = require("mongoose");
const { time } = require("console");
const Schema = mongoose.Schema;

const EventSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        student_id: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        teacher_id: {
            type: Schema.Types.ObjectId,
            required: true
        },
        start_time: {
            type: Date,
            required: true,
        },
        end_time: {
            type: Date,
            required: true,
        },
    },  
    {
    timestamps: true,
    }
);

module.exports = Event = mongoose.model("Event", EventSchema);
