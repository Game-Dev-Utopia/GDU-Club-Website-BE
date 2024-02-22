import mongoose from "mongoose";

const { Schema } = mongoose;

const timelineEventSchema = new Schema({
  title: {
    type: String,
    required: [true, "Please provide title"],
  },
  description: {
    type: String,
    required: [true, "Please provide description"],
  },
  date: {
    type: Date,
    required: [true, "Please provide date"],
  },
  location: {
    type: String,
    required: [true, "Please provide location"],
  },
  category: {
    type: String,
    required: [true, "Please provide category"],
  },
  link: {
    type: String,
    validate: {
      validator: (value) => {
        return /^https?:\/\/.+$/.test(value);
      },
      message: "Invalid URL format for the link",
    },
  },
});

const TimelineEvent = mongoose.model("TimelineEvent", timelineEventSchema);

export default TimelineEvent;
